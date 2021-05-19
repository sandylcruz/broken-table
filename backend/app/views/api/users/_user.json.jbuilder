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
  json.photoUrl restaurant.photo.url
  json.averageRating restaurant.average_rating
  json.isFavorited restaurant.is_favorited?(current_user)
  json.numberOfFavorites restaurant.favorites.count
end

json.reservations user.reservations do |reservation|
  json.id reservation.id
  json.requesterId reservation.user_id
  json.restaurantId reservation.restaurant_id
  json.timeSlot reservation.time_slot
  json.partySize reservation.party_size
  json.date reservation.date
end