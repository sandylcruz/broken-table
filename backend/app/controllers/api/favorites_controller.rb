# frozen_string_literal: true

module Api
  # Favorites Controller class
  class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :require_logged_in

    def create
      @favorite = Favorite.new(user_id: current_user.id, restaurant_id: params[:restaurant_id])

      if @favorite.save
        render :show
      else
        render json: @favorite.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @favorite = Favorite.find_by(user_id: current_user.id, restaurant_id: params[:restaurant_id])

      if @favorite
        @favorite.destroy!
      else
        render json: ['Cannot find favorite'], status: :not_found
      end
    end
  end
end
