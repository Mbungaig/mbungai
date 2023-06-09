import React from "react";
import "./header.css";
import CTA from "./CTA";
import Changer from "../../assets/changer.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="right">
          <div className="Me">
            <img src={Changer} alt="mbungai" />
          </div>
        </div>
        <div className="left">
          <h5> HELLO I am</h5>
          <h1> MBUNGAI GEORGE BERI.</h1>
          <h5 className="text-light">a junior Embedded system Engineer</h5>
          <CTA />
          <HeaderSocials />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
