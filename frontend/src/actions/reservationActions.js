import * as ReservationApiUtil from "../util/reservationApiUtil";

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const UNRECEIVE_RESERVATION = "UNRECEIVE_RESERVATION";

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation,
});

export const unreceiveReservation = (reservation) => ({
  type: UNRECEIVE_RESERVATION,
  reservation,
});

export const createReservation = (reservation) => (dispatch) =>
  ReservationApiUtil.createReservation(
    reservation
  ).then((reservationFromServer) =>
    dispatch(receiveReservation(reservationFromServer))
  );

export const cancelReservation = (reservation) => (dispatch) => {
  ReservationApiUtil.removeReservation(reservation).then(() =>
    dispatch(unreceiveReservation(reservation))
  );
};
