import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
import { ProductsContext } from '../context/Products'

const Product = (props) => {
  const item = props.children;
  return (
    <div className="Product">
      <Card>
        <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardText>{item.description}</CardText>
          <ProductsContext.Consumer>{({addToCart}) =>
              <Button onClick = {() => addToCart(item)} >Add to cart</Button>
          }</ProductsContext.Consumer>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;