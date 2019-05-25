import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
           <Experience data = {mydata}/>
           <Education data = {mydata}/>
           <Projects data = {mydata}/>
           <Footer data = {mydata}/>
        </div>
      );
    }
  }

export default App;
