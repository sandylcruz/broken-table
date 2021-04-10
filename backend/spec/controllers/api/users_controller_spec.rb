# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'GET #create' do
    it 'should instantiate a new user given valid params' do
      post :create, params: { user: { username: 'calliecat2', password: 'password', email: 'cat@gmail.com' } }
    end

    it 'should render an error if a username or password is not given' do
      post :create, params: { user: { username: '', password: 'password', email: 'cat@gmail.com' } }
      post :create, params: { user: { username: 'calliecat', password: '', email: 'cat@gmail.com' } }
    end

    it 'should validate password is at leaset 6 characters long' do
      post :create, params: { user: { username: 'calliecat', password: 'a', email: 'cat@gmail.com' } }
    end
  end
end
