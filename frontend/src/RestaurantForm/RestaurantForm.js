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

// import Geocode from "react-geocode";

// user inputs address
// map is generated which generates lat/lng
// save lat/lng into state
// const getCoordsFromAddress = (address) => {
// Geocode.fromAddress(address).then(
//   (response) => {
//     const { latitude, longitude } = response.results[0].geometry.location;
//     console.log(latitude, longitude);
//   },
//   (error) => {
//     console.errors(error);
//   }
// );
// };

const RestaurantForm = React.memo(() => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [submitter, setSubmitter] = useState("");

  const handleSubmit = () => {};

  const updateName = useCallback((event) => {
    setName(event.currentTarget.value);
  }, []);

  const updateDescription = useCallback((event) => {
    setDescription(event.currentTarget.value);
  }, []);

  const updateAddress = useCallback((event) => {
    setAddress(event.currentTarget.value);
  });

  // const convertAddressToCoordinates = () => {};

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
          value={address}
          onChange={updateAddress}
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
