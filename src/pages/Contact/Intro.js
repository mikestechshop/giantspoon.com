// @flow

import React, { useState } from "react";
import { Wrapper } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "gsap/TextPlugin";
import ContactVideo from "../../static/videos/contact-video.mp4";

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
  @media (max-width: 1024px) {
    left: 50px;
  }
`;

const LargeTextWrap = styled.h1`
  line-height: 110%;
  font-size: 6rem;
  margin-bottom: 2rem;
  font-weight: 300;
  width: 50vw;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    width: 70vw;
  }
`;
const Text = styled.div`
  color: ${(props) => props.color || "#FFFCF2"};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  @media (max-width: 1024px) {
    width: 70vw;
  }
`;
const Vid = styled.video`
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
`;

const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [animationRun, setAnimationRun] = useState(false);
  if (inView && !animationRun) {
    // $FlowFixMe
    // document.querySelector("#section-tab").innerHTML = "Contact";
    setAnimationRun(true);
  }
  return (
    <Wrapper>
      <div ref={ref}></div>

      <Vid id="vid" autoPlay muted loop data-keepplaying>
        <source id="mp4" src={ContactVideo} type="video/mp4" />
      </Vid>

      <TextBox>
        <LargeTextWrap>
          <Text>Drop Us a Line</Text>
        </LargeTextWrap>
        <Paragraph className="intro-p-text">
          In the market for a really cool agency or looking to send along your
          resume? Give us a call at 888-SPOON-50 or shoot us an email at
          hello@giantspoon.com and we’ll take it from there.
        </Paragraph>
      </TextBox>
    </Wrapper>
  );
};

export default Intro;
