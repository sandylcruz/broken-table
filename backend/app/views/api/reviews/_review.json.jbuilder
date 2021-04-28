# frozen_string_literal: true

json.id review.id
json.body review.body
json.rating review.rating
json.createdAt review.created_at
json.updatedAt review.updated_at
json.username review.author.username
json.restaurantId review.restaurant.id
json.author do
  json.id review.author.id
  json.username review.author.username
end
