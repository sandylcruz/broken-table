# frozen_string_literal: true

module Api
  # Reservations Controller class
  # rubocop:disable Layout/LineLength
  class ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      # @reservation = Reservation.new(requester: current_user, restaurant_id: reservation_params[:restaurant_id],
      #                                date: reservation_params[:date], time_slot: reservation_params[:time_slot], party_size: reservation_params[:party_size])

      @reservation = Reservation.new(restaurant_id: reservation_params[:restaurant_id],
                                     date: reservation_params[:date], time_slot: reservation_params[:time_slot], party_size: reservation_params[:party_size])
      @reservation.user_id = current_user.id

      if @reservation.save!
        render :show
      else
        render json: ['Reservation not saved'], status: 422
      end
    end

    def destroy
      # puts reservation_params.inspect
      @reservation = Reservation.find_by(id: params[:id])

      if @reservation
        @reservation.destroy
      else
        render json: [`Reservation not found`], status: :not_found

        # render json: [`#{reservation_params}`]
      end
    end

    # private

    # def reservation_params
    #   params.require(:reservation).permit(:restaurant_id, :date, :time_slot, :party_size)
    # end
  end
end
# rubocop:enable Layout/LineLength
