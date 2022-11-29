import React from 'react';
import CartItem from "./CartItem";
import {CartGood} from "../../types";

interface Props {
  cartGoods: CartGood[];
}

const CartGoods: React.FC<Props> = ({cartGoods}) => {
  const total = cartGoods.reduce((sum, cartGood) => {
    return sum + cartGood.amount * cartGood.good.price;
  }, 0);

  return (
    <>
      {cartGoods.map(cartGood => (
        <CartItem
          key={cartGood.good.id}
          cartGood={cartGood}
        />
      ))}
      <div className="card border-0 p-2">
        <div className="row">
          <div className="col text-right">
            Total:
          </div>
          <div className="col-3 text-right">
            <strong>{total}</strong> KGS
          </div>
        </div>
      </div>
    </>
  );
};

export default CartGoods;