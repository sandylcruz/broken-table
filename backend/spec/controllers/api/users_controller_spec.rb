# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    it 'should instantiate a new user given valid params' do
      post :create, params: { user: { username: 'calliecat2', password: 'password', email: 'cat@gmail.com' } },
                    format: :json
      expect(response).to have_http_status(200)
      expect(response).to render_template(:show)
    end

    it 'should render an error if a username or password is not given' do
      post :create, params: { user: { username: '', password: 'password', email: 'cat@gmail.com' } }, format: :json
      expect(response).to have_http_status(422)
    end

    it 'should validate password is at leaset 6 characters long' do
      post :create, params: { user: { username: 'calliecat', password: '', email: 'cat@gmail.com' } }, format: :json
      expect(response).to have_http_status(422)
    end
  end

  describe 'GET #show' do
    it 'should render the show template if user is found' do
      user = User.create!(username: 'calpal', password: 'password', email: 'callie@gmail.com')

      get :show, params: { id: user.id }, format: :json
      expect(response).to have_http_status(200)
      expect(response).to render_template(:show)
    end

    it 'should return correct error message if user is not found' do
      get :show, params: { id: -1 }, format: :json

      expect(response).to have_http_status(404)
      expect(response.body).to eq(['No user found'].to_json)
    end
  end
end
