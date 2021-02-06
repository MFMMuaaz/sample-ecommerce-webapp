import React from 'react'
import Home from './pages/Home'
import Product from './pages/Product'
import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path={"/"} exact component={Home} />
      <Route path={"/product/:id/:title/:price/:size/:rating"} component={Product} />
    </Router>
  )
}

export default App