// @flow

import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Services from "./Services";
import styled from "styled-components";
import Intro from "./Intro";
import Partners from "./Partners";
import Awards from "./Awards";
import { TweenMax } from "gsap";
import { Footer, Breadcrumbs, SectionTab } from "../../components";
import { useContentful } from "react-contentful";
import { useLocation } from "react-router-dom";
import Circles from "../../static/circles.svg";

type TAboutProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};

  &.circles {
    background-image: url(${Circles});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
const ScrollEffect = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: ${(props) => props.top || "initial"};
  bottom: ${(props) => props.bottom || "initial"};
  height: 0%;
`;

const ScrollEffectDiv = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${(props) => props.color || "auto"};
`;

const onHover = (color) => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 1,
    scale: 4,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: color,
  });
  TweenMax.set(".hoverable", { cursor: "none" });
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
};

const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const Home = (props: TAboutProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState(0);
  const { hash } = useLocation();

  const partners = useContentful({
    contentType: "partners",
  });
  const awards = useContentful({
    contentType: "awards",
  });

  if (
    partners.loading ||
    !partners.fetched ||
    awards.loading ||
    !awards.fetched
  ) {
    return null;
  }

  if (partners.error) {
    console.error(partners.error);
    return null;
  }
  if (awards.error) {
    console.error(awards.error);
    return null;
  }

  const partnersItems = partners.data.items[0];
  const awardsItems = awards.data.items[0];
  return (
    <>
      <SectionTab text="About" />
      <Breadcrumbs hideFirst={true} count={4} active={breadcrumbs} />
      <ReactFullpage
        //fullpage options
        licenseKey={"F4C00EBE-7C6841F8-8F3BF1C8-FB079CA8"}
        scrollingSpeed={800} /* Options here */
        onLeave={function (origin, destination, direction) {
          setBreadcrumbs(destination.index);
          if (destination.isLast || destination.isFirst) {
            TweenMax.set("#breadcrumbs", { display: "none" });
          } else {
            TweenMax.set("#breadcrumbs", { display: "block" });
          }
          if (origin.index === 0) {
            scrollAni("#scroll0Down");
          }
          if (origin.index === 1) {
            if (direction === "down") {
              scrollAni("#scroll1Down");
            } else if (direction === "up") {
              scrollAni("#scroll1Up");
            }
          }
          if (origin.index === 2) {
            if (direction === "down") {
              scrollAni("#scroll2Down");
            } else if (direction === "up") {
              scrollAni("#scroll2Up");
            }
          }
          if (origin.index === 3) {
            if (direction === "up") {
              scrollAni("#scroll3Up");
            }
          }
        }}
        render={({ state, fullpageApi }) => {
          if (state.initialized && hash === "#services") {
            fullpageApi.moveTo(2);
          } else if (state.initialized && hash === "#awards") {
            fullpageApi.moveTo(4);
          }
          return (
            <ReactFullpage.Wrapper>
              <SectionWrap
                className="section hoverable circles"
                onMouseEnter={() => onHover("#FFFCF2")}
                onMouseLeave={() => onMouseExit()}
                bgc="#0C2340"
              >
                <Intro />
                <ScrollEffect bottom="0%" id="scroll0Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap id="services" className="section" bgc="#E5E5E5">
                <Services />
                <ScrollEffect bottom="0%" id="scroll1Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
                <ScrollEffect top="0%" id="scroll1Up">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section">
                <Partners partners={partnersItems} />
                <ScrollEffect bottom="0%" id="scroll2Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
                <ScrollEffect top="0%" id="scroll2Up">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section" bgc="#0C2340">
                <Awards awards={awardsItems} />
                <ScrollEffect top="0%" id="scroll3Up">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>

              <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
                <Footer handleLinkChange={props.handleLinkChange} />
              </SectionWrap>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Home;
