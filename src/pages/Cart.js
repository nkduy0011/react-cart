import React from 'react'

import CartItem from '../components/CartItem'
import {ProductsContext} from '../context/Products' 

export default function CartRouter() {
    return (
      <ProductsContext.Consumer>{ ({cartItems}) =>
      cartItems.map(item =>(
          <CartItem>
            {item}
          </CartItem>
        ))
      }</ProductsContext.Consumer>
    
    )
  }