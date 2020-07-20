// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { Footer } from "../components";

type TCultureProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};
`;

const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const Culture = (props: TCultureProps) => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={800} /* Options here */
    onLeave={function (origin, destination, direction) {
      console.log(origin.index);
      console.log(direction);
      if (origin.index === 0) {
        scrollAni("#scroll0Down");
      }
      if (origin.index === 1) {
        if (direction === "down") {
          scrollAni("#scroll1Down");
          console.log("run");
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
        if (direction === "down") {
          scrollAni("#scroll3Down");
        } else if (direction === "up") {
          scrollAni("#scroll3Up");
        }
      }
      if (origin.index === 4) {
        scrollAni("#scroll4Up");
      }
    }}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <SectionWrap className="section" bgc="#0C2340">
            spoons
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            values
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            careers header
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            careers list
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            news
          </SectionWrap>
          <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
            <Footer handleLinkChange={props.handleLinkChange} />
          </SectionWrap>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Culture;
