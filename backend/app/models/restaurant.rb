# frozen_string_literal: true

# Create Restaurant Model
class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :photo, presence: true

  belongs_to :submitter,
             class_name: 'User',
             foreign_key: :submitter_id,
             primary_key: :id

  has_many :reservations,
           class_name: 'Reservation',
           foreign_key: :restaurant_id,
           primary_key: :id

  has_one_attached :photo

  def self.in_bounds(bounds)
    where('latitude < ?', bounds[:northEast][:latitude])
      .where('latitude > ?', bounds[:southWest][:latitude])
      .where('longitude < ?', bounds[:northEast][:longitude])
      .where('longitude > ?', bounds[:southWest][:longitude])
  end
end
