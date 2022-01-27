import logo from './logo.svg';
import './App.css';

// Import dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import * as yup from 'yup';
// Import styling
import './App.css';
// Import components
import Navbar from './components/navbar';
import HomePage from './components/home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <HomePage/>
        {/* <Route path='/' component={HomePage} /> */}
      </header>
      
    </div>
  );
}

export default App;
