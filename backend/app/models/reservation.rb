# frozen_string_literal: true

class Reservation < ApplicationRecord
  validates :date, presence: true
  validates :party_size, presence: true
  validates :time_slot, inclusion: { in: %w[breakfast lunch dinner], message: '%<value> is not a valid time-slot' }

  belongs_to :requester,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id

  belongs_to :restaurant,
             class_name: 'Restaurant',
             foreign_key: :restaurant_id,
             primary_key: :id
end
