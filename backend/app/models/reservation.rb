# frozen_string_literal: true

class Reservation < ApplicationRecord
  validates :time_slot, presence: true
  validates :party_size, presence: true
  validates :date, presence: true

  belongs_to :user,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id

  belongs_to :restaurant,
             class_name: 'Restaurant',
             foreign_key: :restaurant_id,
             primary_key: :id
end
