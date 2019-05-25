import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
//Consumer

class Context extends Component {
  state = { products: storeProducts, detailProduct: detailProduct };

  handelDetails = () => {
    console.log("hellow from details");
  };
  addToCart = () => {
    console.log("Hellow from addtocart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetails: this.handelDetails,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { Context, ProductConsumer };
