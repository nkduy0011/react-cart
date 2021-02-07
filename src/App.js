import React, { Component } from 'react';

import './App.css';

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

import { ProductsProvider } from './context/Products'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from "reactstrap";
import NavMenu from './components/NavMenu'

class App extends Component {
  render(){
    return (
      <ProductsProvider>
        <Router>
          <div className="App">
            <NavMenu>
              {Link}
            </NavMenu>
            <Container>
              <Switch>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Container>
          </div>
        </Router>
      </ProductsProvider>
    );
  }
}

export default App;
