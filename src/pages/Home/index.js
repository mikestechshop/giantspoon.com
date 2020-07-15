// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Services from "./Services";
import styled from "styled-components";
import Intro from "./Intro";
import Work from "./Work";
import Awards from "./Awards";
import News from "./News";
import { TweenMax } from "gsap";
import { Footer } from "../../components";

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
const scrollAni = (id: string, html: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
  document.querySelector("#section-tab").innerHTML = html;
};
const Home = () => (
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
      return (
        <ReactFullpage.Wrapper>
          <SectionWrap className="section">
            <Intro />
            <ScrollEffect bottom="0%" id="scroll0Down">
              <ScrollEffectDiv color="#FE9B96" />
              <ScrollEffectDiv color="#B1C3D6" />
              <ScrollEffectDiv color="#FFFCF2" />
              <ScrollEffectDiv color="#0C2340" />
            </ScrollEffect>
          </SectionWrap>
          <SectionWrap className="section" bgc="#E5E5E5">
            <Work />
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
            <Services />
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
          <SectionWrap className="section">
            <Awards />
            <ScrollEffect bottom="0%" id="scroll3Down">
              <ScrollEffectDiv color="#FE9B96" />
              <ScrollEffectDiv color="#B1C3D6" />
              <ScrollEffectDiv color="#FFFCF2" />
              <ScrollEffectDiv color="#0C2340" />
            </ScrollEffect>
            <ScrollEffect top="0%" id="scroll3Up">
              <ScrollEffectDiv color="#FE9B96" />
              <ScrollEffectDiv color="#B1C3D6" />
              <ScrollEffectDiv color="#FFFCF2" />
              <ScrollEffectDiv color="#0C2340" />
            </ScrollEffect>
          </SectionWrap>
          <SectionWrap className="section" bgc="#FE9B96">
            <News />
            <ScrollEffect top="0%" id="scroll4Up">
              <ScrollEffectDiv color="#FE9B96" />
              <ScrollEffectDiv color="#B1C3D6" />
              <ScrollEffectDiv color="#FFFCF2" />
              <ScrollEffectDiv color="#0C2340" />
            </ScrollEffect>
          </SectionWrap>
          <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
            <Footer />
          </SectionWrap>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
