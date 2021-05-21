# frozen_string_literal: true

module Api
  # Reservations Controller class
  # rubocop:disable Layout/LineLength
  class ReservationsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @reservation = Reservation.new(restaurant_id: params[:restaurant_id],
                                     date: params[:date], time_slot: params[:time_slot], party_size: params[:party_size])
      @reservation.user_id = current_user.id

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
  end
end
# rubocop:enable Layout/LineLength
