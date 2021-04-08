import React, { useState, useCallback } from "react";

import styled from "styled-components";

const styledForm = styled.form`
  font-family: helvetica;
  color: purple;
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
      <styledForm onSubmit={handleSubmit}>
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

          <button type="submit">Submit</button>
        </div>
      </styledForm>
    </div>
  );
};

export default SessionForm;
