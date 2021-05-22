# frozen_string_literal: true

@restaurants.reservations.each do |reservation|
  json.partial! 'reservation', reservation: reservation
end
