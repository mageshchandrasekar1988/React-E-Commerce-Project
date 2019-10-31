import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPal";
class CartTotals extends Component {
  state = {};
  render() {
    const { value, history } = this.props;
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-3"
                  type="button"
                  onClick={() => clearCart()}
                >
                  clear cart
                </button>
              </Link>
              <h5>
                <span className="text-title">subtotal </span>
                <strong>$ {cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">tax </span>
                <strong>$ {cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title">total </span>
                <strong>$ {cartTotal}</strong>
              </h5>
              <PayPalButton
                cartTotal={cartTotal}
                clearCart={clearCart}
                history={history}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CartTotals;