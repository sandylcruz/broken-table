# frozen_string_literal: true

class Review < ApplicationRecord
  validates :rating, presence: true
  validates :body, presence: true

  belongs_to :author,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id

  belongs_to :restaurant,
             class_name: 'Restaurant',
             foreign_key: :restaurant_id,
             primary_key: :id
end
