// @flow

import React from "react";
import { Wrapper } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax, TextPlugin } from "gsap";
import "gsap/TextPlugin";

const LargeTextWrap = styled.h1`
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 10rem;
  line-height: 11rem;
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
  font-family: Interstate;
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

const SectionLabel = styled.div`
  font-weight: bold;
  color: #fffcf2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -5px;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  display: none;
`;

const Intro = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  if (entry) {
    document.querySelector("#section-tab").innerHTML = "Welcome";
  }
  if (inView) {
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
    TweenMax.fromTo(
      ".intro-label-text",
      { x: "100%", y: "-50%", display: "initial" },
      { x: "0%", y: "-50%", delay: 0.9 }
    );
  }
  return (
    <Wrapper>
      <div ref={ref}></div>
      <LargeTextWrap className="intro-large-text">
        <Text color="#0C2340">hi, we are</Text>
        <Text color="#FFFCF2">giant spoon</Text>
      </LargeTextWrap>
      <Paragraph className="intro-p-text">
        We are a full-service agency that combines creative and media innovation
        to unlock a brand’s potential.
      </Paragraph>
    </Wrapper>
  );
};

export default Intro;
