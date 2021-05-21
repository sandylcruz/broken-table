# frozen_string_literal: true

# Add favorites migration
class AddFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :favorites, :user_id
    add_index :favorites, %i[restaurant_id user_id], unique: true
  end
end
