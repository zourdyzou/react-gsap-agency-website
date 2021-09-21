import React from "react";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";

import { FOOTER, LeftText, RightText } from "./styles/Footer";

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2021 Built and Design by{" "}
        <a href="https://www.github.com/zourdycodes">@RustyZou</a>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="https://twitter.com/zourdythedev">
          <img src={Twitter} alt="Twitter" />
        </a>
        &nbsp;
        <a href="https://www.instagram.com/zourdyzh/">
          <img src={Instagram} alt="Instagram" />
        </a>
        &nbsp;
        <a href="mailto:sethjenkins101@gmail.com?subject=SUP DUDE!">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;
