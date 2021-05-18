# frozen_string_literal: true

require 'rails_helper'
require 'open-uri'
require 'faker'

# rubocop:disable Layout/LineLength
# RSpec.describe Api::ReservationsController, type: :controller do
#   let(:user) { User.create!(username: Faker::Internet.username, password: Faker::Internet.password, email: Faker::Internet.email, phone_number: Faker::PhoneNumber.cell_phone, city: 'San Francisco', state: 'CA', name: 'Callie C') }

#   let(:restaurant) do
#     random_latitude = rand(-85..85).to_s
#     random_longitude = rand(-180..180).to_s
#     partial_restaurant = Restaurant.new(name: "Squeaky's House of Munch", location: '1345 Divisadero St, San Francisco, CA 94103', latitude: random_latitude, longitude: random_longitude, description: 'A place to get food', breakfast_capacity: 20, lunch_capacity: 20, dinner_capacity: 20, submitter: User.first)
#     parsed_url = URI.encode('https://cdn.shopify.com/s/files/1/0052/6198/3830/products/The-Ambassador-Poster_720x.jpg?v=1569157129')
#     filename = File.basename(parsed_url)
#     photo_file = URI.open(parsed_url)
#     partial_restaurant.photo.attach(io: photo_file, filename: filename)
#     partial_restaurant.save!
#     partial_restaurant
#   end

#   before(:each) do
#     allow(controller).to receive(:current_user).and_return(user)
#   end

#   describe 'POST #create' do
#     it 'should instantiate a new reservation given valid params' do
#       post :create, params: { restaurant_id: restaurant.id, reservation: { requester: User.first, restaurant_id: Restaurant.first.id, date: DateTime.now, party_size: 2, time_slot: 'breakfast' } },
#                     format: :json
#       expect(response).to have_http_status(200)
#       expect(response).to render_template(:show)
#     end
#   end
# end
# rubocop:enable Layout/LineLength
