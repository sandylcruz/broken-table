# frozen_string_literal: true

# Migration to add Reservations Table
class AddReservationsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.integer :party_size, null: false
      t.datetime :date, null: false
      t.integer :start_time, null: false
      t.string :status, null: false, default: 'PENDING'
      t.timestamps
    end

    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
  end
end
