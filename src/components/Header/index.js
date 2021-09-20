import { useState } from "react";
import logo from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  Button,
  HamburgerButton,
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
    </HeaderContainer>
  );
};

export default Header;
