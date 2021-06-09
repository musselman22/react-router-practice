import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import IndividualProduct from "./Components/IndividualProduct";
import Products from "./Components/Products";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/individual-product">
          <IndividualProduct />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}


export default App;

