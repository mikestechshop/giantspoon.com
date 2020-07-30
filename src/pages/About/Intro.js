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
  font-size: 7rem;
  line-height: 7.5rem;
  top: 50%;
  left: -1rem;
  transform: translateY(-70%);
  position: absolute;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 4rem;
    line-height: 4.5rem;
    br {
      display: none;
    }
  }
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
  width: 500px;
  position: absolute;
  left: 8rem;
  bottom: 10vh;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 0.9rem;
    width: 70%;
    left: 2rem;
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
      <div ref={ref}></div>
      <LargeTextWrap className="intro-large-text">
        <Text color="#B1C3D6">We believe ideas</Text>
        <Text color="#B1C3D6">can come from everywhere</Text>
      </LargeTextWrap>
      <Paragraph className="intro-p-text">
        We’re a full-service agency and our secret sauce is that we’ve always
        been that way. We weren’t a creative agency that decided to break into
        media or an experiential upstart that sprouted a strategy arm. Every
        service had a seat at the table from the beginning. We built our agency
        so that the best brains from every discipline could collaborate and lend
        their own brand of problem solving to the brief. We find that’s where
        the best ideas come from -- not from one department or another, but the
        magic in between. Hover at right for what we do or click to find out
        more about how we do it.
      </Paragraph>
    </Wrapper>
  );
};

export default Intro;
