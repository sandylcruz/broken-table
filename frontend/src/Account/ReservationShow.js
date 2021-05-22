import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { format, parseISO } from "date-fns";
import Cancel from "./Cancel.svg";
import Event from "./Event.svg";
import Party from "./Party.svg";

const CancelButton = styled.button`
  background-color: transparent;
  border: none;
`;

const DateLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin: 5px;
`;

const Left = styled.div``;

const PartyLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReservationItem = styled.div`
  border: 1px solid #eaeaea;
  list-style: none;
  margin: 5px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  width: 560px;
  height: 130px;
  margin-left: -1px;
  cursor: pointer;


  &:hover {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.04);

  border: 1px solid #bababa;
  transition: border-color 0.3s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s,
    background-color 0.25s ease-in-out 0s, color 0.15s ease-in-out 0s;
  }

  .20s ease-out,color .25s ease-out,opacity .25s ease-out,box-shadow .15s ease-out

     &:active {
    box-shadow: 1px 1px 1px 1px #a1a1a1;

    border: 1px solid #a1a1a1;
    transition: border-color 0.3s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s,
      background-color 0.25s ease-in-out 0s, color 0.15s ease-in-out 0s;
  }

  .20s ease-out,color .25s ease-out,opacity .25s ease-out,box-shadow .15s ease-out
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  justify-content: space-around;
  width: 100%;
`;

const StyledCancelX = styled(Cancel)`
  cursor: pointer;
`;

const StyledEvent = styled(Event)`
  margin: 5px;
`;

const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px;
  border-radius: 5px;
`;

const StyledParty = styled(Party)`
  margin: 5px;
`;

const ReservationShow = React.memo(({ onCancel, reservation }) => {
  const formattedDate = format(parseISO(reservation.date), "MMMM dd, yyyy");

  const handleCancellation = useCallback(
    (event) => {
      event.preventDefault();

      onCancel(reservation);
    },
    [reservation, onCancel]
  );

  return (
    <Link
      to={`/restaurants/${reservation.restaurant.id}`}
      key={reservation.restaurant.id}
    >
      <ReservationItem key={reservation.id}>
        <Left>
          <StyledImg src={reservation.restaurant.photoUrl} />
        </Left>

        <Right>
          <FirstLine>
            <H1>{reservation.restaurant.name}</H1>
            <CancelButton type="button" onClick={handleCancellation}>
              <StyledCancelX />
            </CancelButton>
          </FirstLine>

          <DateLine>
            <StyledEvent /> {formattedDate} for {reservation.timeSlot}
          </DateLine>

          <PartyLine>
            <StyledParty /> Party of {reservation.partySize}
          </PartyLine>
        </Right>
      </ReservationItem>
    </Link>
  );
});
export default ReservationShow;
