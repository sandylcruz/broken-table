# frozen_string_literal: true

require 'bcrypt'
require 'securerandom'

# Create user model
class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :photo, presence: true

  after_initialize :ensure_session_token

  has_many :submitted_restaurants,
           class_name: 'Restaurant',
           foreign_key: :submitter_id,
           primary_key: :id

  has_many :reviews,
           class_name: 'Review',
           foreign_key: :user_id,
           primary_key: :id

  has_one_attached :photo

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user

    user.is_password?(password) ? user : nil
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

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
