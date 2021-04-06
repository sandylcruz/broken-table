# frozen_string_literal: true

require 'bcrypt'
require 'securerandom'

# Create user model
class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :favorites,
           primary_key: :id,
           foreign_key: :user_id

  has_many :reservations,
           primary_key: :id,
           foreign_key: :user_id

  has_many :favorites,
           primary_key: :id,
           foreign_key: :user_id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user

    user.password?(password) ? user : nil
  end

  def password?(password)
    BCrypt::Password.new(password_digest).password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
