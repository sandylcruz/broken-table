# frozen_string_literal: true

module Api
  # Restaurants Controller
  class RestaurantsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @restaurant = Restaurant.new(restaurant_params)
      @restaurant.submitter_id = current_user.id

      if @restaurant.save
        render :show
      else
        render json: @restaurant.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @restaurant = Restaurant.find_by(id: params[:id])

      if @restaurant
        render :show
      else
        render json: ['Restaurant not found']
      end
    end

    def index
      targeted_restaurants = bounds ? Restaurant.in_bounds(bounds) : Restaurant.all
      @restaurants = targeted_restaurants.limit(15)
      render :index
    end

    private

    def restaurant_params
      params.require(:restaurant).permit(:name, :description, :location, :latitude, :longitude, :photo)
    end

    def bounds
      if params[:filters].nil?
        nil
      else
        params[:filters][:bounds]
      end
    end
  end
end
