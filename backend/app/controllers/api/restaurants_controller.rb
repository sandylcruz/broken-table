# frozen_string_literal: true

# Restaurants Controller
class RestaurantsController < ApplicationController
  def create
    @restaurant = Restaurant.create!(restaurant_params)

    if @restaurant.save
      render :show
    else
      render json: ['Restaurant not created']
    end
  end

  def show
    @restaurant = Restaurant.find_by_id(params[:id])

    if @restaurant
      render :show
    else
      render json: ['Restaurant not found']
    end
  end

  def index
    @restaurants = Restaurant.all
    render :index
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :location)
  end
end
