import React from 'react'
import  { Products, Navbar } from './components'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './components/Products/Product/ProductScreen'

const App = () => {

  return (
    <BrowserRouter>
      <Route exact path='/'>
        <div>
          <Navbar />
          <Products />
        </div>
      </Route>

      <Route path='/product/:id' component={ProductScreen}>

      </Route>
    </BrowserRouter>
    
  )
}

export default App

