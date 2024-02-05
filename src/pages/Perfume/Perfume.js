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
    <div>
    <div>
      <div>
        {products[0].name}
        {products[0].price}
        <div>
          <img src={products[0].img} />
        </div>
        <div>
          {products[0].txt}
        </div>
        <div>
          {products[0].topnote}
          {products[0].middlenote}
          {products[0].basenote}
        </div>
      </div>
    </div>

    <div>
      <div>
        {products[1].name}
        {products[1].price}
        <div>
          <img src={products[1].img} />
        </div>
        <div>
          {products[1].txt}
        </div>
        <div>
          {products[1].topnote}
          {products[1].middlenote}
          {products[1].basenote}
        </div>
      </div>
    </div>

    <div>
      <div>
        {products[2].name}
        {products[2].price}
        <div>
          <img src={products[2].img} />
        </div>
        <div>
          {products[2].txt}
        </div>
        <div>
          {products[2].topnote}
          {products[2].middlenote}
          {products[2].basenote}
        </div>
      </div>
    </div>

    <div>
      <div>
        {products[3].name}
        {products[3].price}
        <div>
          <img src={products[3].img} />
        </div>
        <div>
          {products[3].txt}
        </div>
        <div>
          {products[3].topnote}
          {products[3].middlenote}
          {products[3].basenote}
        </div>
      </div>
    </div>

    <div>
      <div>
        {products[4].name}
        {products[4].price}
        <div>
          <img src={products[4].img} />
        </div>
        <div>
          {products[4].txt}
        </div>
        <div>
          {products[4].topnote}
          {products[4].middlenote}
          {products[4].basenote}
        </div>
      </div>
    </div>

    <div>
      <div>
        {products[5].name}
        {products[5].price}
        <div>
          <img src={products[5].img} />
        </div>
        <div>
          {products[5].txt}
        </div>
        <div>
          {products[5].topnote}
          {products[5].middlenote}
          {products[5].basenote}
        </div>
      </div>
    </div>

    <div>
          {products[5].topnote}
          {products[5].middlenote}
          {products[5].basenote}
        </div>
        <div>
          {products[5].topnote}
          {products[5].middlenote}
          {products[5].basenote}
        </div>
        <div>
          {products[5].topnote}
          {products[5].middlenote}
          {products[5].basenote}
        </div>
        <div>
          {products[5].topnote}
          {products[5].middlenote}
          {products[5].basenote}
        </div>
        <div>
          {products[5].topnote}
          {products[5].middlenote}
          {products[5].basenote}
        </div>

    </div>
  )
}

