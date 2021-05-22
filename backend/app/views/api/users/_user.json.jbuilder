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
  json.breakfastCapacity restaurant.breakfast_capacity
  json.lunchCapacity restaurant.lunch_capacity
  json.dinnerCapacity restaurant.dinner_capacity
end

json.reservations user.reservations do |reservation|
  json.id reservation.id
  json.requesterId reservation.user_id
  json.date reservation.date
  json.timeSlot reservation.time_slot
  json.partySize reservation.party_size
  json.restaurant do
    json.id reservation.restaurant.id
    json.photoUrl reservation.restaurant.photo.url
    json.name reservation.restaurant.name
  end
end
