import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo RustyMud" />
        <h3>RustyMud</h3>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#aout">About Me</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;
