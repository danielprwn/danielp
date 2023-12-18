import React, { useState, useEffect } from 'react';
import "./hero.css";
import Illustration_hero from "../../Assets/illustration-hero.svg";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`hero ${mounted ? 'slideIn' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <h2>A Simple Bookmark Manager</h2>
          <p>A clean and simple interface to organize your favourite<br />websites. Open a new
            browser tab and see your sites<br />load instantly. Try it for free.</p>
          <div className="buttons">
            <button className='btn blue_btn'>Get it on Chrome</button>
            <button className='btn firefox_btn'>Get it on Firefox</button>
          </div>
        </div>
        <div className="right">
          <div className="draw"></div>
          <img src={Illustration_hero} alt="Illustration_hero" className={mounted ? 'slideIn' : ''} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
