import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import AccountContainer from "./Account/AccountContainer";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import GlobalStyle from "./GlobalStyle";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
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
        <Switch>
          <AuthRoute path="/login" component={LoginForm} />
          <AuthRoute path="/signup" component={SignupForm} />
          <Route exact path="/" component={Search} />
          <Route exact path="/restaurants/:id" component={RestaurantShow} />
          <ProtectedRoute
            exact
            path="/restaurants/new"
            component={RestaurantForm}
          />
          <ProtectedRoute path="/account/" component={AccountContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
));

export default App;
