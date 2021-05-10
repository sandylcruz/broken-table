# frozen_string_literal: true

json.extract! user, :username, :id, :email, :city, :state, :name

json.photoUrl user.photo.url
json.phoneNumber user.phone_number
