import React, { lazy } from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { Section, Title, Carousel } from "./styles/Testimonials";

const Card = lazy(() => import("../../components/Card"));

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousel>
        <Slider {...settings}>
          <Card
            text="RustyMud has been essential part of our business. I would definetly
        recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-1"
          />

          <Card
            text="RustyMud has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-2"
          />

          <Card
            text="RustyMud has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-3"
          />

          <Card
            text="RustyMud has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-4"
          />
        </Slider>
      </Carousel>
    </Section>
  );
};

export default Testimonials;
