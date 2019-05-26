import React, { Component, Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import ProductList from "./Components/ProductList";
import Modal from "./Components/Modal";
//import Product from "./Components/Product";
import Default from "./Components/Default";
class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Fragment>
    );
  }
}

export default App;
