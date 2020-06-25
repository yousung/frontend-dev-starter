import React from 'react';
import logo from './logo.svg';
import './App.css';
import PoketmonContainer from './container/PoketmonContainer';
import {useSelector} from 'react-redux';

function App() {
  const {isLoading} = useSelector((state) => state.common, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <div className="App-logo-background">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        ) : null}

        <PoketmonContainer />
      </header>
    </div>
  );
}

export default App;
