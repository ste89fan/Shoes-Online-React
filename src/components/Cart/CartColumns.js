import React from "react";

function CartColumns() {
  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        <div className="col-10 col-lg-2 d-none d-lg-block">
          <p className="text-uppercase">products</p>
        </div>
        <div className="col-10 col-lg-2 d-none d-lg-block">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-10 col-lg-2 d-none d-lg-block">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 col-lg-2 d-none d-lg-block">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 col-lg-2 d-none d-lg-block">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 col-lg-2 d-none d-lg-block">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;
