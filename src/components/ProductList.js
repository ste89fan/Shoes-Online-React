import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <>
        <div className="container">
          <Title title="our products" />
          <div className="row justify-content-center">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
