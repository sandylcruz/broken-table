# frozen_string_literal: true

json.extract! user, :username, :id, :email, :city, :state, :name

json.photoUrl user.photo.url
json.phoneNumber user.phone_number

json.favoriteRestaurants user.favorite_restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
  json.location restaurant.location
  json.description restaurant.description
  json.id restaurant.id
  json.latitude restaurant.latitude
  json.longitude restaurant.longitude
  json.photoUrl restaurant.photoUrl
  json.averageRating restaurant.averageRating
  json.isFavorited restaurant.isFavorited
  json.numberOfFavorites restaurant.numberOfFavorites
end
