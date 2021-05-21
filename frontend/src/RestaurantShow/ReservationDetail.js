import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Datepicker } from "@zendeskgarden/react-datepickers";
import {
  Dropdown,
  Field,
  Item,
  Menu,
  Select,
} from "@zendeskgarden/react-dropdowns";

import { Field as FormField, Input } from "@zendeskgarden/react-forms";

import { createReservation as createReservationAction } from "../actions/reservationActions";

const Form = styled.form`
  margin: 5px;
  padding: 5px;
`;

const StyledDatepicker = styled(Datepicker)`
  color: purple;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  width: 70%;
  margin-top: 10px;
  font-weight: bold;
  background-color: #2a2ae9;
  color: white;
  height: 40px;
  outline: none;
  box-shadow: none;

  &:hover {
    background-color: #2525c7;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    background-color: #1d1d99;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:focus {
    box-shadow: #a3c0f3 0px 0px 0px 3px;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }
`;

const StyledField = styled(Field)`
  margin-bottom: 5px;
`;

const ReservationDetail = ({ restaurantId }) => {
  const [date, setDate] = useState(new Date());
  const [partySize, setPartySize] = useState("Party size");
  const [timeslot, setTimeslot] = useState("Timeslot");
  const dispatch = useDispatch();

  const createReservation = useCallback(
    (reservation) => dispatch(createReservationAction(reservation)),
    [dispatch]
  );

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const handlePartySizeSelect = useCallback((newPartySize) => {
    setPartySize(newPartySize);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const parsedDate = dateFormatter.format(date);

      const reservation = {
        date: parsedDate,
        time_slot: timeslot.toLowerCase(),
        party_size: parseInt(partySize, 10),
        restaurant_id: restaurantId,
      };
      createReservation(reservation);
    },
    [createReservation, date, timeslot, partySize, restaurantId]
  );

  const handleTimeslotSelect = useCallback((newTimeslot) => {
    setTimeslot(newTimeslot);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Dropdown selectedItem={partySize} onSelect={handlePartySizeSelect}>
          <StyledField>
            <Select>{partySize}</Select>
          </StyledField>
          <Menu>
            {[1, 2, 3, 4, 5].map((option) => (
              <Item key={option} value={option}>
                {option}
              </Item>
            ))}
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={timeslot} onSelect={handleTimeslotSelect}>
          <StyledField>
            <Select>{timeslot}</Select>
          </StyledField>
          <Menu>
            {["Breakfast", "Lunch", "Dinner"].map((timeOption) => (
              <Item key={timeOption} value={timeOption}>
                {timeOption}
              </Item>
            ))}
          </Menu>
        </Dropdown>
        <FormField>
          <StyledDatepicker value={date} onChange={setDate}>
            <Input />
          </StyledDatepicker>
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </div>
  );
};

export default ReservationDetail;
