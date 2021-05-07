# frozen_string_literal: true

# In this migration, add columns to Users table
class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :name, :string
    change_column_null :users, :name, false
    add_column :users, :phone_number, :string
    change_column_null :users, :phone_number, false
    add_column :users, :city, :string
    change_column_null :users, :city, false
    add_column :users, :state, :string
    change_column_null :users, :state, false
  end
end
