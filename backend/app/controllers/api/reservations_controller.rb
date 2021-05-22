# frozen_string_literal: true

module Api
  # Reservations Controller class
  class ReservationsController < ApplicationController
    before_action :find_restaurant, only: [:create]
    before_action :make_reservation, only: [:create]

    def create
      if !@restaurant
        render json: ['No restaurant found'], status: :unprocessable_entity
      elsif !@restaurant.is_space_available?(res_params[:date], res_params[:time_slot], res_params[:party_size])
        render json: ['Reservation not created. Capacity exhausted.'], status: :unprocessable_entity
      end
      @reservation.save ? render(:show) : render(json: ['Reservation not saved'], status: :unprocessable_entity)
    end

    def destroy
      @reservation = Reservation.find_by(id: params[:id])

      if @reservation
        @reservation.destroy
      else
        render json: [`Reservation not found`], status: :not_found
      end
    end

    private

    def res_params
      params.require(:reservation).permit(:date, :party_size, :time_slot, :user_id, :restaurant_id)
    end

    def make_reservation
      @reservation = Reservation.new(restaurant_id: res_params[:restaurant_id],
                                     date: Date.parse(res_params[:date]), time_slot: res_params[:time_slot],
                                     party_size: res_params[:party_size], user_id: current_user.id)
    end

    def find_restaurant
      @restaurant = Restaurant.find_by(id: res_params[:restaurant_id])
    end
  end
end
