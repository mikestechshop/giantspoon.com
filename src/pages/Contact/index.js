// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import Intro from "./Intro";
import { Footer, Group } from "../../components";

type TContactProps = {
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

const LargeText = styled.div`
  font-weight: 300;
  font-size: 4rem;
  padding-left: 20%;
  margin-top: 20vh;
`;
const SmallText = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  margin-top: ${(props) => props.mt || 0};
  color: ${(props) => props.color || "#B1C3D6"};
`;

const ScrollEffectDiv = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${(props) => props.color || "auto"};
`;
// const scrollAni = (id: string, html: string) => {
//   TweenMax.to(id, 0.35, { height: "35vh" });
//   TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
//   document.querySelector("#section-tab").innerHTML = html;
// };
const Contact = (props: TContactProps) => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={800} /* Options here */
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
          <SectionWrap className="section" bgc="#0C2340">
            <Group height="100vh" flexDirection="row">
              <Group width="50%" height="100vh" flexAlign="start">
                <LargeText mt="20vh"> Contact </LargeText>
              </Group>
              <Group width="50%" height="100vh" flexDirection="row">
                <Group width="50%" flexAlign="start" height="100vh">
                  <SmallText mt="20vh">
                    <strong>
                      Phone <br /> <br />
                      General Inquires <br /> <br /> New Business <br /> <br />{" "}
                      Careers
                    </strong>
                  </SmallText>
                  <SmallText mt="2.5rem">
                    <strong>Los Angeles</strong>
                    <br />
                    6100 Wilshire Blvd. <br />
                    Suite 700 Los Angeles, <br />
                    CA 90048
                  </SmallText>
                  <SmallText mt="1.5rem" color="#FE9B96">
                    View Map >
                  </SmallText>
                </Group>
                <Group width="50%" flexAlign="start" height="100vh">
                  <SmallText mt="20vh">
                    (888) SPOON-50 <br /> <br />
                    hello@giantspoon.com <br /> <br /> newbiz@giantspoon.com{" "}
                    <br /> <br />
                    careers@giantspoon.com
                  </SmallText>
                  <SmallText mt="2.5rem">
                    <strong>New York</strong>
                    <br />
                    Wall Street. <br />
                    3rd floor New York, <br />
                    NY 10005
                  </SmallText>
                  <SmallText mt="1.5rem" color="#FE9B96">
                    View Map >
                  </SmallText>
                </Group>
              </Group>
            </Group>
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
          <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
            <Footer handleLinkChange={props.handleLinkChange} />
          </SectionWrap>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Contact;
