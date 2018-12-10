import * as React from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';

library.add(faStroopwafel);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload. <FontAwesomeIcon icon="stroopwafel"/>
        </p>
      </div>
    );
  }
}

export default App;
