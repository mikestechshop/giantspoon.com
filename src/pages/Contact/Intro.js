// @flow

import React, { useState } from "react";
import { Wrapper } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import Contact from "../../static/contact.png";
import "gsap/TextPlugin";

const TextBox = styled.div`
  position: absolute;
  bottom: 10%;
  right: 15%;
`;

const LargeTextWrap = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.5rem;
`;
const Text = styled.div`
  color: ${(props) => props.color || "white"};
`;

const SlideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Paragraph = styled.p`
  font-family: interstate;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  color: #fffcf2;
`;

const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [animationRun, setAnimationRun] = useState(false);
  if (inView && !animationRun) {
    document.querySelector("#section-tab").innerHTML = "Contact";
    setAnimationRun(true);
  }
  return (
    <Wrapper>
      <div ref={ref}></div>
      <SlideImg src={Contact} alt="contact-bg" />
      <TextBox>
        <LargeTextWrap>
          <Text color="#FE9B96">We’d Love to</Text>
          <Text color="#FE9B96">Hear from you</Text>
        </LargeTextWrap>
        <Paragraph className="intro-p-text">
          (888) SPOON-50 or email hello@giantspoon.com
          <br />
          <br />
          Send us fan mail. Maybe even snail mail. Stalk us,
          <br />
          praise us, work with us. Heck, all of the above.
        </Paragraph>
      </TextBox>
    </Wrapper>
  );
};

export default Intro;
