# frozen_string_literal: true

json.partial! 'api/restaurants/restaurant', restaurant: @restaurant

json.reviews @restaurant.reviews do |review|
  json.id review.id
  json.body review.body
  json.rating review.rating
  json.createdAt review.created_at
  json.updatedAt review.updated_at
  json.username review.author.username
  json.author do
    json.id review.author.id
    json.username review.author.username
    json.photoUrl review.author.photo.url
    json.city review.author.city
    json.state review.author.state
  end
end

json.isFavorited @restaurant.is_favorited?(current_user)
json.numberOfFavorites @restaurant.favorites.count
