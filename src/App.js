import React, { Component } from 'react';
import './App.css';

import Form from './Components/Form'
import Recipe from './Components/Recipe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
          <Form/>
          <Recipe/>
        </header>
      </div>
    );
  }
}


export default App;
