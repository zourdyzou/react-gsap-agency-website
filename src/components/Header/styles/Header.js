import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);

  position: relative;
  z-index: 500;
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;

export const NavigationContainer = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

export const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: var(--white);
  font-weight: 600;
  transition: all 0.2s;

  cursor: pointer;

  &:hover::after {
    width: 100%;
    background: var(--purple);
  }
  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    transform: scale(0.9);
  }
`;
