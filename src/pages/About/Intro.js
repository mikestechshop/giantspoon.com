// @flow

import React, { useState } from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "gsap/TextPlugin";

const LargeTextWrap = styled.h1`
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 9rem;
  line-height: 9rem;
  top: 50%;
  left: -1rem;
  transform: translateY(-50%);
  position: absolute;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 3rem;
    line-height: 3.5rem;
    left: 0;
  }
`;
const Text = styled.div`
  color: ${(props) => props.color || "#FFFCF2"};
  .coral {
    color: #fe9b96;
  }
`;

const Paragraph = styled.p`
  font-family: interstate;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  width: 30vw;
  margin: 0;
  margin-left: calc(10vw + 1rem);
  margin-top: 4rem;
  @media (max-width: 1024px) {
    font-size: 0.9rem;
    width: 70%;
    left: 2rem;
    margin-left: calc(10vw);
  }
`;
const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [animationRun, setAnimationRun] = useState(false);
  if (inView && !animationRun) {
    setAnimationRun(true);
  }
  return (
    <Wrapper>
      <Group height="100vh">
        <div ref={ref}></div>
        <LargeTextWrap className="intro-large-text">
          <Text color="#B1C3D6">
          we unlock the <span class="coral"> hidden potential </span>
          </Text>
          <Text color="#B1C3D6">
          buried within brands.
          </Text>
          <Paragraph className="intro-p-text">
          We launched Giant Spoon because we wanted to do it differently, create things never before imagined. From the start, we steeped everything we do in business strategy and made sure all disciplines had a seat at the table. Together, we tackle the problem that sits above the brief. Our collective imagination then takes us to places never before explored. We feel scrappy because we’ve hung onto our start-up culture, but we drive value for big brands, really big brands. But we’re not for everybody, we do our best work with brave clients who want to challenge conventions and bend reality. But we never build the same things twice. So when you work with us, expect the unexpected. Come on, challenge us with your most pressing business problem.
          </Paragraph>
        </LargeTextWrap>
      </Group>
    </Wrapper>
  );
};

export default Intro;
