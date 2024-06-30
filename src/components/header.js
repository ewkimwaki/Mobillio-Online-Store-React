import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './header.css';


const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // ... (Potential functions for handling search submissions, etc.)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header data-role="Header" className="header-header max-width-container">
      <div className="header-navbar">

        {/* Desktop Navbar*/}
        <div className="header-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="header-image"
          />
         {/* Search Input with Label */}
          <label htmlFor="searchInput" className="visually-hidden"></label>
          <input
            id="searchInput"
            type="text"
            placeholder={props.textinputPlaceholder}
            className="header-textinput input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

         {/* Middle Section (Navigation Links) */}
         <nav className="header-middle"> {/* Added nav tag for semantics */}
                    <div className="header-left">
                        <a href="#" className="navbar-link">{props.text}</a> {/* Use <a> for links */}
                        <a href="#" className="navbar-link">{props.text1}</a>
                        <a href="#" className="navbar-link">{props.text2}</a>
                    </div>
                    <span className="navbar-logo-title">{props.logoCenter}</span>
                    <div className="header-right">
                        <a href="#" className="navbar-link">{props.text3}</a>
                        <a href="#" className="navbar-link">{props.text4}</a>
                        <a href="#" className="navbar-link">{props.text5}</a>
                    </div>
                </nav>


        {/* Icon Links */}
        <div className="header-icons">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="header-image1"
          />
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="header-image2"
          />
           <Link to="/auth" className="header-image3" aria-label={props.imageAlt3}>
    <img src={props.imageSrc3} alt={props.imageAlt3} />
  </Link> 
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="header-mobile"> 
                <button className="header-burger-menu" onClick={toggleMobileMenu}>
                    <svg viewBox="0 0 1024 1024" className="header-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                </button>

        {isMobileMenuOpen && (
          <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-nav">
                            <div className="header-container1">
                                <button
                                    data-role="CloseMobileMenu"
                                    className="header-close-mobile-menu"
                                    onClick={toggleMobileMenu} // Close on button click
                                >
                                    <svg viewBox="0 0 1024 1024" className="header-icon02">
                                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                    </svg>
                                </button>
                            </div>

                            <nav className="header-middle1">
                                {/* ... (Mobile navigation links as image icons) ... */}
                                <Link to="/auth" className="header-mobile-link" aria-label={props.imageAlt3}>
                                   <img src={props.imageSrc3} alt={props.imageAlt3} />
                                   <span>{props.text12}</span> {/* Added a label for the login link */}
                                </Link>
                                 <Link to="/shop" className="header-mobile-link" aria-label={props.text6}>
                                    <img src={props.imageSrc1} alt={props.imageAlt1} />
                                    <span>{props.text6}</span>
                                </Link>
                                <Link to="/lookbook" className="header-mobile-link" aria-label={props.text7}>
                                    <img src={props.imageSrc2} alt={props.imageAlt2} />
                                    <span>{props.text7}</span>
                                </Link>
                                <Link to="/special" className="header-mobile-link" aria-label={props.text8}>
                                    <img src="/images/account-circle.svg" alt="Special" />
                                    <span>{props.text8}</span>
                                </Link>
                                <Link to="/about" className="header-mobile-link" aria-label={props.text9}>
                                    <img src="/images/info.svg" alt="About" />
                                    <span>{props.text9}</span>
                                </Link>
                                <Link to="/blog" className="header-mobile-link" aria-label={props.text10}>
                                    <img src="/images/article.svg" alt="Blog" />
                                    <span>{props.text10}</span>
                                </Link>
                                <Link to="/contact" className="header-mobile-link" aria-label={props.text11}>
                                    <img src="/images/mail.svg" alt="Contact" />
                                    <span>{props.text11}</span>
                                </Link>
                                
                            </nav>
                        </div>
                    </div>
                )}
            </div>
            {/* Auth Modal */}
            
        </header>
    );
};

