import React, { useCallback, useState } from "react";
import styled from "styled-components";

import SubmitButton from "../components/SubmitButton";

const Form = styled.form`
  font-family: helvetica;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 10px;
  box-sizing: border-box;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  width: 70%;
`;

const Span = styled.span`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RestaurantForm = React.memo(({ createRestaurant }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  // const [submitter, setSubmitter] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const partialRestaurant = {
        name,
        description,
        location,
      };

      createRestaurant(partialRestaurant);
    },
    [name, description, location, createRestaurant]
  );

  const updateName = useCallback((event) => {
    setName(event.currentTarget.value);
  }, []);

  const updateDescription = useCallback((event) => {
    setDescription(event.currentTarget.value);
  }, []);

  const updateLocation = useCallback((event) => {
    setLocation(event.currentTarget.value);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create a New Restaurant</h2>
      <Span>
        <Input
          type="test"
          value={name}
          onChange={updateName}
          placeholder="Restaurant Name"
        />
      </Span>

      <Span>
        <Input
          type="test"
          value={location}
          onChange={updateLocation}
          placeholder="Address"
        />
      </Span>

      <Span>
        <Input
          type="text"
          value={description}
          onChange={updateDescription}
          placeholder="Describe here...."
        />
      </Span>
      <Span>
        <SubmitButton>Submit</SubmitButton>
      </Span>
    </Form>
  );
});

export default RestaurantForm;
