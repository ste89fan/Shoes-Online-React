import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import ButtonField from "../components/Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      id="modal"
                      className="col-8 col-md-6 col-lg-4 text-center text-capitalize p-4"
                    >
                      <h3>item added to the cart</h3>
                      <img src={img} className="img-fluid" alt="product" />
                      <h3>{title}</h3>
                      <h3>price : $ {price}</h3>
                      <Link className="d-block mb-2" to="/">
                        <ButtonField onClick={() => closeModal()}>
                          continue shopping
                        </ButtonField>
                      </Link>
                      <Link to="/cart">
                        <ButtonField onClick={() => closeModal()}>
                          go to cart
                        </ButtonField>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
  }
`;

export default Modal;
