# frozen_string_literal: true

module Api
  # Favorites Controller class
  class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @favorite = Favorite.new(favorites_params)

      if @favorite.save
        render :show
      else
        render json: @favorite.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy; end

    private

    def favorites_params
      params.require(:favorite).permit(:user_id, :restaurant_id)
    end
  end
end
