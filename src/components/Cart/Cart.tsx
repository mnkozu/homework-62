import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import CartGoods from "./CartGoods";
import {CartGood} from "../../types";
import Modal from "../Modal/Modal";
import './Cart.css';

interface Props {
  cartGoods: CartGood[];
}

const Cart: React.FC<Props> = ({cartGoods}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  let cart = (
    <div className="alert alert-primary">
      Cart is empty! Add something!
    </div>
  );
  const cancel = () => setShowModal(prev => !prev);


  if (cartGoods.length > 0) {
    cart = (
      <>
        <CartGoods cartGoods={cartGoods}/>
        <button
          className="w-100 btn text-white border-1 border-white mt-3"
          onClick={cancel}
        >
          Order
        </button>
      </>
    );
  }


  return (
    <>
      <h4>Cart</h4>
      {cart}
      <Modal show={showModal} title="Order" onClose={cancel}>
        <div className="modal-body">
          <p>Do u want to continue?</p>
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-outline-secondary"
            onClick={cancel}
          >
            Cancel
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/checkout')}
          >
            Continue
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Cart;