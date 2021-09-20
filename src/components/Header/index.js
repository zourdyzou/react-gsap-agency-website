import { useState } from "react";
import logo from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  Button,
  HamburgerButton,
  MobileMenuContainer,
} from "./styles/Header";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((click) => !click);

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="logo RustyMud" />
        <h3>RustyMud</h3>
      </LogoContainer>

      <NavigationContainer>
        <a href="#home">Home</a>
        <a href="#aout">About Me</a>
        <a href="#services">Services</a>
        <a href="#contact">
          <Button type="button">Contact Me</Button>
        </a>
      </NavigationContainer>

      <HamburgerButton onClick={handleClick} clicked={click}>
        <span />
      </HamburgerButton>

      {/* when reach mobile viewport */}
      <MobileMenuContainer clicked={click}>
        <a href="#home" onClick={() => handleClick()}>
          Home
        </a>
        <a href="#aout" onClick={() => handleClick()}>
          About Me
        </a>
        <a href="#services" onClick={() => handleClick()}>
          Services
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button type="button">Contact Me</Button>
        </a>
      </MobileMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
