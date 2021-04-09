import React, { useState, useCallback } from "react";

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
  margin: 10px;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  width: 70%;
`;

const P = styled.p`
  padding: 10px;
  margin: 10px;
`;

const Span = styled.span`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SessionForm = ({ processForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const user = {
        username,
        password,
        email,
      };

      processForm(user);
    },
    [username, password, processForm]
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

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Sign up to continue</h2>
        <P>
          Create a free account to book and manage your culinary experiences.
        </P>

        <Span>
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
            onChange={updatePassword}
            type="password"
            value={password}
            placeholder="Password"
          />

          <SubmitButton type="submit">Submit</SubmitButton>
        </Span>
      </Form>
    </div>
  );
};

export default SessionForm;
