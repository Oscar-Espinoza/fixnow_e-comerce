import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const cartScreen = (props) => {

  const createCartList = () => {
    const items = props.cartItems
    if (items.length !== 0) {
      console.log(items)
      return items.map((product => {
        return (
          <li key={product.id}>{product.name}</li>
        )
      }))
    } else {
      return (<h3>No hay items en el carro</h3> )
    }
  }
    


  return (
    <div>
      <h1>Cart Screen</h1>
      <ul>
        {createCartList()}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cartItems: state.cart.cartItems
  }
}

export default connect(mapStateToProps)(cartScreen)
