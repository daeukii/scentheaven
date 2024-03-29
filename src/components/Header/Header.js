import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import { useState } from 'react';
import Weather from '../../components/Weather/Weather';

export default function Header() {
  const [active,setActive] = useState("nav__menu");
  


  const navToggle = ()=>{
    active === "nav__menu"
    ? setActive("nav__menu__active")
    : setActive("nav__menu");
  };


  return (
    <nav className="nav">
      <Link to='/' class="nav__brand">ScentsHeaven</Link>
      <ul className={active}>
                <Weather />
        <li className="nav__item"><Link to='/Perfume' className="nav__link">향수</Link></li>
        <li className="nav__item"><Link to='/Body' className="nav__link">바디</Link></li>
        <li className="nav__item"><Link to='/Candle' className="nav__link">캔들</Link></li>
        <li className="nav__item"> <Link to='/Grooming' className="nav__link">그루밍</Link></li>
        <li className="nav__item"><Link to='/Mbti' className="nav__link">MBTI별 향수 추천</Link></li>
      </ul>
    </nav>
  );
}

