// @flow

import React, { useState } from "react";
import { Wrapper, Group } from "../../components";
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
  transform: translateY(-90%);
  position: absolute;
  margin: 0;
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
  bottom: 15vh;
  margin: 0;
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
          <Text color="#B1C3D6">the post-advertising</Text>
          <Text color="#B1C3D6">has arrived</Text>
        </LargeTextWrap>
        <Paragraph className="intro-p-text">
          But advertising is not dead. It’s become something better. The new
          possibilities to connect brands with people are endless. <br />
          <br /> We are a full-service agency built for this new era by
          combining creativity and media innovation to unlock a brand’s full
          potential.
        </Paragraph>
      </Group>
    </Wrapper>
  );
};

export default Intro;
