// @flow

import React from "react";
import { Wrapper, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import Crane from "../../static/Crane.png";

type TServicesProps = {
  blurbs: {
    strategyBlurb: string,
    creativeBlurb: string,
    experientialBlurb: string,
    mediaBlurb: string,
    productionBlurb: string,
    socialBlurb: string,
  },
  handleLinkChange: Function,
};

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;

  @media (max-width: 1024px) {
    bottom: 10vh;
  }
`;
const ServicesTitle = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const ServicesDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  @media (max-width: 1024px) {
    width: 70vw;
    font-size: 0.8rem;
  }
`;
const ServicesList = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  line-height: 16vh;
  font-size: 12vh;
  font-weight: 300;
  color: white;
  @media (max-width: 1024px) {
    line-height: 10vh;
    font-size: 8vh;
    left: 10vw;
    top: 10vh;
  }
`;
const ServicesSpan = styled.span`
  z-index: 1001;
`;

const onHover = (color, title, desc) => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 1,
    scale: 4,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: color,
  });
  TweenMax.set(".hoverable", { cursor: "none" });
  // $FlowFixMe
  document.querySelector("#service-title").innerHTML = title;
  // $FlowFixMe
  document.querySelector("#service-desc").innerHTML = desc;

  // $FlowFixMe
  document.querySelector("#see-more").innerHTML = "";
};
const onMouseExit = () => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 0,
    scale: 1,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: "#f7f8fa",
  });
  TweenMax.set(".hoverable", { cursor: "default" });
  // $FlowFixMe
  document.querySelector("#see-more").innerHTML = "See More >";
  // $FlowFixMe
  document.querySelector("#service-title").innerHTML = "Title";
  // $FlowFixMe
  document.querySelector("#service-desc").innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo, bibendum id interdum lobortis praesent lectus. Ullamcorper non pretium tincidunt felis amet. A eget tellus et, amet, accumsan.";
};

const Services = (props: TServicesProps) => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const {
    strategyBlurb,
    creativeBlurb,
    experientialBlurb,
    mediaBlurb,
    productionBlurb,
    socialBlurb,
  } = props.blurbs;

  return (
    <Wrapper>
      <div ref={ref}></div>
      <Group height="100vh">
        <FullImage src={Crane} alt="services background" />
        <TextBox>
          <ServicesTitle id="service-title">
            {" "}
            Now, what can we do for you?{" "}
          </ServicesTitle>
          <ServicesDesc id="service-desc">
            We’re a full-service agency and our secret sauce is that we’ve
            always been that way. We weren’t a creative agency that decided to
            break into media or an experiential upstart that sprouted a strategy
            arm. Every service had a seat at the table from the beginning. We
            built our agency so that the best brains from every discipline could
            collaborate and lend their own brand of problem solving to the
            brief. We find that’s where the best ideas come from -- not from one
            department or another, but the magic in between. Hover at right for
            what we do or click to find out more about how we do it.
          </ServicesDesc>
          <ServicesDesc
            id="see-more"
            onClick={() => {
              props.handleLinkChange("/about#services");
            }}
          >
            See More >{" "}
          </ServicesDesc>
        </TextBox>
        <ServicesList className="hoverable">
          <ServicesSpan
            onMouseEnter={() => onHover("#B1C3D6", "Services", strategyBlurb)}
            onMouseLeave={() => onMouseExit()}
          >
            Strategy
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#FE9B96", "Creative", creativeBlurb)}
            onMouseLeave={() => onMouseExit()}
          >
            Creative
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#0033A0", "Media", mediaBlurb)}
            onMouseLeave={() => onMouseExit()}
          >
            Media
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() =>
              onHover("#B1C3D6", "Production", productionBlurb)
            }
            onMouseLeave={() => onMouseExit()}
          >
            Production
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#FE9B96", "Social", socialBlurb)}
            onMouseLeave={() => onMouseExit()}
          >
            Social
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() =>
              onHover("#0033A0", "Experiential", experientialBlurb)
            }
            onMouseLeave={() => onMouseExit()}
          >
            Experiential
          </ServicesSpan>
          <br />
        </ServicesList>
      </Group>
    </Wrapper>
  );
};

export default Services;
