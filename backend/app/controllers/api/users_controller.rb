# frozen_string_literal: true

module Api
  # This is the UsersController
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find_by_id(params[:id])

      if @user
        render :show
      else
        render json: ['No user found'], status: 404
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :email, :password, :city, :state, :phone_number, :name, :photo)
    end
  end
end
