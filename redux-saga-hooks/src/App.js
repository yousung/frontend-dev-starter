import React from 'react';
import logo from './logo.svg';
import './App.css';
import DialogMessage from './component/DialogMessage';
import PoketmonContainer from './container/PoketmonContainer';
import {useDispatch, useSelector} from 'react-redux';
import PoketmonLimit from "./component/PoketmonLimit";
import {actions} from "./module/poketmon";

function App() {
  const {isLoading, message} = useSelector((state) => state.common, []);
  const { limit } = useSelector((state) => state.poketmon, []);
  const dispatch = useDispatch();

  const onChangePage = ({target: {value}}) => {
    dispatch(actions.setLimit(value));
    dispatch(actions.setPage(1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <PoketmonLimit changePage={onChangePage} initValue={limit} />


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
