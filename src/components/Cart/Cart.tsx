import React, {useState} from 'react';
import CartGoods from "./CartGoods";
import {CartGood} from "../../types";
import './Cart..css';

interface Props {
  cartGoods: CartGood[];
}

const Cart: React.FC<Props> = ({cartGoods}) => {
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
          className="w-100 btn cart-btn text-white"
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
    </>
  );
};

export default Cart;