Header.defaultProps = {
  imageSrc:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J00xOC4zMTkgMTQuNDMyNkMyMC43NjI4IDExLjI5NDEgMjAuNTQyIDYuNzUzNDQgMTcuNjU2OSAzLjg2ODI2QzE0LjUzMjcgMC43NDQwNjcgOS40NjczNCAwLjc0NDA2NyA2LjM0MzE1IDMuODY4MjZDMy4yMTg5NSA2Ljk5MjQ2IDMuMjE4OTUgMTIuMDU3OCA2LjM0MzE1IDE1LjE4MkM5LjIyODMzIDE4LjA2NzIgMTMuNzY5IDE4LjI4NzkgMTYuOTA3NSAxNS44NDQyQzE2LjkyMSAxNS44NTk0IDE2LjkzNTEgMTUuODc0NCAxNi45NDk3IDE1Ljg4OTFMMjEuMTkyNCAyMC4xMzE3QzIxLjU4MjkgMjAuNTIyMiAyMi4yMTYxIDIwLjUyMjIgMjIuNjA2NiAyMC4xMzE3QzIyLjk5NzEgMTkuNzQxMiAyMi45OTcxIDE5LjEwOCAyMi42MDY2IDE4LjcxNzVMMTguMzY0IDE0LjQ3NDlDMTguMzQ5MyAxNC40NjAyIDE4LjMzNDMgMTQuNDQ2MSAxOC4zMTkgMTQuNDMyNlpNMTYuMjQyNiA1LjI4MjQ4QzE4LjU4NTggNy42MjU2MiAxOC41ODU4IDExLjQyNDYgMTYuMjQyNiAxMy43Njc4QzEzLjg5OTUgMTYuMTEwOSAxMC4xMDA1IDE2LjExMDkgNy43NTczNiAxMy43Njc4QzUuNDE0MjEgMTEuNDI0NiA1LjQxNDIxIDcuNjI1NjIgNy43NTczNiA1LjI4MjQ4QzEwLjEwMDUgMi45MzkzMyAxMy44OTk1IDIuOTM5MzMgMTYuMjQyNiA1LjI4MjQ4WicgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg==',
  imageAlt: 'search3271286',
  textinputPlaceholder: 'search',
  logoCenter: 'NEXIN\n',
  imageSrc1:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjgyMiA3LjQzMUMyMS42MzUgNy4xNjEgMjEuMzI4IDcgMjEgN0g3LjMzM0w2LjE3OSA0LjIzQzUuODY3IDMuNDgyIDUuMTQzIDMgNC4zMzMgM0gyVjVINC4zMzNMOS4wNzcgMTYuMzg1QzkuMjMyIDE2Ljc1NyA5LjU5NiAxNyAxMCAxN0gxOEMxOC40MTcgMTcgMTguNzkgMTYuNzQxIDE4LjkzNyAxNi4zNTJMMjEuOTM3IDguMzUyQzIyLjA1MiA4LjA0NCAyMi4wMDkgNy43IDIxLjgyMiA3LjQzMVonIGZpbGw9JyMxNjE2MTYnLz4KPHBhdGggZD0nTTEwLjUgMjFDMTEuMzI4NCAyMSAxMiAyMC4zMjg0IDEyIDE5LjVDMTIgMTguNjcxNiAxMS4zMjg0IDE4IDEwLjUgMThDOS42NzE1NyAxOCA5IDE4LjY3MTYgOSAxOS41QzkgMjAuMzI4NCA5LjY3MTU3IDIxIDEwLjUgMjFaJyBmaWxsPScjMTYxNjE2Jy8+CjxwYXRoIGQ9J00xNy41IDIxQzE4LjMyODQgMjEgMTkgMjAuMzI4NCAxOSAxOS41QzE5IDE4LjY3MTYgMTguMzI4NCAxOCAxNy41IDE4QzE2LjY3MTYgMTggMTYgMTguNjcxNiAxNiAxOS41QzE2IDIwLjMyODQgMTYuNjcxNiAyMSAxNy41IDIxWicgZmlsbD0nIzE2MTYxNicvPgo8L3N2Zz4K',
  imageAlt1: 'iconsbxscart3271299',
  imageSrc2:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40ODYgMiAyIDYuNDg2IDIgMTJDMiAxNy41MTQgNi40ODYgMjIgMTIgMjJDMTcuNTE0IDIyIDIyIDE3LjUxNCAyMiAxMkMyMiA2LjQ4NiAxNy41MTQgMiAxMiAyWk0xNi4xODYgMTIuNzRMMTIgMTYuOTI2TDcuODE0IDEyLjc0QzYuNzI1IDExLjY1MiA2LjcyNSA5LjkyNyA3LjgxNCA4LjgzM0M4LjkwOCA3Ljc0NSAxMC42MzIgNy43NDUgMTEuNzIgOC44MzNMMTIgOS4xMTJMMTIuMjc5IDguODMzQzEzLjM2NyA3Ljc0NSAxNS4wOTIgNy43NDUgMTYuMTg1IDguODMzQzE3LjI3NCA5LjkyNyAxNy4yNzQgMTEuNjUxIDE2LjE4NiAxMi43NFonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg==',
  imageAlt2: 'iconsbxsheartcircle3271300',
  imageSrc3:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40OCAyMiAxMiAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTIgMlpNMTIgNUMxMy42NiA1IDE1IDYuMzQgMTUgOEMxNSA5LjY2IDEzLjY2IDExIDEyIDExQzEwLjM0IDExIDkgOS42NiA5IDhDOSA2LjM0IDEwLjM0IDUgMTIgNVpNMTIgMTkuMkM5LjUgMTkuMiA3LjI5IDE3LjkyIDYgMTUuOThDNi4wMyAxMy45OSAxMCAxMi45IDEyIDEyLjlDMTMuOTkgMTIuOSAxNy45NyAxMy45OSAxOCAxNS45OEMxNi43MSAxNy45MiAxNC41IDE5LjIgMTIgMTkuMlonIGZpbGw9JyMxNjE2MTYnLz4KPC9zdmc+Cg==',
  imageAlt3: 'AccountCircle3271301',
  text: 'SHOP',
  text1: 'LOOKBOOK',
  text2: 'SPECIAL',
  text3: 'ABOUT',
  text4: 'BLOG',
  text5: 'CONTACT',
  text6: 'SHOP',
  text7: 'LOOKBOOK',
  text8: 'SPECIAL',
  text9: 'ABOUT',
  text10: 'BLOG',
  text11: 'CONTACT',
  text12: 'LOG IN',
}

Header.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  logoCenter: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
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
}

export default Header
