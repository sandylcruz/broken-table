import * as ReservationApiUtil from "../util/reservationApiUtil";

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const UNRECEIVE_RESERVATION = "UNRECEIVE_RESERVATION";

export const receiveReservation = (reservation) => ({
  type: RECEIVE_RESERVATION,
  reservation,
});

export const unreceiveReservation = (reservationId, userId) => ({
  type: UNRECEIVE_RESERVATION,
  reservationId,
  userId,
});

export const createReservation = (reservation) => (dispatch) => {
  console.log(reservation);

  return ReservationApiUtil.createReservation(
    reservation
  ).then((reservationFromServer) =>
    dispatch(receiveReservation(reservationFromServer))
  );
};

export const cancelReservation = (reservationId) => (dispatch, getState) => {
  ReservationApiUtil.cancelReservation(reservationId).then(() =>
    dispatch(unreceiveReservation(reservationId, getState().session.id))
  );
};
