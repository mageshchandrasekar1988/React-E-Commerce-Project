import React, { Component } from "react";
import Titel from "../Title";

class EmptyCart extends Component {
  state = {};
  render() {
    return <Titel name="your" title="cart is currently empty" />;
  }
}

export default EmptyCart;
