import React, { Component } from "react";

import axios from "axios";

export const ProductsContext = React.createContext();

export class ProductsProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
          products: [],
          cartItems:[]
        };
        this.addToCart = this.addToCart.bind(this);
        this.addCartProduct = this.addCartProduct.bind(this);
        this.subCartProduct = this.subCartProduct.bind(this);
        this.delCartProduct = this.delCartProduct.bind(this);
      }
      componentDidMount(){
        const datalink = "http://localhost:3000/products"
        axios.get(datalink).then( res => 
          this.setState({
            products: res.data
          })  
        )
      }
      addToCart(product){
          const { cartItems } = this.state;
          const cartId = cartItems.map(item => item.id);
          const indexProduct = cartId.indexOf(product.id);
          if(indexProduct >= 0)
            {
              const { amount } = cartItems[indexProduct];
              this.setState({
                cartItems: [
                    ...cartItems.slice(0,indexProduct),
                    {
                        ...product,
                        amount: amount + 1
                    },
                    ...cartItems.slice(indexProduct + 1)
                ]
            })
          }
          else {
          this.setState({
              cartItems: cartItems.concat({...product,amount: 1})
          });
          }
      }
      addCartProduct(product){
        const { cartItems } = this.state;
        const cartId = cartItems.map(item => item.id);
        const indexProduct = cartId.indexOf(product.id);
        const { amount } = cartItems[indexProduct];
              this.setState({
                cartItems: [
                    ...cartItems.slice(0,indexProduct),
                    {
                        ...product,
                        amount: amount + 1
                    },
                    ...cartItems.slice(indexProduct + 1)
                ]
              })
      }
      subCartProduct(product){
          this.setState(state => {
            const { cartItems } = state;
            const cartId = cartItems.map(item => item.id);
            const indexProduct = cartId.indexOf(product.id);
            const { amount } = cartItems[indexProduct];
            if(amount < 1)  this.delCartProduct(product)
            return {
            cartItems: [
                ...cartItems.slice(0,indexProduct),
                {
                    ...product,
                    amount: amount - 1
                },
                ...cartItems.slice(indexProduct + 1)
            ]
            }
          })
          this.setState(state => {
            const { cartItems } = state;
            const cartId = cartItems.map(item => item.id);
            const indexProduct = cartId.indexOf(product.id);
            const { amount } = cartItems[indexProduct];
            if(amount <= 0)  this.delCartProduct(product);
          })
      }
      delCartProduct(product){
        const { cartItems } = this.state;
        const cartId = cartItems.map(item => item.id);
        const indexProduct = cartId.indexOf(product.id);
              this.setState({
                cartItems: [
                    ...cartItems.slice(0,indexProduct),
                    ...cartItems.slice(indexProduct + 1)
                ]
              })
      }
    render(){
        return(
            <ProductsContext.Provider value = {{
                products: this.state.products,
                cartItems:this.state.cartItems,
                addToCart: this.addToCart,
                addCartProduct: this.addCartProduct,
                subCartProduct: this.subCartProduct,
                delCartProduct: this.delCartProduct
            }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

