# frozen_string_literal: true

# Create Restaurant Model
class Restaurant < ApplicationRecord
  validates :description, presence: true
  validates :latitude, presence: true
  validates :location, presence: true
  validates :longitude, presence: true
  validates :name, presence: true
  validates :photo, presence: true
  validates :breakfast_capacity, presence: true
  validates :lunch_capacity, presence: true
  validates :dinner_capacity, presence: true

  has_many :favorites,
           class_name: 'Favorite',
           foreign_key: :restaurant_id,
           primary_key: :id

  has_many :reservations,
           class_name: 'Reservation',
           foreign_key: :restaurant_id,
           primary_key: :id

  has_many :reviews,
           class_name: 'Review',
           foreign_key: :restaurant_id,
           primary_key: :id

  belongs_to :submitter,
             class_name: 'User',
             foreign_key: :submitter_id,
             primary_key: :id

  has_one_attached :photo

  def average_rating
    reviews.average(:rating).to_f.round(1)
  end

  def get_maximum_capacity(time_slot)
    specific_time_slot = "#{time_slot}_capacity"
    send(specific_time_slot)
  end

  def current_capacity(time_slot, date)
    # select SUM reservations WHERE date = ?, time_slot = ?, restaurant_id ?,
  end

  def is_favorited?(user)
    return false if user.nil?

    Favorite.exists?(user_id: user.id, restaurant_id: id)
  end

  def self.in_bounds(bounds)
    where('latitude < ?', bounds[:northEast][:latitude])
      .where('latitude > ?', bounds[:southWest][:latitude])
      .where('longitude < ?', bounds[:northEast][:longitude])
      .where('longitude > ?', bounds[:southWest][:longitude])
  end
end
