import React, { Component, Fragment } from "react";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import Product from "./Product";
class ProductLiast extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(prd => {
                    return <Product key={prd.id} products={prd} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductLiast;
