// @flow

import React, { useState } from "react";
import { Wrapper, Group, PageTitle, Image } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import Slide1 from "../../static/slide1.png";
import Slide2 from "../../static/slide2.png";
import Slide3 from "../../static/slide3.png";
import Slide4 from "../../static/slide4.png";
import ArrowRight from "../../static/arrow-right.png";
import ArrowLeft from "../../static/arrow-left.png";
import { Link } from "react-router-dom";

const SlideWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: inline-flex;
`;
const Slide = styled.div`
  height: 100%;
  width: ${(props) => props.width || "90vw"};
  position: relative;
  overflow: hidden;
`;
const SlideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const ArrowRightWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  cursor: pointer;
  z-index: 999;
`;
const ArrowLeftWrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  z-index: 999;
`;
const slideRight = (count, slidesLegnth) => {
  TweenMax.to("#slider-work", 0.5, { x: "-=90vw" });
  console.log(count);
  if (count + 2 >= slidesLegnth) {
    TweenMax.to("#arrow-right", 0.5, { autoAlpha: 0, pointerEvents: "none" });
  }
  if (count === 0) {
    TweenMax.to("#arrow-left", 0.5, { autoAlpha: 1, pointerEvents: "all" });
  }
};
const slideLeft = (count, slidesLegnth) => {
  TweenMax.to("#slider-work", 0.5, { x: "+=90vw" });
  if (count + 1 === slidesLegnth) {
    TweenMax.to("#arrow-right", 0.5, { autoAlpha: 1, pointerEvents: "all" });
  }
  if (count - 1 >= 0) {
    TweenMax.to("#arrow-left", 0.5, { autoAlpha: 0, pointerEvents: "none" });
  }
};
const Work = () => {
  const slides = [1, 2, 3, 4];
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const [count, setCount] = useState(0);
  if (inView) {
    document.querySelector("#section-tab").innerHTML = "CASE STUDIES";
  }
  return (
    <Wrapper>
      <div ref={ref}></div>
      <SlideWrap id="slider-work">
        <Slide width="95vw">
          <SlideImg src={Slide1} />
        </Slide>
        <Slide>
          <SlideImg src={Slide2} />
        </Slide>
        <Slide>
          <SlideImg src={Slide3} />
        </Slide>
        <Slide width="95vw">
          <SlideImg src={Slide4} />
        </Slide>
      </SlideWrap>
      <ArrowRightWrap
        id="arrow-right"
        onClick={() => {
          console.log("ehll");
          slideRight(count, slides.length);
          setCount(count + 1);
        }}
      >
        <Image src={ArrowRight} width="14px" height="auto" />
      </ArrowRightWrap>
      <ArrowLeftWrap
        id="arrow-left"
        onClick={() => {
          console.log("ehll");
          slideLeft(count, slides.length);
          setCount(count - 1);
        }}
      >
        <Image src={ArrowLeft} width="14px" height="auto" />
      </ArrowLeftWrap>
    </Wrapper>
  );
};

export default Work;
