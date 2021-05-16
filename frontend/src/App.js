import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import AccountContainer from "./Account/AccountContainer";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import GlobalStyle from "./GlobalStyle";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import RestaurantForm from "./RestaurantForm";
import RestaurantShow from "./RestaurantShow";
import SignupForm from "./SignupForm";
import Search from "./Search";
import UserFavorites from "./Account/UserFavorites";
import UserReservations from "./Account/UserReservations";

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
        <ProtectedRoute exact path="/account/" component={AccountContainer} />
        <ProtectedRoute
          exact
          path="/account/favorites"
          component={UserFavorites}
        />
        <ProtectedRoute
          exact
          path="/account/reservations"
          component={UserReservations}
        />
      </div>
    </HashRouter>
  </Provider>
));

export default App;
