import { PRODUCT_DETAILS_FAIL } from "../constants/productConstants"
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants"
import Axios from 'axios'

export const signin = (email, password) => async(dispatch) => {
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password} })
  try {
    const { data } = await Axios.post('/api/users/signin', {email, password})
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message 
      ? error.response.data.message
      : error.message 
    })
  }
}