# frozen_string_literal: true

require 'base64'
require 'faraday'
require 'json'
require 'open-uri'
require 'addressable/uri'

# require 'activesupport/lib/active_support/base64.rb'
# require 'active_support'

# rubocop:disable Security/Open
# rubocop:disable Metrics/BlockLength
# rubocop:disable Lint/UriEscapeUnescape

# Create users, have each user create 5 reviews

unless File.exist?('resy-responses.json')
  puts 'Getting resy response'
  headers = {
    "x-rapidapi-key": Figaro.env.RESY_API_KEY,
    "x-rapidapi-host": 'resy.p.rapidapi.com',
    "useQueryString": 'true'
  }

  coordinates = [
    { 'lat' => '37.787765', 'long' => '-122.403627' }, # soma
    { 'lat' => '37.775218', 'long' => '-122.419305' }, # hayes valley
    # {'lat' => '37.754792', 'long' => '-122.414428'}, # mission
    { 'lat' => '37.796902', 'long' => '-122.438171' }, # cow hollow
    { 'lat' => '37.791257', 'long' => '-122.422779' }, # nob hill/pac heights
    { 'lat' => '37.782621', 'long' => '-122.472477' }, # richmond
    { 'lat' => '37.758395', 'long' => '-122.388444' }, # dogpatch
    { 'lat' => '37.808546', 'long' => '-122.266554' } # downtown oakland
  ]

  restaurants_array = []

  coordinates.each do |coordinate|
    params = { 'lat' => coordinate['lat'],
               'long' => coordinate['long'],
               'day' => '2021-05-21',
               'party_size' => '2',
               'offset' => '0' }

    puts "About to make request for [#{coordinate['lat']}, #{coordinate['long']}]"
    response = Faraday.get('https://resy.p.rapidapi.com/4/find', params, headers)
    parsed_response = JSON.parse(response.body)

    # body_string = response.body.to_json
    # File.open('debug.json', 'w') { |file| file.write(body_string)}

    raise 'did not work' unless response.status == 200

    sleep(1)
    restaurants_array += parsed_response['results']['venues']
  end

  restaurants_string = restaurants_array.to_json

  File.open('resy-responses.json', 'w') { |file| file.write(restaurants_string) }

  # make an array of venues, load it up
  # list of coordinates, for each one make a request, accumulator to store responses in

end

resy_string = File.read('resy-responses.json')
restaurants = JSON.parse(resy_string)

puts 'Getting photo urls from photo ids'

non_unique_mapped_restaurants = restaurants.map do |restaurant|
  default_template_id = restaurant['venue']['default_template']

  photo_id = restaurant['venue']['responsive_images']['file_names'].first
  partial_photo_url = restaurant['venue']['responsive_images']['urls'][photo_id]
  photo_url = nil

  if partial_photo_url
    if partial_photo_url['1:1']
      if partial_photo_url['1:1']['1600']
        photo_url = partial_photo_url['1:1']['1600']
      elsif partial_photo_url['1:1']['800']
        photo_url = partial_photo_url['1:1']['800']
      elsif partial_photo_url['1:1']['400']
        photo_url = partial_photo_url['1:1']['400']
      elsif partial_photo_url['1:1']['200']
        photo_url = partial_photo_url['1:1']['200']
      end
    elsif partial_photo_url['4:3']
      if partial_photo_url['4:3']['1600']
        photo_url = partial_photo_url['4:3']['1600']
      elsif partial_photo_url['4:3']['800']
        photo_url = partial_photo_url['4:3']['800']
      elsif partial_photo_url['4:3']['400']
        photo_url = partial_photo_url['4:3']['400']
      elsif partial_photo_url['4:3']['200']
        photo_url = partial_photo_url['4:3']['200']
      end
    elsif partial_photo_url['16:9']
      if partial_photo_url['16:9']['1600']
        photo_url = partial_photo_url['16:9']['1600']
      elsif partial_photo_url['16:9']['800']
        photo_url = partial_photo_url['16:9']['800']
      elsif partial_photo_url['16:9']['400']
        photo_url = partial_photo_url['16:9']['400']
      elsif partial_photo_url['16:9']['200']
        photo_url = partial_photo_url['16:9']['200']
      end
    end
  else
    photo_url = 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=6fe0ebd22151102996062fa1287f824c'
  end

  puts "Determined that photo for #{restaurant['name']} is #{photo_url}"
  {
    name: restaurant['venue']['name'],
    id: restaurant['venue']['id']['resy'],
    description: restaurant['templates'][default_template_id]['content']['en-us']['about']['body'],
    latitude: restaurant['venue']['location']['geo']['lat'],
    longitude: restaurant['venue']['location']['geo']['lon'],
    submitter_id: 1,
    photo_url: photo_url
  }
end

mapped_restaurants = non_unique_mapped_restaurants.uniq { |restaurant| restaurant[:latitude] }

unless File.exist?('tomtom-responses.json')
  puts 'Generating tomtom responses.json...'
  restaurant_addresses = mapped_restaurants.map do |restaurant|
    query_string = "https://api.tomtom.com/search/2/reverseGeocode/#{restaurant[:latitude]},#{restaurant[:longitude]}.json?key=#{Figaro.env.TOMTOM_API_KEY}"

    response = Faraday.get(query_string)

    raise "Error getting address for #{restaurant[:name]}" unless response.status == 200

    puts "Received #{restaurant[:name]} address"

    sleep(1) # sleep because tomtom_api rate limits to one per second

    JSON.parse(response.body)
  end
  restaurant_addresses_string = restaurant_addresses.to_json

  File.open('tomtom-responses.json', 'w') { |file| file.write(restaurant_addresses_string) }
  puts 'Successfully wrote tomtom-responses.json'
