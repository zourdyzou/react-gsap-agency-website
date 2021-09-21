import React from "react";

import { Container, Topic, Circle, SubText, Title } from "./styles/TextBlock";

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <Container id="leftBlock">
      <Topic>
        <Circle />
        <span>{topic}</span>
      </Topic>
      <Title>{title}</Title>
      <SubText>{subText}</SubText>
      {children}
    </Container>
  );
};

export default TextBlock;
