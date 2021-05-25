import React from 'react'
import  { Products, Navbar } from './components'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './components/Products/Product/ProductScreen'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
          <Products />
      </Route>

      <Route path='/product/:id' component={ProductScreen} />
    </BrowserRouter>
    
  )
}

export default App

