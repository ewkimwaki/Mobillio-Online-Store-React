import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <h3 className="footer-text Heading-3">{props.heading}</h3>
        <span className="footer-text01">
          <span>+254 743758887</span>
          <br></br>
          <span>+254 798158075</span>
          <br></br>
          <span>+254 716556409</span>
          <br></br>
        </span>
        <span className="footer-text08">{props.text}</span>
      </div>
      <div className="footer-links-container">
        <div className="footer-container1">
          <span className="footer-text09">{props.text1}</span>
          <span className="footer-text10">{props.text2}</span>
          <span className="footer-text11">{props.text3}</span>
          <span className="footer-text12">{props.text4}</span>
          <span className="footer-text13">{props.text5}</span>
          <span className="footer-text14">{props.text6}</span>
          <span className="footer-text15">{props.text7}</span>
        </div>
        <div className="footer-container2">
          <span className="footer-text16">{props.text8}</span>
          <span className="footer-text17">{props.text9}</span>
          <span className="footer-text18">{props.text10}</span>
          <span className="footer-text19">{props.text11}</span>
          <span className="footer-text20">{props.text12}</span>
          <span className="footer-text21">{props.text13}</span>
        </div>
        <div className="footer-container3">
          <span className="footer-text22">{props.text14}</span>
          <span className="footer-text23">{props.text15}</span>
          <span className="footer-text24">{props.text16}</span>
          <span className="footer-text25">{props.text17}</span>
          <span className="footer-text26">{props.text18}</span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  heading: 'NEXIN',
  text: 'nexinltd@gmail.com',
  text1: 'Categories',
  text2: 'Collections',
  text3: 'Desks',
  text4: 'Furniture',
  text5: 'Lamps',
  text6: 'Plants',
  text7: 'Decoration',
  text8: 'Company',
  text9: 'Shop',
  text10: 'Lookbook',
  text11: 'Specials',
  text12: 'About',
  text13: 'Blog',
  text14: 'Resources',
  text15: 'Contact us',
  text16: 'Order',
  text17: 'Track your order',
  text18: 'Shipping & Delivery',
}

Footer.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  text17: PropTypes.string,
  text18: PropTypes.string,
}

export default Footer
