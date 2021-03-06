# frozen_string_literal: true

require 'bcrypt'
require 'securerandom'

# Create user model
class User < ApplicationRecord
  attr_reader :password

  validates :city, presence: true
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, presence: true
  validates :phone_number, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :state, presence: true
  validates :username, presence: true, uniqueness: true

  after_initialize :ensure_session_token

  has_many :favorites,
           class_name: 'Favorite',
           foreign_key: :user_id,
           primary_key: :id

  has_many :reservations,
           class_name: 'Reservation',
           foreign_key: :user_id,
           primary_key: :id

  has_many :reviews,
           class_name: 'Review',
           foreign_key: :user_id,
           primary_key: :id

  has_many :submitted_restaurants,
           class_name: 'Restaurant',
           foreign_key: :submitter_id,
           primary_key: :id

  has_many :favorite_restaurants, through: :favorites, source: :restaurant
  has_many :reserved_restaurants, through: :reservations, source: :restaurant

  has_one_attached :photo

  def favorite_ids
    favorite_restaurants.pluck(:id)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user

    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
