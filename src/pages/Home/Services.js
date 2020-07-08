// @flow

import React from "react";
import { Wrapper, Group, PageTitle } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";

import { Link } from "react-router-dom";

const LargeTextWrap = styled.h1`
  font-family: Interstate;
  font-weight: 300;
  font-size: 8rem;
  top: 4vh;
  left: -1rem;
  position: absolute;
  margin: 0;
  display: none;
  color: #0c2340;
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
  width: 350px;
  box-sizing: border-box;
  position: absolute;
  right: 14rem;
  bottom: 0;
  margin: 0;
  background-color: #fe9b96;
  padding: 1.5rem 1.5rem 6rem 1.5rem;
  color: #0c2340;
  display: none;
`;

const SectionLabel = styled.div`
  font-weight: bold;
  color: #fe9b96;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -5px;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  display: none;
`;

const EmbedContainer = styled.div`
  display: none;
`;

const Work = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  if (inView) {
    TweenMax.fromTo(
      ".work-large-text",
      { opacity: 0, y: "+=20", display: "initial" },
      { opacity: 1, y: "-=20", delay: 0.5 }
    );
    TweenMax.fromTo(
      ".work-p-text",
      { opacity: 0, y: "+=20", display: "initial" },
      { opacity: 1, y: "-=20", delay: 0.7 }
    );
    TweenMax.fromTo(
      ".work-label-text",
      { x: "100%", y: "-50%", display: "initial" },
      { x: "0%", y: "-50%", delay: 0.9 }
    );
    TweenMax.fromTo(
      ".embed-container",
      { opacity: 0, y: "+=20", display: "initial" },
      { opacity: 1, y: "-=20", delay: 1.1 }
    );
  }
  return (
    <Wrapper>
      <div ref={ref}></div>

      <LargeTextWrap className="work-large-text">LOREM IPSUM</LargeTextWrap>
      <Paragraph className="work-p-text">
        Our work is the best way to show what we can do for our clients, but we
        get more excited about the things we haven’t done than the things we
        have.
      </Paragraph>
      <SectionLabel className="work-label-text"> PORTFOLIO</SectionLabel>
    </Wrapper>
  );
};

export default Work;
