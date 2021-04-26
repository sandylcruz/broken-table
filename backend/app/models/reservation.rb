# frozen_string_literal: true

class Reservation < ApplicationRecord
  validates :party_size, presence: true
  validates :date, presence: true
  validates :start_time, presence: true
  validates :status, presence: true
  validates :created_at, null: false
  validates :updated_at, null: false

  belongs_to :user,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: id

  belongs_to :restaurant,
             class_name: 'Restaurant',
             foreign_key: :restaurant_id,
             primary_key: id
end
