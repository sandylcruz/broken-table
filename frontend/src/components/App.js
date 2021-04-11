import React from "react";
import { Route } from "react-router-dom";

import AuthRoute from "../util/routeUtil";
import GlobalStyle from "../GlobalStyle";
import LoginFormContainer from "../SessionForm/LoginFormContainer";
import NavBar from "../NavBar";
import RestaurantIndexContainer from "../Restaurant/RestaurantIndexContainer";
import SignupFormContainer from "../SessionForm/SignupFormContainer";

const App = React.memo(() => (
  <div>
    <GlobalStyle />
    <header>
      <NavBar />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={RestaurantIndexContainer} />
  </div>
));

export default App;
