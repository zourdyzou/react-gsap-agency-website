import React from "react";

import { RightBlock } from "./styles/SvgBlock";

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default;

  return (
    <RightBlock>
      <img src={SvgIcon} alt="right block content svg services" />
    </RightBlock>
  );
};

export default SvgBlock;
