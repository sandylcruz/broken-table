import React, { useState, useCallback } from "react";

import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  width: 70%;
  margin: 10px;
  padding: 10px;
  height: 30px;
  font-weight: bold;
  background-color: #2a2ae9;
  color: white;
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
  margin: 10px;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  width: 70%;
`;

const Span = styled.span`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginForm = ({ processForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const user = {
        username,
        password,
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

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Login to continue</h2>

        <Span>
          <Input
            onChange={updateUsername}
            type="text"
            value={username}
            placeholder="Username"
          />

          <Input
            onChange={updatePassword}
            type="password"
            value={password}
            placeholder="Password"
          />

          <Button type="submit">Log in</Button>
        </Span>
      </Form>
    </div>
  );
};

export default LoginForm;
