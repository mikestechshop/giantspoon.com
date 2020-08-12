// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import Intro from "./Intro";
import { Footer, Group, SectionTab } from "../../components";
import { TweenMax } from "gsap";
import Mailchimp from "react-mailchimp-form";

type TContactProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};

  &.form input {
    border: 1px solid #b1c3d6;
    background: transparent;
    margin-right: 20px;
    color: #b1c3d6;
    font-family: interstate;
    display: block;
    margin-bottom: 1.5rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
  button {
    border: 1px solid #b1c3d6;

    background: transparent;
    padding: 0.5rem 1rem;
    font-family: interstate;
    border-style: none;
    font-weight: 600;
    border-radius: 5px;
    background-color: #b1c3d6;
    color: #fffcf2;
  }
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #b1c3d6;
    opacity: 1; /* Firefox */
  }
  input[type="textbox"] {
    height: 5rem;
    width: 20rem;
    max-width: 70vw;
  }
  @media (max-width: 1024px) {
    &.form input {
      margin-bottom: 1rem;
    }
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

const LargeText = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  padding-left: 10%;
  margin-top: 20vh;
  .coral {
    color: #fe9b96;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-top: 8vh;
    width: 70vw;
    padding-left: 50px;
    margin-bottom: 0px;
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
  &.cta {
    font-weight: 400;
  }
  strong {
    font-weight: 400;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

const ScrollEffectDiv = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${(props) => props.color || "auto"};
`;
const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const handleTransitOpen = () => {
  TweenMax.to("#transit", 0.4, {
    autoAlpha: 1,
    ease: "power3.inOut",
  });
  TweenMax.to("#date", 0.4, {
    autoAlpha: 0,
    ease: "power3.inOut",
  });
};
const Contact = (props: TContactProps) => (
  <>
    <SectionTab text="Contact" />
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={800} /* Options here */
      onLeave={function (origin, destination, direction) {
        scrollAni(
          `#scroll${origin.index}${direction === "down" ? "Down" : "Up"}`
        );
      }}
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
            <SectionWrap className="section form" bgc="#0C2340">
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
                    All The <span className="coral">Info</span> You Could Need.
                  </LargeText>
                  <Group
                    width={window.innerWidth > 1025 ? "100%" : "80%"}
                    flexDirection="row"
                    ml={window.innerWidth > 1025 ? "10%" : "50px"}
                    flexAlign="start"
                  >
                    <Group
                      width={window.innerWidth > 1025 ? "30%" : "50%"}
                      flexAlign="start"
                      mt={window.innerWidth > 1025 ? "20vh" : "4vh"}
                    >
                      <SmallText flexAlign="start">
                        <strong>
                          Phone <br />
                          General Inquires <br />
                          New Business <br />
                          Careers
                        </strong>
                      </SmallText>
                    </Group>
                    <Group
                      width={window.innerWidth > 1025 ? "70%" : "50%"}
                      flexAlign="start"
                      mt={window.innerWidth > 1025 ? "20vh" : "4vh"}
                    >
                      <SmallText flexAlign="start">
                        (888) SPOON-50 <br />
                        hello@giantspoon.com <br />
                        newbiz@giantspoon.com <br />
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
                  ml={window.innerWidth > 1025 ? "10%" : "50px"}
                >
                  <Group width="50%" flexAlign="start">
                    <SmallText mt={window.innerWidth > 1025 ? "20vh" : "1rem"}>
                      <strong>Los Angeles</strong>
                      <br />
                      6100 Wilshire Blvd. <br />
                      Suite 700 <br /> Los Angeles, CA 90048
                    </SmallText>
                    <SmallText
                      mt="1.5rem"
                      className="cta"
                      onClick={() => {
                        handleTransitOpen();
                      }}
                    >
                      View Map >
                    </SmallText>
                  </Group>
                  <Group width="50%" flexAlign="start">
                    <SmallText mt={window.innerWidth > 1025 ? "20vh" : "1rem"}>
                      <strong>New York</strong>
                      <br />
                      44 Wall Street. <br />
                      3rd floor
                      <br /> New York, NY 10005
                    </SmallText>
                    <SmallText
                      mt="1.5rem"
                      className="cta"
                      onClick={() => {
                        handleTransitOpen(true);
                      }}
                    >
                      View Map >
                    </SmallText>
                  </Group>
                  <Group
                    width="100%"
                    flexAlign="start"
                    mt={window.innerWidth > 1025 ? "12vh" : "2vh"}
                  >
                    <Mailchimp
                      action="https://giantspoon.us17.list-manage.com/subscribe/post?u=df3c644d0ffcc72bdb51a361c&amp;id=3db69f1995"
                      fields={[
                        {
                          name: "subject",
                          placeholder: "Subject",
                          type: "input",
                          required: true,
                        },
                        {
                          name: "EMAIL",
                          placeholder: "Email",
                          type: "email",
                          required: true,
                        },
                        {
                          name: "message",
                          placeholder: "Message",
                          type: "textbox",
                          required: true,
                        },
                      ]}
                      messages={{
                        button: "Send!",
                      }}
                    />
                  </Group>
                </Group>
              </Group>

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
  </>
);

export default Contact;
