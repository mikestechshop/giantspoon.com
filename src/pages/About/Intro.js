// @flow

import React, { useState } from "react";
import { Wrapper } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import "gsap/TextPlugin";

const LargeTextWrap = styled.h1`
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 8rem;
  line-height: 9rem;
  top: 50%;
  left: -1rem;
  transform: translateY(-70%);
  position: absolute;
  margin: 0;
  display: none;
`;
const Text = styled.div`
  color: ${(props) => props.color || "white"};
`;

const Paragraph = styled.p`
  font-family: interstate;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  width: 400px;
  position: absolute;
  left: 8rem;
  top: 75vh;
  margin: 0;
  display: none;
`;

const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [animationRun, setAnimationRun] = useState(false);
  if (inView && !animationRun) {
    TweenMax.fromTo(
      ".intro-large-text",
      { opacity: 0, y: "+=20", display: "initial" },
      { opacity: 1, y: "-=20", delay: 0.5 }
    );
    TweenMax.fromTo(
      ".intro-p-text",
      { opacity: 0, y: "+=20", display: "initial" },
      { opacity: 1, y: "-=20", delay: 0.7 }
    );
    setAnimationRun(true);
  }
  return (
    <Wrapper>
      <div ref={ref}></div>
      <LargeTextWrap className="intro-large-text">
        <Text color="#B1C3D6">since you asked</Text>
        <Text color="#B1C3D6">here's a little</Text>
        <Text color="#B1C3D6">more about us</Text>
      </LargeTextWrap>
      <Paragraph className="intro-p-text">
        We are a full-service agency that combines creative and media innovation
        to unlock a brand’s potential.
      </Paragraph>
    </Wrapper>
  );
};

export default Intro;
