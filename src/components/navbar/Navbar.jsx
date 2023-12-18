import React, { useState, useEffect } from 'react';
import "./navbar.css";
import Logo from "../../Assets/logo-bookmark.svg";
import Hamburger from "../../Assets/icon-hamburger.svg";
import CloseHamburger from "../../Assets/icon-close.svg";
import MobileNav from './MobileNav';
import tab2design from "../../Assets/tab2design.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!popupVisible && !isMobile) {
        setPopupVisible(true);
      }
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, [popupVisible, isMobile]);

  const handleMouseEnter = () => {
    if (!popupVisible && !isMobile) {
      setPopupVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!popupVisible && !isMobile) {
      setPopupVisible(false);
    }
  };

  const handleClosePopup = () => {
    // Zamknij pop-up po kliknięciu na krzyżyk
    setPopupVisible(false);
  };

  return (
    <div className='navbar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="wrapper">
        <a href='' className="logo"><img src={Logo} alt="Logo" /></a>
        <ul className='list_container'>
          <li className='list'><a href="">Features</a></li>
          <li className='list'><a href="">Pricing</a></li>
          <li className='list'><a href="">Contact</a></li>
          <a className='list login_btn' href="">Login</a>
        </ul>
        {open && <MobileNav closePopup={handleClosePopup} isMobile={isMobile} />}
        {(open === true) ? document.querySelector("body").classList.add("hidden") : document.querySelector("body").classList.remove("hidden")}
        <div className="hamburger">
          <img className={(open === false) ? "hide" : ""} src={CloseHamburger} alt="Close Hamburger" onClick={() => setOpen(false)} />
          <img className={(open === true) ? "hide" : ""} src={Hamburger} alt="Hamburger" onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Pop-up */}
      {popupVisible && !isMobile && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '50%',
            padding: '20px',
            background: 'white',
            border: '3px solid red',
            borderRadius: '8px',
            zIndex: 9999,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Czerwony krzyżyk do zamknięcia pop-up */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              fontSize: '24px',
              color: 'red',
              fontWeight: 'bold',
            }}
            onClick={handleClosePopup}
          >
            &times;
          </div>
          <img src={tab2design} alt="popup" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
