import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            company,
            inCart,
            info
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="com-10 mx-auto text-center text-salnted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End title */}
              {/* product information */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img className="img-fluid" src={img} alt="Product" />
                </div>
                {/* product Text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model:{title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    madu by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-waight-bold mt-3 mb-0">
                    some info about the product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
