import { ajax } from "jquery";

export const CREATE_RESERVATION = "CREATE_RESERVATION";
export const CANCEL_RESERVATION = "REMOVE_RESERVATION";

export const createReservation = (reservation) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "POST",
      url: "/api/reservations",
      data: { reservation },
      success: resolve,
      error: reject,
    });
  });

export const cancelReservation = (reservationId) =>
  new Promise((resolve, reject) => {
    ajax({
      method: "DELETE",
      url: `/api/reservations/${reservationId}`,
      success: resolve,
      error: reject,
    });
  });
