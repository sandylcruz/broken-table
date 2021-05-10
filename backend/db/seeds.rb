# frozen_string_literal: true

require 'addressable/uri'
require 'base64'
require 'faker'
require 'faraday'
require 'json'
require 'open-uri'

# rubocop:disable Security/Open
# rubocop:disable Metrics/BlockLength
# rubocop:disable Lint/UriEscapeUnescape

40.times do
  puts 'making partial user'

  user_with_photo_url = {
    username: Faker::Internet.username,
    password: Faker::Internet.password(min_length: 6),
    email: Faker::Internet.safe_email,
    photo_url: Faker::Avatar.image,
    name: Faker::Games::Zelda.character,
    city: Faker::Games::Zelda.location,
    state: Faker::Address.state_abbr,
    phone_number: Faker::PhoneNumber.cell_phone
  }

  partial_user = User.new({
                            username: Faker::Internet.username,
                            password: Faker::Internet.password(min_length: 6),
                            email: Faker::Internet.safe_email,
                            name: Faker::Games::Zelda.character,
                            city: Faker::Games::Zelda.location,
                            state: Faker::Address.state_abbr,
                            phone_number: Faker::PhoneNumber.cell_phone
                          })

  puts 'parsing photo'
  parsed_url = URI.encode(user_with_photo_url[:photo_url])
  filename = File.basename(parsed_url)
  photo_file = URI.open(parsed_url)
  partial_user.photo.attach(io: photo_file, filename: filename)
  partial_user.save!

  puts 'User created successfully'
end

all_restaurants = Restaurant.all

User.all.each do |user|
  restaurants = all_restaurants.sample(rand(4..7))

  restaurants.each do |restaurant|
    author = user
    restaurant_to_add = restaurant
    rating = rand(3..5)
    body = Faker::Restaurant.review

    Review.create!(author: author, restaurant: restaurant_to_add, rating: rating, body: body)
  end
end

# call .sample on user

# Create users, have each user create 5 reviews

unless File.exist?('api-responses-resy-responses.json')
  puts 'Getting resy response'

  headers = {
    "x-rapidapi-key": Figaro.env.RESY_API_KEY,
    "x-rapidapi-host": 'resy.p.rapidapi.com',
    "useQueryString": 'true'
  }

  coordinates = [
    { 'lat' => '37.787765', 'long' => '-122.403627' }, # soma
    { 'lat' => '37.775218', 'long' => '-122.419305' }, # hayes valley
    { 'lat' => '37.796902', 'long' => '-122.438171' }, # cow hollow
    { 'lat' => '37.791257', 'long' => '-122.422779' }, # nob hill/pac heights
    { 'lat' => '37.782621', 'long' => '-122.472477' }, # richmond
    { 'lat' => '37.758395', 'long' => '-122.388444' }, # dogpatch
    { 'lat' => '37.808546', 'long' => '-122.266554' } # downtown oakland
    # {'lat' => '37.754792', 'long' => '-122.414428'} # mission
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

    raise 'did not work' unless response.status == 200

    sleep(2)
    restaurants_array += parsed_response['results']['venues']
  end

  restaurants_string = restaurants_array.to_json

  File.open('api-responses-resy-responses.json', 'w') { |file| file.write(restaurants_string) }
end

resy_string = File.read('api-responses-resy-responses.json')
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

unless File.exist?('api-responses-tomtom-responses.json')
  mapped_restaurants = non_unique_mapped_restaurants.uniq { |restaurant| restaurant[:latitude] }

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

  File.open('api-responses-tomtom-responses.json', 'w') { |file| file.write(restaurant_addresses_string) }
  puts 'Successfully wrote tomtom-responses.json'
end

puts 'Reading file'
tomtom_string = File.read('api-responses-tomtom-responses.json')
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

# rubocop:enable Metrics/BlockLength
# rubocop:enable Security/Open
# rubocop:enable Lint/UriEscapeUnescape
