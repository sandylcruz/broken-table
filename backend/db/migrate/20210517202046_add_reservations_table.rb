# frozen_string_literal: true

# Migration to add reservations table
class AddReservationsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :party_size, null: false
      t.datetime :date, null: false
      t.string :time_slot, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end

    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
  end
end
