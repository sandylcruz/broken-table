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
  padding-top: 100px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  width: 70%;
`;

const GreetingMessage = styled.p`
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

const SignupForm = React.memo(({ processForm }) => {
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
        <GreetingMessage>
          Create a free account to book and manage your culinary experiences.
        </GreetingMessage>

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

          <Button type="submit">Sign up</Button>
        </Span>
      </Form>
    </div>
  );
});

export default SignupForm;
