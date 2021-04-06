# frozen_string_literal: true

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
end
