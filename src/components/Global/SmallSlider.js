// @flow

import React, { useState, type Node } from "react";
import { Image } from "../../components";
import styled from "styled-components";
import { TweenMax } from "gsap";
import ArrowRight from "../../static/arrow-right.png";
import ArrowLeft from "../../static/arrow-left.png";

type TSliderProps = {
  slideId: string,
  slides: Array<Node>,
  height?: string,
};

const SlideWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.height || "100%"};
  display: inline-flex;
`;
const Slide = styled.div`
  height: 100%;
  width: ${(props) => props.width || "30vw"};
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 75vw;
  }
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
const slideRight = (count, slidesLegnth, id) => {
  if (window.innerWidth < 1025) {
    TweenMax.to(id, 0.5, { x: "-=75vw" });
  } else {
    TweenMax.to(id, 0.5, { x: "-=30vw" });
  }

  console.log(count);
  if (count + 2 >= slidesLegnth) {
    TweenMax.to(id + "-arrow-right", 0.5, {
      autoAlpha: 0,
      pointerEvents: "none",
    });
  }
  if (count === 2) {
    TweenMax.to(id + "-arrow-left", 0.5, {
      autoAlpha: 1,
      pointerEvents: "all",
    });
  }
};
const slideLeft = (count, slidesLegnth, id) => {
  if (window.innerWidth < 1025) {
    TweenMax.to(id, 0.5, { x: "+=75vw" });
  } else {
    TweenMax.to(id, 0.5, { x: "+=30vw" });
  }

  if (count + 1 === slidesLegnth) {
    TweenMax.to(id + "-arrow-right", 0.5, {
      autoAlpha: 1,
      pointerEvents: "all",
    });
  }
  if (count - 3 <= 0) {
    TweenMax.to(id + "-arrow-left", 0.5, {
      autoAlpha: 0,
      pointerEvents: "none",
    });
  }
};

const onHover = () => {
  TweenMax.to(".cursor__ball", 0.1, {
    opacity: 1,
  });
  TweenMax.set(".hoverable", { cursor: "none" });
};
const onMouseExit = () => {
  TweenMax.to(".cursor__ball", 0.1, {
    opacity: 0,
  });
  TweenMax.set(".hoverable", { cursor: "default" });
};
const Work = (props: TSliderProps) => {
  const { slideId, slides, height } = props;

  const [count, setCount] = useState(2);

  return (
    <div>
      <SlideWrap id={slideId} height={height}>
        {slides.map((slide, i) => {
          if (i === 0 || i === slides.length - 1) {
            return <Slide key={i}>{slide}</Slide>;
          } else {
            return <Slide key={i}>{slide}</Slide>;
          }
        })}
      </SlideWrap>
      <ArrowRightWrap
        className="hoverable"
        id={`${slideId}-arrow-right`}
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onMouseExit()}
        onClick={() => {
          slideRight(count, slides.length, `#${slideId}`);
          setCount(count + 1);
          TweenMax.to(".cursor__ball", 0.3, {
            scale: 4,
          });
          TweenMax.to(".cursor__ball", 0.3, {
            scale: 1,
            delay: 0.35,
          });
        }}
      >
        <Image src={ArrowRight} width="14px" height="auto" alt="arrow right" />
      </ArrowRightWrap>
      <ArrowLeftWrap
        className="hoverable"
        id={`${slideId}-arrow-left`}
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onMouseExit()}
        onClick={() => {
          slideLeft(count, slides.length, `#${slideId}`);
          setCount(count - 1);
          TweenMax.to(".cursor__ball", 0.3, {
            scale: 4,
          });
          TweenMax.to(".cursor__ball", 0.3, {
            scale: 1,
            delay: 0.35,
          });
        }}
      >
        <Image src={ArrowLeft} width="14px" height="auto" alt="arrow left" />
      </ArrowLeftWrap>
    </div>
  );
};

export default Work;
