import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import {ProductsContext} from '../context/Products'

export default function NavMenu (props)  {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const Link = props.children;
  return (
    <div className = "NavMenu">
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/" >Reactstrap</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/products" >Products</Link>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                  <ProductsContext>{({cartItems}) => 
                    <Link className="nav-link" to="/cart" >Cart({cartItems.length})</Link>
                  }</ProductsContext>
                </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}