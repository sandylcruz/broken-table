import React, { useState, useCallback } from "react";

import styled from "styled-components";

const Form = styled.form`
  font-family: helvetica;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 300px;
`;

const Button = styled.button`
  border-radius: 10%;
  border: 1px solid blue;
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
        <p>
          Create a free account to book and manage your culinary experiences.
        </p>

        <div>
          <label htmlFor="username">
            Username:
            <input onChange={updateUsername} type="text" value={username} />
          </label>

          <label htmlFor="email">
            Email:
            <input onChange={updateEmail} type="text" value={email} />
          </label>

          <label htmlFor="password">
            Password:
            <input onChange={updatePassword} type="password" value={password} />
          </label>

          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default SessionForm;
