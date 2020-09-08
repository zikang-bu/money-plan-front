import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const renderRoutes = (routes, switchProps = {}) => {
  let routers = []

  routes.forEach((route, i) => {
    routers.push(
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => (
          <route.component {...props} {...route.extraProps} route={route} />
        )}
      />
    )
  });

  return (
    <Switch {...switchProps}>
      {routers}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default renderRoutes;
