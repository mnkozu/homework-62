import React from 'react';
import GoodItem from "./GoodItem";
import {Good} from "../../types";

interface Props {
  goods: Good[];
  addToCart: (good: Good) => void;

}

const Goods: React.FC<Props> = ({goods, addToCart}) => {
  return (
    <>
      <h4>Goods</h4>
      {goods.map((good) => (
        <GoodItem
          key={good.id}
          good={good}
          onClick={() => addToCart(good)}
        />
      ))}
    </>
  );
};

export default Goods;