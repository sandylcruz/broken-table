# frozen_string_literal: true

module Api
  # This is the UsersController
  class UsersController < ApplicationController
    def new
      @user = User.new
      render :new
    end

    def create
      @user = User.new(user_params)

      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages
      end
    end

    def show
      @user = User.find_by(params[:id])

      if @user
        render :show
      else
        render json @user.errors.full_messages, status: 404
      end
    end

    def update
      if @user&.update_attributes(user_params)
        render :show
      elsif !@user
        render json: ['Could not locate user'], status: 400
      else
        render json: @user.errors.full_messages, status: 401
      end
    end

    def destroy
      if @user
        @user.destroy
        render :show
      else
        render json: @user.errors.full_messages
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  end
end
