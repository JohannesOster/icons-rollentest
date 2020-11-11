import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { RoleTest } from "pages";

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={RoleTest} />
      </Switch>
    </HashRouter>
  );
};

export default App;
