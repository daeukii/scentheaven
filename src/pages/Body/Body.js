import React from 'react'
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';

export default function Body() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();
  const [txt,setTxt] = useState();


  useEffect(() => {
    setName(products.name);
    setPrice(products.price);
    setImg(products.img);
    setTxt(products.txt);
  },[]);

  return (
    <div>
    <div>
      <div>
        {products[6].name}
        {products[6].price}
        <div>
          <img src={products[6].img} />
        </div>
        <div>
          {products[6].txt}
        </div>
      </div>
    </div>
    </div>
  )
}
