import React from 'react';
import Goods from "../../components/Goods/Goods";
import Cart from "../../components/Cart/Cart";
import {CartGood, Good} from "../../types";
import './Home.css';
import TitleBlock from "../../components/TitleBlock/TitleBlock";

interface Props {
  goods: Good[];
  addToCart: (good: Good) => void;
  cartGoods: CartGood[];
}

const Home: React.FC<Props> = ({goods, cartGoods, addToCart}) => {
  return (
    <>
      <TitleBlock/>
      <div className="row mt-2">
        <div className="col-8 px-4">
          <Goods goods={goods} addToCart={addToCart}/>
        </div>
        <div className="col-4">
          <Cart cartGoods={cartGoods}/>
        </div>
      </div>
    </>
  );
};

export default Home;