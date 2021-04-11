# frozen_string_literal: true

# Create Restaurant Model
class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
end
