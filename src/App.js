import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import SplashPage from './components/SplashPage.js'
import NavBar from './components/navbar/NavBar.js'

function App() {



  return (
    <BrowserRouter>
    <div>
      {NavBar()}
      {SplashPage()}
    </div>
    </BrowserRouter>
  );
}

export default App;
