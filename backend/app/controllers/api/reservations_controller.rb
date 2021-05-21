# frozen_string_literal: true

module Api
  # Reservations Controller class
  # rubocop:disable Layout/LineLength
  # rubocop:disable Metrics/AbcSize
  class ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @reservation = Reservation.new(restaurant_id: reservation_params[:restaurant_id],
                                     date: reservation_params[:date], time_slot: reservation_params[:time_slot], party_size: reservation_params[:party_size])
      @reservation.user_id = current_user.id

      @reservation.date = Date.parse(reservation_params[:date])

      puts @reservation.date
      if @reservation.save!
        render :show
      else
        render json: ['Reservation not saved'], status: 422
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

    def reservation_params
      params.require(:reservation).permit(:date, :party_size, :time_slot, :user_id, :restaurant_id)
    end
  end
end
# rubocop:enable Layout/LineLength
# rubocop:enable Metrics/AbcSize
