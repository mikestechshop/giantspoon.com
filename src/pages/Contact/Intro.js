// @flow

import React, { useState } from "react";
import { Wrapper, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Contact from "../../static/contact.png";
import "gsap/TextPlugin";
import ContactVideo from "../../static/videos/contact-video.mp4";

const TextBox = styled.div`
  position: absolute;
  bottom: 10%;
  right: 15%;

  @media (max-width: 1024px) {
    right: initial;
    bottom: initial;
    left: 2rem;
    top: 55vh;
  }
`;

const LargeTextWrap = styled.h1`
  font-style: normal;
  line-height: 110%;
  font-size: 6rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;
const Text = styled.div`
  color: ${(props) => props.color || "#FFFCF2"};
`;

const Paragraph = styled.p`
  font-family: interstate;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  color: #fffcf2;
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

      <Vid id="vid" autoPlay muted loop>
        <source id="mp4" src={ContactVideo} type="video/mp4" />
      </Vid>

      <TextBox>
        <LargeTextWrap>
          <Text>We’d Love to</Text>
          <Text>Hear from you</Text>
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
