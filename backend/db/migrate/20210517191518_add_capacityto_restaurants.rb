# frozen_string_literal: true

# Migration to add breakfast, lunch, and dinner capacity columns to restaurants
class AddCapacitytoRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :breakfast_capacity, :integer
    add_column :restaurants, :lunch_capacity, :integer
    add_column :restaurants, :dinner_capacity, :integer
  end
end
