import React from "react";
import styled from "styled-components";

import { Testimonials, About, Contact, Services, Hero } from "../sections";

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
