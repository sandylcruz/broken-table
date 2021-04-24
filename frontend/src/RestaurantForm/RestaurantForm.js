import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import cloudUpload from "./cloudUpload.svg";
import SubmitButton from "../components/SubmitButton";

const ButtonContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  color: #209cee;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    color: white;
  }

  &:active {
    color: white;
  }
`;

const CloudUpload = styled(cloudUpload)`
  color: #209cee;
`;

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

const UploadedImg = styled.img`
  margin: 10px;
  padding: 10px;
  display: block;
`;

const UploadWrap = styled.div``;

const VisibleDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #209cee;
  border-radius: 10px;

  &:hover {
    border: 1 px solid #0099ff;
    background-color: #88caf6;
    transition: border-color 0.25s ease-in-out 0s,
      box-shadow 0.1s ease-in-out 0s, background-color 0.25s ease-in-out 0s,
      color 0.25s ease-in-out 0s;
  }

  &:active {
    background-color: #1081cb;
    font-color: white;
  }

  &:focus {
    color: purple;
  }
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  height: 60px;
  width: 150px;
`;

// const TEN_MEGABYTES = 1000 * 1000 * 10;
const TWO_MEGABYTES = 1000 * 1000 * 2;

const RestaurantForm = React.memo(({ createRestaurant }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const history = useHistory();

  const handlePhotoSubmit = useCallback((event) => {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];

    const isValidSize = file.size <= TWO_MEGABYTES;

    if (file && isValidSize) {
      reader.onloadend = () => {
        setPhoto({ imageUrl: reader.result, imageFile: file });
      };
      reader.readAsDataURL(file);
    } else {
      setPhoto(null);
    }
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const partialRestaurant = {
        name,
        description,
        location,
        photo: photo.imageFile,
      };
      createRestaurant(partialRestaurant).then((restaurant) => {
        history.push(`/restaurants/${restaurant.id}`);
      });
    },
    [name, description, history, location, createRestaurant, photo]
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
          type="text"
          value={name}
          onChange={updateName}
          placeholder="Restaurant Name"
        />
      </Span>

      <Span>
        <Input
          type="text"
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
          <Label>
            <VisibleDiv>
              <ButtonContentDiv>
                <CloudUpload /> &nbsp; Upload
              </ButtonContentDiv>
            </VisibleDiv>

            <Input
              type="file"
              name="file"
              onChange={handlePhotoSubmit}
              tabIndex={-1}
            />
          </Label>

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
