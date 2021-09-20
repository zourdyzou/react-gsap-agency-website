import logo from "../../assets/logo.svg";

import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  Button,
} from "./styles/Header";

const Header = () => {
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
    </HeaderContainer>
  );
};

export default Header;
