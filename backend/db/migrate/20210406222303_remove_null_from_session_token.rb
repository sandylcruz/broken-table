# frozen_string_literal: true

# Remove null constraint on session token
class RemoveNullFromSessionToken < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :session_token, :string, null: true
  end
end
