# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:valid_user) { User.new(username: 'calliethecat', email: 'calliethecat@gmail.com', password: 'password') }
  describe 'Validations' do
    it 'validates presence of username' do
      user = valid_user
      expect(user).to be_valid
      user.username = ''
      expect(user).not_to be_valid
    end

    it 'validates uniquness of username' do
      user = valid_user
      user.save!
      expect(user).to be_valid

      bad_user = User.new(username: 'calliethecat', email: 'adfasfd@gmail.com', password: 'password')
      expect(bad_user).not_to be_valid
    end

    it 'validates presence of email' do
      user = valid_user
      user.email = ''
      expect(user).not_to be_valid

      bad_user = User.new(username: 'cat', email: '', password: 'password')
      expect(bad_user).not_to be_valid
    end

    it 'validates uniquness of email' do
      user = valid_user
      user.save!
      expect(user).to be_valid

      bad_user = User.new(username: 'calliethecat', email: 'calliethecat@gmail.com', password: 'password')
      expect(bad_user).not_to be_valid
    end

    it 'validates presence of password digest' do
      # expect("").not_to be_valid
    end

    it 'validates presence of session token' do
      # expect("").not_to be_valid
    end

    it 'validates uniquness of session token' do
    end
  end
end
