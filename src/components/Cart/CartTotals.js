import React from "react";
import { Link } from "react-router-dom";

function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 mt-2 mb-3 ml-sm-5 col-sm-8 text-capitalize text-right d-flex justify-content-center">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-10">
              <h5>
                <span className="text-uppercase">subtotal :</span>
                <strong> ${cartSubTotal}</strong>
              </h5>
            </div>
            <div className="col-10">
              <h5>
                <span className="text-uppercase">tax :</span>
                <strong> ${cartTax}</strong>
              </h5>
            </div>
            <div className="col-10">
              <h5>
                <span className="text-uppercase">total :</span>
                <strong> ${cartTotal}</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
