# frozen_string_literal: true

module Api
  # Reservations Controller class
  class ReservationsController < ApplicationController
    def create
      @reservation = Reservation.new(requester: current_user, restaurant_id: params[:restaurant_id],
                                     date: params[:date], time_slot: params[:timeslot], party_size: params[:party_size])

      if @reservation.save
        render :show
      else
        render json: @reservation.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @reservation = Reservation.find_by(id: params[:id])

      if @reservation
        @reservation.destroy
      else
        render json: ['Reservation not found'], status: :not_found
      end
    end

    private

    def reservations_params
      params.require(:reservations).permit(:restaurant_id, :date, :time_slot, :party_size)
    end
  end
end
