import React from 'react'
import  { Products, Navbar } from './components'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './components/Products/Product/ProductScreen'
import cartScreen from './components/Screens/cartScreen'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
          <Products />
      </Route>

      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart' component={cartScreen} />
    </BrowserRouter>
    
  )
}

export default App

