import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home'


const App = () => {
  
  return(
    <>

      <Router>
        <Home />
      </Router>
     
    </>
  )
}

export default App;