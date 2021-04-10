import React from "react";

import AuthRoute from "../util/route_util";
import GlobalStyle from "../GlobalStyle";
import LoginFormContainer from "../SessionForm/LoginFormContainer";
import NavBar from "../NavBar";
import SignupFormContainer from "../SessionForm/SignupFormContainer";

const App = React.memo(() => (
  <div>
    <GlobalStyle />
    <header>
      <NavBar />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
));

export default App;
