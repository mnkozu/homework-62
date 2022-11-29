import React from 'react';
import {Link, Outlet} from "react-router-dom";
import CartGoods from "../../components/Cart/CartGoods";
import {CartGood} from "../../types";

interface Props {
  cartGoods: CartGood[];
}

const Checkout: React.FC<Props> = ({cartGoods}) => {
  return (
    <div className="row mt-2">
      <div className="col-4 m-auto">
        <h4>Checkout</h4>
        <CartGoods cartGoods={cartGoods}/>
        <div className="d-flex justify-content-end mt-2">
          <Link to='/' className="btn btn-outline-secondary">Cancel</Link>
          <Link to="continue" className="btn btn-secondary ms-2">Continue</Link>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Checkout;