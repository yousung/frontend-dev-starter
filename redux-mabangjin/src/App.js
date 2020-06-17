import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomPage from "./pages/WelcomPage";
import MabangjinPage from "./pages/MabangjinPage";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={WelcomPage} />
        <Route path="/mabangjin" component={MabangjinPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
