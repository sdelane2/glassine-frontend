import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import SplashPage from './components/SplashPage.js'
import NavBar from './components/navbar/NavBar.js'

function App() {



  return (
    <div>
      {NavBar()}
      {SplashPage()}
    </div>
  );
}

export default App;
