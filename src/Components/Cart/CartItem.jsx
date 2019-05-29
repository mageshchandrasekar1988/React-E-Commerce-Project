import React, { Component } from "react";
class CartItem extends Component {
  state = {};
  render() {
    const { item, value } = this.props;
    const { id, img, title, total, count, price } = item;
    const { increment, decrement, removeItem, clearCart } = value;
    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="Product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="col-lg-2">
            product : <span>{title}</span>
          </span>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="col-lg-2">
            price : <span>{price}</span>
          </span>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong>Item total: $ {total}</strong>
        </div>
      </div>
    );
  }
}

export default CartItem;
