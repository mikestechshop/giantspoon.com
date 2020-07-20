// @flow

import React from "react";
import { Wrapper, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ServicesBg from "../../static/services-bg.png";
import { TweenMax } from "gsap";

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
`;
const ServicesTitle = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const ServicesDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
`;
const ServicesList = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  line-height: 16vh;
  font-size: 12vh;
  font-weight: 300;
  color: white;
`;
const ServicesSpan = styled.span`
  z-index: 1001;
`;

const onHover = (color, title, desc) => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 1,
    scale: 4,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: color,
  });
  TweenMax.set(".hoverable", { cursor: "none" });
  // $FlowFixMe
  document.querySelector("#service-title").innerHTML = title;
  // $FlowFixMe
  document.querySelector("#service-desc").innerHTML = desc;
};
const onMouseExit = () => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 0,
    scale: 1,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: "#f7f8fa",
  });
  TweenMax.set(".hoverable", { cursor: "default" });
  // $FlowFixMe
  document.querySelector("#service-title").innerHTML = "Title";
  // $FlowFixMe
  document.querySelector("#service-desc").innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo, bibendum id interdum lobortis praesent lectus. Ullamcorper non pretium tincidunt felis amet. A eget tellus et, amet, accumsan.";
};

const Services = () => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <div ref={ref}></div>
      <Group height="100vh">
        <FullImage src={ServicesBg} alt="services background" />
        <TextBox>
          <ServicesTitle id="service-title"> Title </ServicesTitle>
          <ServicesDesc id="service-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo,
            bibendum id interdum lobortis praesent lectus. Ullamcorper non
            pretium tincidunt felis amet. A eget tellus et, amet, accumsan.
          </ServicesDesc>
          <ServicesDesc>See More > </ServicesDesc>
        </TextBox>
        <ServicesList className="hoverable">
          <ServicesSpan
            onMouseEnter={() =>
              onHover(
                "#B1C3D6",
                "Services",
                "brand strategy, brand positioning, brand architecture, communications planning, audience insights and personas, customer journey mapping, creative strategy and brief development, content strategy, and of course, research"
              )
            }
            onMouseLeave={() => onMouseExit()}
          >
            Strategy
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#FE9B96")}
            onMouseLeave={() => onMouseExit()}
          >
            Creative
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#0033A0")}
            onMouseLeave={() => onMouseExit()}
          >
            Media
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#B1C3D6")}
            onMouseLeave={() => onMouseExit()}
          >
            Production
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#FE9B96")}
            onMouseLeave={() => onMouseExit()}
          >
            Social
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#0033A0")}
            onMouseLeave={() => onMouseExit()}
          >
            {" "}
            Experiential{" "}
          </ServicesSpan>
          <br />
        </ServicesList>
      </Group>
    </Wrapper>
  );
};

export default Services;
