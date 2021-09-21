import React from "react";

import { CardContainer, CardText, CardName, CardImage } from "./styles/Card";

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CardContainer>
      <CardImage src={Avatar} alt="avatar pic" />
      <CardText>{text}</CardText>
      <CardName>{name}</CardName>
    </CardContainer>
  );
};

export default Card;
