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
  padding-left: 10%;
  margin-top: 20vh;
  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-top: 15vh;
  }
`;
const SmallText = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  margin-top: ${(props) => props.mt || 0};
  color: ${(props) => props.color || "#B1C3D6"};
  width: 400px;
  marin-left: 20%;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
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
          <SectionWrap className="section" bgc="#0C2340">
            <Intro />
            <ScrollEffect bottom="0%" id="scroll0Down">
              <ScrollEffectDiv color="#FE9B96" />
              <ScrollEffectDiv color="#B1C3D6" />
              <ScrollEffectDiv color="#FFFCF2" />
              <ScrollEffectDiv color="#0C2340" />
            </ScrollEffect>
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            <Group
              flexDirection={window.innerWidth > 1025 ? "row" : "column"}
              flexAlign="start"
              height="100vh"
            >
              <Group
                width={window.innerWidth > 1025 ? "50%" : "100%"}
                flexAlign="start"
              >
                <LargeText mt={window.innerWidth > 1025 ? "20vh" : "0"}>
                  Lorem Ipsum <br />
                  Five or Six Words
                </LargeText>
                <Group
                  width={window.innerWidth > 1025 ? "100%" : "80%"}
                  flexDirection="row"
                  ml="10%"
                  flexAlign="start"
                >
                  <Group
                    width="50%"
                    flexAlign="start"
                    mt={window.innerWidth > 1025 ? "20vh" : "4vh"}
                  >
                    <SmallText flexAlign="start">
                      <strong>
                        Phone <br />
                        General Inquires <br />
                        New Business <br /> Careers
                      </strong>
                    </SmallText>
                  </Group>
                  <Group
                    width="50%"
                    flexAlign="start"
                    mt={window.innerWidth > 1025 ? "20vh" : "4vh"}
                  >
                    <SmallText flexAlign="start">
                      (888) SPOON-50 <br />
                      hello@giantspoon.com <br /> newbiz@giantspoon.com <br />
                      careers@giantspoon.com
                    </SmallText>
                  </Group>
                </Group>
              </Group>
              <Group
                wrap="wrap"
                width={window.innerWidth > 1025 ? "50%" : "80%"}
                flexDirection="row"
                flexAlign="flex-start"
                ml={window.innerWidth > 1025 ? "0%" : "10%"}
              >
                <Group width="50%" flexAlign="start">
                  <SmallText mt={window.innerWidth > 1025 ? "20vh" : "6vh"}>
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
                <Group width="50%" flexAlign="start">
                  <SmallText mt={window.innerWidth > 1025 ? "20vh" : "6vh"}>
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
                <Group
                  width="100%"
                  flexAlign="start"
                  mt={window.innerWidth > 1025 ? "20vh" : "2vh"}
                >
                  form goes here
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
