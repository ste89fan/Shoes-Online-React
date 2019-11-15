import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import ButtonField from "../components/Button";

export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container">
              <div className="row justify-content-center my-4">
                <div className="col-12 col-md-10 text-center">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 text-center">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-6 text-center">
                  <h3 className="text-capitalize">made by : {company}</h3>
                  <h3 className="text-capitalize">
                    price : <span>$</span>
                    {price}
                  </h3>
                  <p className="font-weight-bold mt-3 mb-1 text-capitalize">
                    info about product :
                  </p>
                  <p>{info}</p>
                  <Link to="/" className="pr-3">
                    <ButtonField className="text-primary">
                      back to products
                    </ButtonField>
                  </Link>
                  <ButtonField
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className="text-primary mb-3"
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonField>
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
