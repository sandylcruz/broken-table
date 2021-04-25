# frozen_string_literal: true

class Reservation < ApplicationRecord
  validates :party_size, presence: true
  validates :date, presence: true
  validates :start_time, presence: true
  validates :status, presence: true
  validates :created_at, null: false
  validates :updated_at, null: false
end
