# frozen_string_literal: true

json.extract! restaurant, :name, :location, :description, :id, :latitude, :longitude

json.photoUrl restaurant.photo.url
json.averageRating restaurant.average_rating
json.isFavorited restaurant.is_favorited?(current_user)
json.numberOfFavorites restaurant.favorites.count
