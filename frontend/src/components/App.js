import React from "react";
import { Route } from "react-router-dom";

import AuthRoute from "../util/routeUtil";
import GlobalStyle from "../GlobalStyle";
import LoginFormContainer from "../SessionForm/LoginFormContainer";
import NavBar from "../NavBar";
import RestaurantFormContainer from "../RestaurantForm/RestaurantFormContainer";
import SignupFormContainer from "../SessionForm/SignupFormContainer";
import SearchContainer from "../Search/SearchContainer";

const App = React.memo(() => (
  <div>
    <GlobalStyle />
    <header>
      <NavBar />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={SearchContainer} />
    <Route path="/restaurants/new" component={RestaurantFormContainer} />
  </div>
));

export default App;
