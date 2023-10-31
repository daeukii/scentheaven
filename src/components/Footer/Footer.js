import React from 'react';
import FooterList from './FooterList';
import { FOOTER_LIST } from '../FooterLists/FOOTER_LIST';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInnerWrapper">
        <div className="footerInner">
          {FOOTER_LIST.map(ele => (
            <FooterList list={ele} key={ele.id} />
          ))}
        </div>
        <div className="footerInnerSecond">
            <i className="fab fa-instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
