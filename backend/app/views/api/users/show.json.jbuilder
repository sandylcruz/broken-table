# frozen_string_literal: true

json.partial! 'api/users/user', user: @user

json.favoriteRestaurants @user.favorite_restaurants do |restaurant|
  json.id restaurant.id
  json.name restaurant.name
end

json.favoriteIds @user.favorite_ids
