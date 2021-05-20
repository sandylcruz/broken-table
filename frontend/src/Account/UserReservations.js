import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { cancelReservation } from "../actions/reservationActions";
import ReservationItem from "./ReservationItem";
import { selectCurrentUserReservations } from "../reducers/selectors";

const InnerReservationsDiv = styled.div`
  margin: 27px;
`;

const ReservationsDiv = styled.div`
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  display: flex;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
`;

const UserReservations = () => {
  const dispatch = useDispatch();
  const reservationsArray = useSelector(selectCurrentUserReservations);

  const handleCancel = useCallback((reservation) => {
    dispatch(cancelReservation(reservation.id));
  }, []);

  return (
    <ReservationsDiv>
      <InnerReservationsDiv>
        <StyledH1>Upcoming Reservations</StyledH1>

        {reservationsArray.map((reservation) => (
          <ReservationItem
            key={reservation.id}
            reservation={reservation}
            onCancel={handleCancel}
          />
        ))}
      </InnerReservationsDiv>
    </ReservationsDiv>
  );
};

export default UserReservations;