end

tomtom_string = File.read('tomtom-responses.json')
tomtom_array_responses = JSON.parse(tomtom_string)

addresses = tomtom_array_responses.map do |address_response|
  address_response['addresses'][0]['address']['freeformAddress']
end

puts 'Getting addresses from coordinate'
mapped_restaurants_with_addresses = mapped_restaurants.map.with_index do |restaurant, i|
  restaurant_with_address = restaurant.dup
  restaurant_with_address[:location] = addresses[i]
  restaurant_with_address
end

puts 'Creating restaurants'
mapped_restaurants_with_addresses.each do |restaurant|
  puts "Creating #{restaurant[:name]}"

  partial_restaurant = Restaurant.new(
    {
      name: restaurant[:name],
      location: restaurant[:location],
      description: restaurant[:description],
      latitude: restaurant[:latitude],
      longitude: restaurant[:longitude],
      submitter_id: restaurant[:submitter_id]
    }
  )

  parsed_url = URI.encode(restaurant[:photo_url])
  filename = File.basename(parsed_url)
  photo_file = URI.open(parsed_url)
  partial_restaurant.photo.attach(io: photo_file, filename: filename)
  partial_restaurant.save!

  puts "Created #{restaurant[:name]}"
end

puts 'Finished seeding'

# callie = User.create!(username: 'calpal', password: 'password', email: 'calpal@gmail.com')
# squeaky = User.create!(username: 'squeakfreak', password: 'password', email: 'squeaks@gmail.com')
# stinky = User.create!(username: 'flapjack', password: 'password', email: 'flapjack@gmail.com')
# rubocop:disable Style/AsciiComments

# nopa = Restaurant.create!(name: 'Nopa', description: 'A San Francisco Gathering Place',
#                           location: '560 Divisadero St, SF, CA, 94117',
#                           latitude: 37.774890, longitude: -122.437630,
#                           submitter: callie)
# lardoise = Restaurant.create!(name: "L'Ardoise", description: 'French bistro in San Francisco',
#                               location: '151 Noe St, SF, CA 94114',
#                               latitude: 37.766560, longitude: -122.433150,
#                               submitter: squeaky)
# zuni = Restaurant.create!(name: 'Zuni Cafe', description: 'Zuni Cafe opened in San Francisco on Febuarary 15, 1979',
#                           location: '1658 Market St, SF, CA 94102',
#                           latitude: 37.773610, longitude: -122.421430,
#                           submitter: stinky)

# Review.create!(author: callie, restaurant: nopa, rating: 5,
#                body: "Cupcake ipsum dolor sit. Amet chocolate lemon drops
#               topping dragée icing. Dessert bear claw halvah. Biscuit
#               jelly beans fruitcake halvah gummi bears carrot cake
#               gummies sweet croissant. Chupa chups sugar plum sesame
#               snaps brownie marshmallow soufflé. Gummi bears gummies
#               liquorice sweet topping. Chocolate bar pie chocolate.
#               Caramels jujubes gingerbread jelly gummies jelly candy canes chocolate
#               bar. Jelly-o brownie liquorice dragée cotton candy tiramisu
#               jelly-o. Pie candy canes soufflé.

#               Dragée icing sesame snaps icing cupcake wafer oat cake
#               fruitcake. Pastry soufflé oat cake. Jelly beans dragée
#               caramels candy canes. Dessert jujubes pudding bonbon
#               halvah gummi bears jelly-o marzipan pie. Danish soufflé
#               macaroon caramels lollipop. Tiramisu bonbon topping marzipan.
#               Apple pie bonbon jujubes wafer lemon drops caramels jujubes.
#               Dessert ice cream jujubes muffin.")
# Review.create!(author: squeaky, restaurant: nopa, rating: 5,
#                body: 'Port-salut jarlsberg the big cheese. Goat emmental who
#                moved my cheese edam the big cheese cheese slices stilton
#                stinking bishop. Stinking bishop manchego airedale brie
#                taleggio port-salut gouda stilton. Cheese strings
#                bocconcini emmental camembert de normandie dolcelatte
#                stilton pecorino cheese slices. Who moved my cheese
#                mozzarella queso.

#               Swiss mascarpone cheesy feet. Parmesan cheese and biscuits
#               when the cheese comes out everybody is happy paneer
#               fromage cheese slices squirty cheese cheddar.
#               Fromage frais brie cheese and biscuits melted cheese
#               cheesecake stinking bishop pecorino st. agur blue cheese.
#               Cheese strings queso who moved my cheese parmesan ricotta when
#               the cheese comes out everybody is happy.')

# Review.create!(author: stinky, restaurant: nopa, rating: 4,
#                body: 'Gouda st. agur blue cheese roquefort. Roquefort
#               fromage cheese slices st. agur blue cheese pepper jack
#               rubber cheese brie squirty cheese. The big cheese
#               fromage the big cheese feta fondue cheese on toast
#               cheese dolcelatte. Fromage frais.')

# Review.create!(author: squeaky, restaurant: lardoise, rating: 5, body: 'Very good')
# Review.create!(author: stinky, restaurant: zuni, rating: 5, body: 'Excellent')
# rubocop:enable Style/AsciiComments

# rubocop:enable Metrics/BlockLength
# rubocop:enable Security/Open
# rubocop:enable Lint/UriEscapeUnescape
