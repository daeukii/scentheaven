import React from 'react'
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';


export default function Grooming() {

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
        {products[13].name}
        {products[13].price}
        <div>
          <img src={products[13].img} />
        </div>
        <div>
          {products[13].txt}
        </div>
      </div>
    </div>
  )
}
