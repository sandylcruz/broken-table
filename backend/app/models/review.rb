# frozen_string_literal: true

class Review < ApplicationRecord
  validates :body, presence: true
  validates :rating, presence: true, inclusion: { in: 1..5 }

  belongs_to :author,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id

  belongs_to :restaurant,
             class_name: 'Restaurant',
             foreign_key: :restaurant_id,
             primary_key: :id
end
