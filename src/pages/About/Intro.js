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
            we believe <span class="coral"> ideas </span>
          </Text>
          <Text color="#B1C3D6">
            can come from <span class="coral">anywhere.</span>
          </Text>
          <Paragraph className="intro-p-text">
            We’re a full-service agency and our secret sauce is that we’ve
            always been that way. We weren’t a creative shop that decided to
            break into media or an experiential upstart that sprouted a strategy
            arm. We built our agency so that the best brains from every
            discipline could collaborate to lend their own brand of problem
            solving to the brief. Because the best ideas aren’t born from one
            department or another, but the magic in between.
          </Paragraph>
        </LargeTextWrap>
      </Group>
    </Wrapper>
  );
};

export default Intro;
