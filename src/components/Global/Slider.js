// @flow

import React, { useState, type Node } from "react";
import { Image, Group } from "../../components";
import styled from "styled-components";
import { TweenMax } from "gsap";
import ArrowRight from "../../static/arrow-right.png";
import ArrowLeft from "../../static/arrow-left.png";

type TSliderProps = {
  slideId: string,
  slides: Array<Node>,
};

const SlideWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: inline-flex;
`;
const Slide = styled.div`
  height: 100%;
  max-height: calc(100vh - calc(100vh - 100%));
  width: ${(props) => props.width || "100vw"};
  position: relative;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 100vw;
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
const Beginning = styled.div`
  color: #b1c3d6;
  font-weight: 600;
  font-family: "interstate-mono";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
`;
const slideRight = (count, slidesLegnth, id) => {
  TweenMax.set(".arrow", { pointerEvents: "none" });
  TweenMax.set(".arrow", { pointerEvents: "all", delay: 0.5 });
  if (window.innerWidth < 1025) {
    TweenMax.to(id, 0.5, { x: "-=100vw" });
  } else {
    if (count === 0) {
      TweenMax.to(id, 0.5, { x: "-=95vw" });
    } else {
      TweenMax.to(id, 0.5, { x: "-=100vw" });
    }
  }

  if (count + 2 >= slidesLegnth) {
    TweenMax.to(id + "-arrow-right", 0.5, {
      autoAlpha: 0,
      pointerEvents: "none",
    });
    TweenMax.to(id + "-go-back", 0.5, {
      autoAlpha: 1,
    });
  }
  if (count === 0) {
    TweenMax.to(id + "-arrow-left", 0.5, {
      autoAlpha: 1,
      pointerEvents: "all",
    });
    TweenMax.to("#breadcrumbs", 0.5, {
      autoAlpha: 0,
      pointerEvents: "all",
    });
  }
};
const slideLeft = (count, slidesLegnth, id, beginning) => {
  TweenMax.set(".arrow", { pointerEvents: "none" });
  TweenMax.set(".arrow", { pointerEvents: "all", delay: 0.5 });

  if (window.innerWidth < 1025) {
    TweenMax.to(id, 0.5, { x: "+=100vw" });
  } else {
    if (count - 1 <= 0) {
      TweenMax.to(id, 0.5, { x: "+=95vw" });
    } else {
      TweenMax.to(id, 0.5, { x: "+=100vw" });
    }
  }
  if (count + 1 === slidesLegnth) {
    TweenMax.to(id + "-arrow-right", 0.5, {
      autoAlpha: 1,
      pointerEvents: "all",
    });
  }
  if (count - 1 <= 0) {
    TweenMax.to(id + "-arrow-left", 0.5, {
      autoAlpha: 0,
      pointerEvents: "none",
    });
    TweenMax.to("#breadcrumbs", 0.5, {
      autoAlpha: 1,
      pointerEvents: "all",
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
const onKeyDown = (e, count, slideId, slides, setCount) => {
  switch(e.keyCode){
    case 37: // left arrow
      if(count > 0) {
        slideLeft(count, slides.length, `#${slideId}`);
        setCount(count - 1);
        TweenMax.to(".cursor__ball", 0.3, {
          scale: 4,
        });
        TweenMax.to(".cursor__ball", 0.3, {
          scale: 1,
          delay: 0.35,
        });
      }
      break;
    case 39: // right arrow
      slideRight(count, slides.length, `#${slideId}`);
      setCount(count + 1);
      TweenMax.to(".cursor__ball", 0.3, {
        scale: 4,
      });
      TweenMax.to(".cursor__ball", 0.3, {
        scale: 1,
        delay: 0.35,
      });
      break;
    default:
        // do nothing
  }
}
const Work = (props: TSliderProps) => {
  const { slideId, slides } = props;

  const [count, setCount] = useState(0);

  return (
    <div onKeyDown={(e) => onKeyDown(e, count, slideId, slides, setCount)} tabIndex="0">
      <SlideWrap id={slideId}>
        {slides.map((slide, i) => {
          if (i === 0) {
            return (
              <Slide width="95vw" key={i}>
                {slide}
              </Slide>
            );
          } else {
            return <Slide key={i}>{slide}</Slide>;
          }
        })}
      </SlideWrap>
      <ArrowRightWrap
        className="hoverable arrow"
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
        <Image src={ArrowRight} width="20px" height="auto" alt="arrow right" />
      </ArrowRightWrap>
      <ArrowLeftWrap
        className="hoverable arrow"
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
        <Image src={ArrowLeft} width="20px" height="auto" alt="arrow left" />
      </ArrowLeftWrap>
      <Beginning
        className="hoverable "
        id={`${slideId}-go-back`}
        onClick={() => {
          TweenMax.to(`#${slideId}`, 0.5, { x: "0vw" });
          TweenMax.to(`#${slideId}-arrow-left`, 0.5, {
            autoAlpha: 0,
            pointerEvents: "none",
          });
          TweenMax.to(`#${slideId}-arrow-right`, 0.5, {
            autoAlpha: 1,
            pointerEvents: "all",
          });
          TweenMax.to(`#${slideId}-go-back`, 0.5, {
            autoAlpha: 0,
          });
          TweenMax.to("#breadcrumbs", 0.5, {
            autoAlpha: 1,
            pointerEvents: "all",
          });
          setCount(0);
          TweenMax.to(".cursor__ball", 0.3, {
            scale: 4,
          });
          TweenMax.to(".cursor__ball", 0.3, {
            scale: 1,
            delay: 0.35,
          });
        }}
      >
        <Group flexDirection="row">
          <Image src={ArrowLeft} width="20px" alt="arrow left" />
          <Image src={ArrowLeft} width="20px" alt="arrow left" />
        </Group>
      </Beginning>
    </div>
  );
};

export default Work;
