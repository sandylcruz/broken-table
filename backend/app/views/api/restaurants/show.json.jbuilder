# frozen_string_literal: true

json.partial! 'api/restaurants/restaurant', restaurant: @restaurant

# json.photoUrls @restaurant.photos.map { |file| url_for(file) }
