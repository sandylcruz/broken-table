import React, { useCallback, useState } from "react";

import styled from "styled-components";
import {
  Field as FormField,
  Label as FormLabel,
  Input,
} from "@zendeskgarden/react-forms";
import { Datepicker } from "@zendeskgarden/react-datepickers";
import {
  Dropdown,
  Field,
  Item,
  Menu,
  Select,
  Label,
} from "@zendeskgarden/react-dropdowns";

const Form = styled.form`
  margin: 5px;
  padding: 5px;
`;

// const Select = styled.select`
//   width: 100px;
//   border-radius: 5px;
//   border-color: #d3d3d3;
//   padding: 5px;
// `;

const StyledDatepicker = styled(Datepicker)`
  color: purple;
`;

const ReservationDetail = () => {
  const [date, setDate] = useState(new Date());
  const [partySize, setPartySize] = useState(2);

  const handleSelect = useCallback((newPartySize) => {
    setPartySize(newPartySize);
  }, []);

  return (
    <div>
      <Form>
        <Dropdown selectedItem={partySize} onSelect={handleSelect}>
          <Field>
            <Label>Party size</Label>
            <Select>{partySize}</Select>
          </Field>
          <Menu>
            {[1, 2, 3, 4, 5].map((option) => (
              <Item key={option} value={option}>
                {option}
              </Item>
            ))}
          </Menu>
        </Dropdown>
        <FormField>
          <FormLabel>Select a date</FormLabel>
          <StyledDatepicker value={date} onChange={setDate}>
            <Input />
          </StyledDatepicker>
        </FormField>
      </Form>
    </div>
  );
};

export default ReservationDetail;
