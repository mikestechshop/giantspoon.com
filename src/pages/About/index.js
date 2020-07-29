// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Services from "./Services";
import styled from "styled-components";
import Intro from "./Intro";
import Partners from "./Partners";
import Awards from "./Awards";
import { TweenMax } from "gsap";
import { Footer } from "../../components";
import { useContentful } from "react-contentful";
import { useLocation } from "react-router-dom";

type TAboutProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};
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

const scrollAni = (id: string, html: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
  // $FlowFixMe
  document.querySelector("#section-tab").innerHTML = html;
};
const Home = (props: TAboutProps) => {
  const { hash } = useLocation();
  console.log(hash);
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

  console.log(partners);

  const partnersItems = partners.data.items[0];
  const awardsItems = awards.data.items[0];
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={800} /* Options here */
      onLeave={function (origin, destination, direction) {
        console.log(origin.index);
        console.log(direction);
        if (origin.index === 0) {
          scrollAni("#scroll0Down", "CASE STUDIES");
        }
        if (origin.index === 1) {
          if (direction === "down") {
            scrollAni("#scroll1Down", "services");
            console.log("run");
          } else if (direction === "up") {
            scrollAni("#scroll1Up", "welcome");
          }
        }
        if (origin.index === 2) {
          if (direction === "down") {
            scrollAni("#scroll2Down", "awards");
          } else if (direction === "up") {
            scrollAni("#scroll2Up", "CASE STUDIES");
          }
        }
        if (origin.index === 3) {
          if (direction === "down") {
            scrollAni("#scroll3Down", "news");
          } else if (direction === "up") {
            scrollAni("#scroll3Up", "awards");
          }
        }
        if (origin.index === 4) {
          scrollAni("#scroll4Up", "news");
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
              className="section hoverable"
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
            </SectionWrap>
            <SectionWrap className="section" bgc="#0C2340">
              <Awards awards={awardsItems} />
            </SectionWrap>

            <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
              <Footer handleLinkChange={props.handleLinkChange} />
            </SectionWrap>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
