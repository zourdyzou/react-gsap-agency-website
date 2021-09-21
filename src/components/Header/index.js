import { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  Button,
  HamburgerButton,
  MobileMenuContainer,
} from "./styles/Header";

const Header = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick((click) => !click);
    scrollUp(id, e);
  };

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",

        borderRadius: "0 0 50px 50px",

        border: "2px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <HeaderContainer ref={ref}>
      <LogoContainer>
        <img src={logo} alt="logo RustyMud" />
        <h3>RustyMud</h3>
      </LogoContainer>

      <NavigationContainer>
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About Me
        </a>
        <a href="#services" onClick={(e) => scrollUp("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          <Button type="button">Contact Me</Button>
        </a>
      </NavigationContainer>

      <HamburgerButton
        onClick={() => setClick((click) => !click)}
        clicked={click}
      >
        <span />
      </HamburgerButton>

      {/* when reach mobile viewport */}
      <MobileMenuContainer clicked={click}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>
        <a href="#aout" onClick={(e) => handleClick("about", e)}>
          About Me
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <Button type="button">Contact Me</Button>
        </a>
      </MobileMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
