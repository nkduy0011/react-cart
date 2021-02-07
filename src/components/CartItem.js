import React from 'react'
import { ProductsContext } from '../context/Products' 

export default function CartItem(props){
    const item = props.children;
    return(
        <div className="CartItem">
            <div className="CartItem-content">
                <div className="CartItem-image d-sm-block d-none" >
                    <img src={item.imageUrl} alt="..."/>
                </div>
                <div className="CartItem-info">
                    <h5>{item.title}</h5>
                    <p className="d-md-block d-none">{item.description}</p>
                </div>
            </div>
            <div className="CartItem-amount">
                <ProductsContext.Consumer>{({subCartProduct}) =>
                    <div onClick = { () => subCartProduct(item)}>
                        -
                    </div> 
                    }
                </ProductsContext.Consumer>
                <input type="text" value={item.amount} readonly/>
                <ProductsContext.Consumer>{({addCartProduct}) =>
                    <div onClick = { () => addCartProduct(item)}>
                        +
                    </div> 
                    }
                </ProductsContext.Consumer>
            </div>
            <ProductsContext.Consumer>{({delCartProduct}) =>
                    <div className = "CartItem-delete" onClick = { () => delCartProduct(item)}>
                        X
                    </div>
                    }
                </ProductsContext.Consumer>
        </div>
    )
}