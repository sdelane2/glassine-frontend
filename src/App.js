import React, { useEffect } from 'react'
import {useRoutes} from 'hookrouter';
import './App.css';
import Routes from './components/router/routes.js';



function App() {
  const routeResult = useRoutes(Routes)


  return (
    
    <div>
      {routeResult}
    </div>
    
  );
}

export default App;
