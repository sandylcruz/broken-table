# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let(:valid_user) { User.new(username: 'calliethecat', password: 'password', email: 'calliethecat@gmail.com') }

  describe 'POST #create' do
    it 'should create a new session if user credentials are valid' do
      user = valid_user
      user.save!
      original_session_token = user.session_token

      post :create, params: { user: { username: 'calliethecat', password: 'password' } }, format: :json
      expect(response).to render_template(:show)

      user.reload
      new_session_token = user.session_token

      expect(new_session_token).not_to eq(original_session_token)
      expect(session[:session_token]).to eq(new_session_token)
    end

    it 'should render an error if a user is nil' do
      post :create, params: { user: { username: 'calliethecat', password: 'bad_password' } }
      expect(response).to have_http_status(401)
      expect(response.body).to eq([
        'Invalid username or password'
      ].to_json)
    end
  end

  describe 'DELETE #destroy' do
    it "should reset user's session token to nil" do
      user = valid_user
      user.save!
      old_session_token = user.session_token
      session[:session_token] = old_session_token

      post :destroy
      expect(response).to have_http_status(200)
      expect(response.body).to eq({
        message: 'Logout successful'
      }.to_json)

      user.reload
      session_token = user.session_token

      expect(session_token).not_to eq(old_session_token)
      expect(session[:session_token]).to eq(nil)
    end
  end
end
