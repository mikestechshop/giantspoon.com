// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Services from "./Services";
import styled from "styled-components";
import Intro from "./Intro";
import Work from "./Work";
import News from "./News";

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};
`;

const Home = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <SectionWrap className="section">
            <Intro />
          </SectionWrap>
          <SectionWrap className="section" bgc="#E5E5E5">
            <Work />
          </SectionWrap>
          <SectionWrap className="section">
            <Services />
          </SectionWrap>
          {/* <SectionWrap className="section" bgc="#FE9B96">
            <Image src={Services} />
          </SectionWrap>
          <SectionWrap className="section" bgc="#FE9B96">
            <Image src={Awards} />
          </SectionWrap> */}
          <SectionWrap className="section" bgc="#FE9B96">
            <News />
          </SectionWrap>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
