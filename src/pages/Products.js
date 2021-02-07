import React from 'react'

import Product from '../components/ProductCard';
import { ProductsContext } from '../context/Products'
import { Row,Col } from "reactstrap";

export default function Products({products}) {
    return (
      <Row>
        <ProductsContext.Consumer>
          { ({products}) => ( 
            products.map( item => (
            <Col lg="3" md="6" sm="12">
              <Product>
                {item}
              </Product>
            </Col>
            ))
          )}
        </ProductsContext.Consumer>
      </Row>
    );
  }