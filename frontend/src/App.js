import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import GlobalStyle from "./GlobalStyle";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import RestaurantForm from "./RestaurantForm";
import RestaurantShow from "./RestaurantShow";
import SignupForm from "./SignupForm";
import Search from "./Search";

const App = React.memo(({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <GlobalStyle />
        <header>
          <NavBar />
        </header>

        <AuthRoute path="/login" component={LoginForm} />
        <AuthRoute path="/signup" component={SignupForm} />
        <Route exact path="/" component={Search} />
        <Route exact path="/restaurants/:id" component={RestaurantShow} />
        <ProtectedRoute
          exact
          path="/restaurants/new"
          component={RestaurantForm}
        />
      </div>
    </HashRouter>
  </Provider>
));

export default App;
