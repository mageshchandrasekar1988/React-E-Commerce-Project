import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider
//Consumer

class Context extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItems = id => {
    const findProduct = this.state.products.find(items => items.id === id);
    return findProduct;
  };
  handelDetails = id => {
    const getProduct = this.getItems(id);
    this.setState(() => {
      return { detailProduct: getProduct };
    });
  };
  addToCart = id => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItems(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return { products: tempProduct, cart: [...this.state.cart, product] };
    });
  };

  openModal = id => {
    const modalProductValue = this.getItems(id);
    this.setState(() => {
      return { modalProduct: modalProductValue, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  render() {
    console.log(this.state);
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetails: this.handelDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { Context, ProductConsumer };
