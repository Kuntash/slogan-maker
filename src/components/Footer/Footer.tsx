import React from "react";
import DukaanLogo from "../icons/DukaanLogo";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer__container">
      <div>
        <div className="dukaan__icon">
          <DukaanLogo width={156} height={44} />
        </div>
        <div className="footer__links">
          <div className="footer__links--column">
            <div>Contact</div>
            <div>FAQ's</div>
          </div>
          <div className="footer__links--column">
            <div>Tutorials</div>
            <div>Blog</div>
          </div>
          <div className="footer__links--column">
            <div>Privacy</div>
            <div>Banned Items</div>
          </div>
          <div className="footer__links--column">
            <div>About</div>
            <div>Jobs</div>
          </div>
          <div className="footer__links--column">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Linkedin</div>
          </div>
        </div>
      </div>
      <div>
        <div>Dukaan 2020, All rights reserved.</div>
        <div>
          <p>Made in</p>
          <img src="images/india-flag.png" alt="India flag" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
