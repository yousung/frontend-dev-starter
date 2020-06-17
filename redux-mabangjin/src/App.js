import React from "react";
import { Route, Switch } from "react-router-dom";
import welcomPage from "./pages/welcomPage";
import mabangjinPage from "./pages/mabangjinPage";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={welcomPage} />
        <Route path="/mabangjin" component={mabangjinPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
