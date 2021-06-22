import Axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (productId, qty = 1) => async(dispatch, getState) => {
  const {data} = await Axios.get(`/api/products/${productId}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      inStock: data.inStock,
      product: data._id,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productId) => (dispatch, getState) => {

  dispatch({ type: CART_REMOVE_ITEM, payload: productId})
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  
}