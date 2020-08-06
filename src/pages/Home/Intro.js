// @flow

import React, { useState } from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "gsap/TextPlugin";

type TIntroProps = {
  onHover: Function,
};

const LargeTextWrap = styled.h1`
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 9rem;
  line-height: 9.5rem;
  top: 50%;
  left: -1rem;
  transform: translateY(-50%);
  position: absolute;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 5rem;
    line-height: 5.5rem;
    left: 0;
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

const Intro = (props: TIntroProps) => {
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
          <Text
            color="#B1C3D6"
            onMouseEnter={() => props.onHover("#B1C3D6")}
            onMouseLeave={() => props.onHover("#FE9B96")}
          >
            the post-advertising
          </Text>
          <Text
            color="#B1C3D6"
            onMouseEnter={() => props.onHover("#B1C3D6")}
            onMouseLeave={() => props.onHover("#FE9B96")}
          >
            era has arrived.
          </Text>

          <Paragraph
            className="intro-p-text"
            onMouseEnter={() => props.onHover("#FFFCF2")}
            onMouseLeave={() => props.onHover("#FE9B96")}
          >
            And we built Giant Spoon for what comes next. We’re a full service
            agency that combines creativity and media innovation to unlock a
            brand’s full potential.
          </Paragraph>
        </LargeTextWrap>
      </Group>
    </Wrapper>
  );
};

export default Intro;
