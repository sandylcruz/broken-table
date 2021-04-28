# frozen_string_literal: true

json.extract! restaurant, :name, :location, :description, :id, :latitude, :longitude, :average_rating

json.photoUrl restaurant.photo.url
