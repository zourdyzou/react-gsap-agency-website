import React from "react";

import {
  AboutContainer,
  Waves,
  Hand,
  MainContent,
  CurvedLine,
  Title,
  ContentContainer,
  Rocket,
  Human,
  Text,
  Circle,
  AboutText,
  SectionTitle,
} from "./styles/About";

import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";

const About = () => {
  return (
    <AboutContainer>
      <Waves src={wave} alt="surfing waves svg" />

      <Hand>
        <img src={hand} alt="hand pic" />
      </Hand>

      <MainContent>
        <SectionTitle>
          <Title>About Us</Title>
          <CurvedLine />
        </SectionTitle>

        <ContentContainer>
          <Rocket>
            <img src={rocket} alt="rocket animation" width="400" height="400" />
          </Rocket>

          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
              We help our customers to tell about themselves, to grow and stand
              out in an increasingly competitive digital world, through creative
              projects that are able to attract and involve, creating strategic
              value.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </ContentContainer>
      </MainContent>
    </AboutContainer>
  );
};

export default About;
