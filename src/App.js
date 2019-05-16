import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';

import mydata from './data';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
      return (
        <div className="App">
           <AppNavbar/>
           <Home data = {mydata}/>
           <About data = {mydata}/>
           <Education/>
           <Skills/>
           <Projects/>
    
        </div>
      );
    }
  }

export default App;
