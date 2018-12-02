import React, { Component } from 'react';
import { NavBar,Heading, ProjectSection } from './components';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Heading/>
        <ProjectSection/>
      </div>
    );
  }
}

export default App;
