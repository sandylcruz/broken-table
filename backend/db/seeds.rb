# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

callie = User.create!(username: 'calpal', password: 'password', email: 'calpal@gmail.com')
squeaky = User.create!(username: 'squeakfreak', password: 'password', email: 'squeaks@gmail.com')
stinky = User.create!(username: 'flapjack', password: 'password', email: 'flapjack@gmail.com')

nopa = Restaurant.create!(name: 'Nopa', description: 'A San Francisco Gathering Place',
                          location: '560 Divisadero St, SF, CA, 94117',
                          latitude: 37.774890, longitude: -122.437630,
                          submitter: callie)
lardoise = Restaurant.create!(name: "L'Ardoise", description: 'French bistro in San Francisco',
                              location: '151 Noe St, SF, CA 94114',
                              latitude: 37.766560, longitude: -122.433150,
                              submitter: squeaky)
zuni = Restaurant.create!(name: 'Zuni Cafe', description: 'Zuni Cafe opened in San Francisco on Febuarary 15, 1979',
                          location: '1658 Market St, SF, CA 94102',
                          latitude: 37.773610, longitude: -122.421430,
                          submitter: stinky)

Review.create!(author: callie, restaurant: nopa, rating: 5, body: "This is the cat's meow")
Review.create!(author: squeaky, restaurant: nopa, rating: 5, body: 'I like nopa')
Review.create!(author: stinky, restaurant: nopa, rating: 5, body: 'Is good')

Review.create!(author: squeaky, restaurant: lardoise, rating: 5, body: 'Very good')
Review.create!(author: stinky, restaurant: zuni, rating: 5, body: 'Excellent')
