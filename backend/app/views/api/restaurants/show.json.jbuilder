# frozen_string_literal: true

json.partial! 'api/restaurants/restaurant', restaurant: @restaurant

json.reviews @restaurant.reviews do |review|
  json.id review.id
end
