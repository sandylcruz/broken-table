# frozen_string_literal: true

json.extract! user, :username, :id, :email

json.photoUrl user.photo.url
