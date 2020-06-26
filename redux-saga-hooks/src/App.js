import React from 'react';
import logo from './logo.svg';
import './App.css';
import DialogMessage from './component/DialogMessage';
import PoketmonContainer from './container/PoketmonContainer';
import {useSelector} from 'react-redux';

function App() {
  const {isLoading, message} = useSelector((state) => state.common, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <div className="App-logo-background">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        ) : null}

        <PoketmonContainer />

        {message && <DialogMessage message={message} />}
      </header>
    </div>
  );
}

export default App;
