# frozen_string_literal: true

module Api
  # Reservations Controller class
  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  # rubocop:disable Layout/LineLength
  class ReservationsController < ApplicationController
    def create
      restaurant = Restaurant.find_by(id: res_params[:restaurant_id])

      render json: ['No restaurant found'], status: :unprocessable_entity unless restaurant

      date = res_params[:date]
      chosen_time_slot = res_params[:time_slot]
      restaurant_maximum_capacity = restaurant.get_maximum_capacity(chosen_time_slot)
      current_capacity = restaurant.current_capacity(time_slot, date)
      new_capacity = current_capacity + party_size

      if restaurant_maximum_capacity < new_capacity
        render json: ['Reservation not created. Capacity exhausted.'], status: :unprocessable_entity
      end

      @reservation = Reservation.new(restaurant_id: res_params[:restaurant_id],
                                     date: res_params[:date], time_slot: res_params[:time_slot], party_size: res_params[:party_size], user_id: current_user.id)
      # @reservation.user_id = current_user.id

      @reservation.date = Date.parse(res_params[:date])

      if @reservation.save
        render :show
      else
        render json: ['Reservation not saved'], status: :unprocessable_entity
      end
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
  end
end
# rubocop:enable Metrics/AbcSize
# rubocop:enable Metrics/MethodLength
# rubocop:enable Layout/LineLength
