import * as React from 'react';
import './assets/css/main.css';
import Header from './components/Header';
import Player from './components/Player';
import Main from './components/Main';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header collapsed={true}/>
        <Main />
        <Player title="Tecnologería Rules!"/>
      </div>
    );
  }
}

export default App;
