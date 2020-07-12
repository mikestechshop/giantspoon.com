// @flow

import React from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import ServicesBg from "../../static/services-bg.png";

const SlideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

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

const Services = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  if (inView) {
    // $FlowFixMe
    document.querySelector("#section-tab").innerHTML = "Services";
  }
  return (
    <Wrapper>
      <div ref={ref}></div>
      <Group height="100vh">
        <SlideImg src={ServicesBg} />
        <TextBox>
          <ServicesTitle> Title </ServicesTitle>
          <ServicesDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo,
            bibendum id interdum lobortis praesent lectus. Ullamcorper non
            pretium tincidunt felis amet. A eget tellus et, amet, accumsan.
          </ServicesDesc>
          <ServicesDesc>See More > </ServicesDesc>
        </TextBox>
        <ServicesList>
          Strategy <br />
          Creative <br />
          Media <br />
          Production <br />
          Social <br />
          Experiential <br />
        </ServicesList>
      </Group>
    </Wrapper>
  );
};

export default Services;
