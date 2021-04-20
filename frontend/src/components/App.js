import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import GlobalStyle from "../GlobalStyle";
import LoginFormContainer from "../SessionForm/LoginFormContainer";
import NavBar from "../NavBar";
import RestaurantFormContainer from "../RestaurantForm/RestaurantFormContainer";
import RestaurantShowContainer from "../RestaurantShow/RestaurantShowContainer";
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
    <Route exact path="/restaurants/:id" component={RestaurantShowContainer} />
    <ProtectedRoute
      exact
      path="/restaurants/new"
      component={RestaurantFormContainer}
    />
  </div>
));

export default App;
