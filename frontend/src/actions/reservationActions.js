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

export const createReservation = (reservation) => (dispatch) =>
  ReservationApiUtil.createReservation(reservation)
    .then((reservationFromServer) => {
      // eslint-disable-next-line no-alert
      window.alert("Reservation created successfully");
      return dispatch(receiveReservation(reservationFromServer));
    })
    .catch(() => {
      // eslint-disable-next-line no-alert
      window.alert("Not available");
    });

export const cancelReservation = (reservationId) => (dispatch, getState) => {
  ReservationApiUtil.cancelReservation(reservationId).then(() =>
    dispatch(unreceiveReservation(reservationId, getState().session.id))
  );
};
