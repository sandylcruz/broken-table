# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'GET #new' do
    it 'should instantiate a new user given valid params' do
      user :create, params: { user: { username: 'calliecat', password: 'password' } }
      expect(response).to have_http_status(:ok)
    end

    it 'should render an error if a username or password is not given' do
    end

    it 'should validate password is at leaset 6 characters long' do
    end

    it 'should redirect to root page if user is successfully created' do
    end
  end
end
