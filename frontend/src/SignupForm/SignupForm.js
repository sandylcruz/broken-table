import React, { useState, useCallback } from "react";

import styled from "styled-components";
import cloudUpload from "../RestaurantForm/cloudUpload.svg";

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  width: 70%;
  margin: 10px;
  padding: 10px;
  height: 40px;
  font-weight: bold;
  background-color: #2a2ae9;
  color: white;
`;

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
  padding-top: 100px;
`;

const GreetingMessage = styled.p`
  padding: 10px;
  margin: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  width: 70%;
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  height: 60px;
  width: 150px;
`;

const Span = styled.span`
  padding: 10px;
  margin: 10px;
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
const TWO_MEGABYTES = 1000 * 1000 * 2;

const SignupForm = React.memo(({ processForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

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
      const user = {
        username,
        password,
        email,
        phoneNumber,
        city,
        state,
        name,
        photo: photo.imageFile,
      };

      processForm(user);
    },
    [username, password, photo, processForm]
  );

  const updateUsername = useCallback((event) => {
    setUsername(event.currentTarget.value);
  }, []);

  const updatePassword = useCallback((event) => {
    setPassword(event.currentTarget.value);
  }, []);

  const updateEmail = useCallback((event) => {
    setEmail(event.currentTarget.value);
  }, []);

  const updateName = useCallback((event) => {
    setName(event.currentTarget.value);
  }, []);

  const updatePhoneNumber = useCallback((event) => {
    setPhoneNumber(event.currentTarget.value);
  }, []);

  const updateCity = useCallback((event) => {
    setCity(event.currentTarget.value);
  }, []);

  const updateState = useCallback((event) => {
    setState(event.currentTarget.value);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Sign up to continue</h2>
        <GreetingMessage>
          Create a free account to book and manage your culinary experiences.
        </GreetingMessage>

        <Span>
          <Input
            onChange={updateName}
            type="text"
            value={name}
            placeholder="Name"
          />

          <Input
            onChange={updateUsername}
            type="text"
            value={username}
            placeholder="Username"
          />

          <Input
            onChange={updateEmail}
            type="text"
            value={email}
            placeholder="Email"
          />

          <Input
            onChange={updatePhoneNumber}
            type="tel"
            value={phoneNumber}
            placeholder="Phone Number"
          />

          <Input
            onChange={updateCity}
            type="text"
            value={city}
            placeholder="City"
          />

          <Input
            onChange={updateState}
            type="text"
            value={state}
            placeholder="State"
          />

          <Input
            onChange={updatePassword}
            type="password"
            value={password}
            placeholder="Password"
          />

          <Span>
            <div>
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

              {photo && (
                <UploadedImg src={photo.imageUrl} alt="Uploaded Image" />
              )}
            </div>
          </Span>

          <Button type="submit">Sign up</Button>
        </Span>
      </Form>
    </div>
  );
});

export default SignupForm;
