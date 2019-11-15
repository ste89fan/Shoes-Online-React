import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <>
        <div className="col-md-6 col-8 my-3">
          <div className="card">
            <ProductConsumer>
              {value => (
                <div
                  className="img-container"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize pt-2" disabled>
                        in cart
                      </p>
                    ) : (
                      <FaShoppingCart className="cartIcon" />
                    )}
                  </button>
                </div>
              )}
            </ProductConsumer>
          </div>
          <div className="cardFooter d-flex justify-content-between p-3">
            <p className="mb-0">{title}</p>
            <h4 className="text-blue mb-0 ml-2">
              <span>$</span>
              {price}
            </h4>
          </div>
        </div>
      </>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
