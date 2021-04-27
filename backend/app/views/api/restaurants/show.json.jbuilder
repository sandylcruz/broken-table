# frozen_string_literal: true

json.partial! 'api/restaurants/restaurant', restaurant: @restaurant

json.reviews @restaurant.reviews do |review|
  json.id review.id
  json.body review.body
  json.author do
    json.id review.author.id
    json.username review.author.username
  end
end
