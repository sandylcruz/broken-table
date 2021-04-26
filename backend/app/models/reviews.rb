# frozen_string_literal: true

class Reviews < ApplicationRecord
  validates :rating, null: false
  validates :body, null: false

  belongs_to :user
end
