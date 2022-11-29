import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import {CartGood, Good} from "./types";
import './App.css';

import logoIMG from './assets/logo.jpeg';
import dior from './assets/dior.jpeg';
import gucci from './assets/gucci.jpeg';
import gerunsi from './assets/gerunsi.jpeg';


function App() {
  const [goods, setGoods] = useState<Good[]>([
    {id: '1', brand: "Gucci", cloth: "cashmere", price: 1500, size: "180/80", image: gucci },
    {id: '2', brand: "Dior", cloth: "silk", price: 1800, size: "95/95", image: dior},
    {id: '3', brand: "Gerunsi", cloth: "cashmere", price: 1200, size: "180/70", image: gerunsi},
  ]);

  const [cartGoods, setCartGoods] = useState<CartGood[]>([]);

  const addToCart = (good: Good) => {
    setCartGoods(prev => {
      const existingIndex = prev.findIndex(item => {
        return item.good === good;
    });

    if (existingIndex !== -1) {
      const itemsCopy = [...prev];
      const itemCopy = {...prev[existingIndex]};
      itemCopy.amount++;
      itemsCopy[existingIndex] = itemCopy;
      return itemsCopy;
    }

    return [...prev, {good, amount: 1}];
    });
  };


  return (
    <>
      <header>
        <Navbar logo={logoIMG}/>
        <main className="container-fluid main">
          <Routes>
            <Route path="/" element={(
              <Home
                goods={goods}
                addToCart={addToCart}
                cartGoods={cartGoods}
              />
            )}/>
            <Route path="/about-us" element={(
              <AboutUs/>
            )}/>
            <Route path="/contacts" element={(
              <Contacts/>
            )}/>
          </Routes>
        </main>
      </header>
    </>
  );
}

export default App;
