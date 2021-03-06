import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";

import AccountContainer from "./Account/AccountContainer";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import GlobalStyle from "./GlobalStyle";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import RestaurantShow from "./RestaurantShow";
import SignupForm from "./SignupForm";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm/RestaurantForm";

const App = React.memo(({ store }) => {
  const history = useHistory();

  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unListen();
    };
  }, [history]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={DEFAULT_THEME}>
        <div>
          <GlobalStyle />
          <header>
            <NavBar />
          </header>
          <Switch>
            <AuthRoute path="/login" component={LoginForm} />
            <AuthRoute path="/signup" component={SignupForm} />
            <Route exact path="/" component={Search} />
            <ProtectedRoute
              exact
              path="/restaurants/new"
              component={RestaurantForm}
            />
            <Route exact path="/restaurants/:id" component={RestaurantShow} />

            <ProtectedRoute path="/account/" component={AccountContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ThemeProvider>
    </Provider>
  );
});

export default App;
