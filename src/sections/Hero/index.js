import React from "react";

import {
  HomeContainer,
  BlobContainer,
  PinkBlob,
  WhiteBlob,
  PurpleBlob,
  MainContent,
  Lb,
  Topic,
  Circle,
  Title,
  SubText,
  CTA,
  MobileSvg,
} from "./styles/Hero";

import pinkBlob from "../../assets/blobPink.png";
import purpleBlob from "../../assets/blob purple.png";
import whiteBlob from "../../assets/blob white.png";
import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/mobile.svg";

const HeroSection = () => {
  return (
    <HomeContainer id="home">
      <BlobContainer>
        <PinkBlob>
          <img src={pinkBlob} alt="" width="400" height="400" />{" "}
        </PinkBlob>
        <WhiteBlob>
          <img src={whiteBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        <PurpleBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </PurpleBlob>
      </BlobContainer>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>We Build Web</span>
          </Topic>
          <Title>Transforming your digital presence</Title>
          <SubText>
            we help fast growing companies build award winning websites
          </SubText>
          <CTA>
            Get in touch &nbsp;
            <img src={arrow} alt="cta" width="100" height="100" />
          </CTA>
        </Lb>

        <MobileSvg
          src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeContainer>
  );
};

export default HeroSection;
