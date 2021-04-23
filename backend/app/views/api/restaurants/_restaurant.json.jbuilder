# frozen_string_literal: true

json.extract! restaurant, :name, :location, :description, :id, :latitude, :longitude

json.photoUrl restaurant.photo.url

# if restaurant.photo.attached?
#   json.image_url url_for(restaurant.photo)
# end
