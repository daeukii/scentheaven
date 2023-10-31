import React from 'react'
import './Perfume.css';
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';

export default function Perfume() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [txt, setTxt] = useState();
  const [topnote, setTopnote] = useState();
  const [middlenote, setMiddlenote] = useState();
  const [basenote, setBasenote] = useState();

  useEffect(() => {
    setName(products.name);
    setPrice(products.price);
    setImg(products.img);
    setTxt(products.txt);
    setTopnote(products.topnote);
    setMiddlenote(products.middlenote);
    setBasenote(products.basenote);
  }, []);

  return (
    <div className='name__price'>
      <div>
        {products[0].name}
        {products[0].price}
        <div className='imgbox'>
          <img src={products[0].img} />
        </div>
        <div className='text'>
          {products[0].txt}
        </div>
        <div className='note'>
          {products[0].topnote}
          {products[0].middlenote}
          {products[0].basenote}
        </div>
      </div>
    </div>
  )
}

