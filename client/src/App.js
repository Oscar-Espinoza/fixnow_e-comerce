import React from 'react'
import  { Products, Navbar } from './components'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './components/Products/Product/ProductScreen'
import CartScreen from './components/Screens/CartScreen'
import SigninScreen from './components/Screens/SigninScreen'
import { useSelector } from 'react-redux'
import RegisterScreen from './components/Screens/RegisterScreen'

const App = () => {

  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin

  return (
    <BrowserRouter>
      <Navbar userInfo={userInfo}/>
      <Route exact path='/'>
          <Products />
      </Route>

      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart' component={CartScreen} />
      <Route path='/signin' component={SigninScreen} />
      <Route path='/register' component={RegisterScreen} />
    </BrowserRouter>
    
  )
}

export default App

