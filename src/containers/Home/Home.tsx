import React from 'react';
import Goods from "../../components/Goods/Goods";
import Cart from "../../components/Cart/Cart";
import {CartGood, Good} from "../../types";
import './Home.css';

interface Props {
  goods: Good[];
  addToCart: (good: Good) => void;
  cartGoods: CartGood[];
}

const Home: React.FC<Props> = ({goods, cartGoods, addToCart}) => {
  return (
    <>
      <figure className="text-end ozgocho-main text-white py-4">
        <blockquote className="blockquote">
          <h1 className="display-3">OZGOCHO - for the elite</h1>
        </blockquote>
        <figcaption className="blockquote-footer text-white">
          <cite title="Source Title">each of our clients is special for us</cite>
        </figcaption>
      </figure>
      <div className="row mt-2">
        <div className="col-7">
          <Goods goods={goods} addToCart={addToCart}/>
        </div>
        <div className="col-5">
          <Cart cartGoods={cartGoods}/>
        </div>
      </div>
    </>
  );
};

export default Home;