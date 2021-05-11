# frozen_string_literal: true

json.partial! 'api/users/user', user: @user

json.favorites @user.favorites do |favorite|
  json.id favorite.id
  json.userId favorite.user_id
  json.restaurantId favorite.restaurant_id
  json.createdAt favorite.created_at
  json.updatedAt favorite.updated_at
end
