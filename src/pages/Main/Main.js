import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import Weather from '../../components/Weather/Weather';
import products from '../../../src/api/products.json';
import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import './main.css';

export default function Main() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [img, setImg] = useState();

    useEffect(() => {
        setName(products.name);
        setPrice(products.price);
        setImg(products.img);
    }, []);

    return (
        <div>
            <div>
                <Weather />
            </div>
            <div className='react-vid'> 
                <ReactPlayer
                    url={"https://youtu.be/DHB6gEKf34U"}
                    width="100vw"
                    height="50vh"
                    loop={true}
                    playing={true}
                    muted={true}
                    controls={false}
                />
            </div>
        </div>
    );
}

