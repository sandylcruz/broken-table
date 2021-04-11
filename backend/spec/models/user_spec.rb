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
      user = valid_user
      user.save!
      expect(user.password_digest).to_not be_nil
    end

    it 'validates presence of session token' do
      user = valid_user
      user.save!
      expect(user.session_token).to_not be_nil
    end

    it 'validates uniquness of session token' do
      user = valid_user
      user.save!

      bad_user = User.new(username: 'squeaky', email: 'squeaky@gmail.com', password: 'password')
      expect(bad_user.session_token).to_not equal(user.session_token)
    end
  end

  describe '#is_password?' do
    it 'verifies a password is correct' do
      user = valid_user
      expect(user.is_password?('password')).to be true
    end

    it 'verifies a password is not correct' do
      user = valid_user
      expect(user.is_password?('bad_password')).to be false
    end
  end

  describe '::find_by_credentials' do
    it 'returns user given good credentials' do
      user = valid_user
      user.save!
      expect(User.find_by_credentials(user.username, user.password)).to eq(user)
    end

    it 'returns nil given bad credentials' do
      user = valid_user
      user.save!
      expect(User.find_by_credentials('jonathan@fakesite.com', 'bad_password')).to eq(nil)
    end
  end

  describe '#reset_session_token!' do
    it 'changes session token upon invokation' do
      user = valid_user
      user.save!
      initial_session_token = user.session_token
      user.reset_session_token!
      next_session_token = user.session_token

      expect(initial_session_token).to_not eq(next_session_token)
    end
  end

  describe '#password=' do
    it 'updates password digest' do
      user = valid_user
      original_password_digest = user.password_digest
      user.password = 'newpassword'

      expect(user.password_digest).to_not eq(original_password_digest)
    end

    it 'changes the password' do
      user = valid_user
      original_password = user.password
      user.password = 'newpassword'

      expect(user.password).to_not eq(original_password)
    end
  end
end
