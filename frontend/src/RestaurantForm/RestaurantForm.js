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

const UploadButtonHidden = styled.input`
  position: absolute;
  width: 115px;
  height: 55px;
  left: 0;
  opacity: 0;
  margin: 10px;
  padding: 10px;
`;

const UploadButtonVisible = styled.button`
  color: hsl(204, 86%, 53%);
  width: 110px;
  height: 50px;
  line-height: 1.15;
  border: 1px solid hsl(204, 86%, 53%);
  font-color: hsl(204, 86%, 53%);
  font-weight: bold;
  background-color: white;
  border-radius: 15%;
  margin: 10px;
  padding: 10px;
`;

const UploadedImg = styled.img`
  margin: 10px;
  padding: 10px;
  border: 1px solid red;
  display: block;
`;

const UploadWrap = styled.div`
  position: relative;
  color: purple;
`;

const RestaurantForm = React.memo(({ createRestaurant }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoSubmit = useCallback((event) => {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () =>
      setPhoto({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPhoto({ imageURL: "", imageFile: null });
    }
  }, []);

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
        <UploadWrap>
          <UploadButtonVisible type="button">Upload file</UploadButtonVisible>
          <UploadButtonHidden
            type="file"
            name="file"
            onChange={handlePhotoSubmit}
            tabIndex={-1}
          />
          {photo && <UploadedImg src={photo.imageUrl} alt="Uploaded Image" />}
        </UploadWrap>
      </Span>
      <Span>
        <SubmitButton>Submit</SubmitButton>
      </Span>
    </Form>
  );
});

export default RestaurantForm;
