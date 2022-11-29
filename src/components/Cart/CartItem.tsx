import React from 'react';
import {CartGood} from "../../types";

interface Props {
  cartGood: CartGood;
}

const CartItem: React.FC<Props> = ({cartGood}) => {
  const price = cartGood.amount * cartGood.good.price;

  return (
    <div className="card mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{cartGood.good.brand}</div>
        <div className="col-2">x{cartGood.amount}</div>
        <div className="col-3 text-right">
          {price} KGS
        </div>
      </div>
    </div>
  );
};

export default CartItem;