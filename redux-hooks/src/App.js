import React from "react";
import "./App.css";
import CounterContainer from "./container/CounterContainer";
import { BrowserRouter, Link, Route } from "react-router-dom";
import TodoContainer from "./container/TodoContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/counter">counter</Link>
          <Link to="/todo">todo</Link>
        </div>
        <header className="App-header">
          <Route exact path="/counter" component={CounterContainer} />
          <Route exact path="/todo" component={TodoContainer} />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
