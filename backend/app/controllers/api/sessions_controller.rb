# frozen_string_literal: true

# This is the SessionsController
class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render json: ['Invalid username or password'], status: 401
    else
      login!(@user)
      render json: ['Logged in']
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful' }
  end
end
