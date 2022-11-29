import React from 'react';
import {Good} from "../../types";

interface Props {
  good: Good;
  onClick: React.MouseEventHandler;
}


const DishItem: React.FC<Props> = ({good, onClick}) => {
  const imageStyle = {
    background: `url(${good.image}) no-repeat center center / cover`
  };

  return (
    <div className="card mb-2" onClick={onClick}>
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle}/>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{good.brand}</h5>
            <p className="card-text small">Cloth: {good.cloth}</p>
            <p className="card-text small">Size: {good.size}</p>
            <p className="card-text">Price: {good.price} KGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DishItem;