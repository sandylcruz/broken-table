# frozen_string_literal: true

# This migration will add a restaurants table
class AddRestaurantsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.integer :submitter_id, null: false
      t.integer :latitude, null: false
      t.integer :longitude, null: false
      t.text :description, null: false
    end

    add_index :restaurants, :name
    add_index :restaurants, :submitter_id
    add_index :restaurants, %i[latitude longitude], unique: true
  end
end
