// @flow

import React, { useState } from "react";
import {
  Footer,
  Slider,
  Group,
  FullImage,
  Breadcrumbs,
  MoreProjects,
  SectionTab,
  VimeoPlayer,
} from "../components";
import ReactFullpage from "@fullpage/react-fullpage";
import { TweenMax } from "gsap";

import styled from "styled-components";

type TCaseStudyProps = {
  handleLinkChange: Function,
  caseStudy: Object,
  projects: Array<Object>,
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

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  text-align: left;
  color: white;
  cursor: pointer;
  @media (max-width: 1024px) {
    top: 50%;
    transform: translateY(-50%);
    bottom: initial;
    left: 15%;
  }
`;

const CampaignType = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 140%;
  text-transform: uppercase;
  text-transform: uppercase;
  font-family: interstate-mono, monospace;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;

const NewsTitle = styled.h1`
  line-height: 120%;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 0.8rem;
  font-weight: ${(props) => props.fw || 300};
  @media (max-width: 1024px) {
    font-weight: 300;
    margin: 1rem 0rem;
    width: 70vw;
  }
`;
const NewsDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 400px;
  max-width: 90%;
  @media (max-width: 1024px) {
    width: 70vw;
    font-size: 0.8rem;
  }
`;
const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const VimeoHolder = styled.div`
  padding: 75% 0 0 0;
  pointer-events: none;
`;
const VimeoFrame = styled.iframe`
  box-sizing: border-box;
  height: 56.25vw;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  width: 177.77777778vh;
`;
const CaseStudy = (props: TCaseStudyProps) => {
  console.log(props);
  const {
    pageSplashImage,
    pageSplashVimeoLink,
    pageGallery,
    campaignTitle,
    campaignType,
    clientTitle,
    pageBlurb,
    url,
  } = props.caseStudy;
  console.log(pageGallery);
  const [breadcrumbs, setBreadcrumbs] = useState(0);
  return (
    <>
      <SectionTab text="Case Study" />
      <Breadcrumbs count={4} active={breadcrumbs} />
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={800} /* Options here */
        onLeave={function (origin, destination, direction) {
          setBreadcrumbs(destination.index);
          if (destination.isLast) {
            TweenMax.set("#breadcrumbs", { display: "none" });
          } else {
            TweenMax.set("#breadcrumbs", { display: "block" });
          }
          scrollAni(
            `#scroll${origin.index}${direction === "down" ? "Down" : "Up"}`
          );
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionWrap className="section">
                {pageSplashVimeoLink ? (
                  <Group height="100vh">
                    <VimeoPlayer id={pageSplashVimeoLink} />
                  </Group>
                ) : (
                  <FullImage
                    src={pageSplashImage.fields.file.url}
                    alt={pageSplashImage.fields.file.title}
                  />
                )}
                <ScrollEffect bottom="0%" id="scroll0Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section">
                <Slider
                  slideId={`${url}-slider`}
                  slides={
                    window.innerWidth < 1025
                      ? [
                          <Group height="100vh" flexDirection="row">
                            <Group width="100%" height="100vh" bgc="#0C2340">
                              <TextBox>
                                <CampaignType> {campaignType}</CampaignType>
                                <NewsTitle>
                                  {clientTitle} <br />
                                  <strong>{campaignTitle} </strong>
                                </NewsTitle>
                                <NewsDesc>{pageBlurb}</NewsDesc>
                              </TextBox>
                            </Group>
                          </Group>,
                          ...pageGallery.map((image, index) => {
                            if (index === 0) {
                              return (
                                <Group height="100vh" key={index}>
                                  <FullImage
                                    src={image.fields.file.url}
                                    alt={image.fields.title}
                                  />
                                </Group>
                              );
                            } else {
                              return (
                                <Group height="100vh" key={index}>
                                  <FullImage
                                    src={image.fields.file.url}
                                    alt={image.fields.title}
                                  />
                                </Group>
                              );
                            }
                          }),
                        ]
                      : [
                          ...pageGallery.map((image, index) => {
                            if (index === 0) {
                              return (
                                <Group
                                  height="100vh"
                                  flexDirection="row"
                                  key={index}
                                >
                                  <Group
                                    width="40%"
                                    height="100vh"
                                    bgc="#0C2340"
                                  >
                                    <TextBox>
                                      <CampaignType>
                                        {campaignType}
                                      </CampaignType>
                                      <NewsTitle>
                                        {clientTitle} <br />
                                        <strong>{campaignTitle} </strong>
                                      </NewsTitle>
                                      <NewsDesc>{pageBlurb}</NewsDesc>
                                    </TextBox>
                                  </Group>
                                  <Group width="60%" height="100vh">
                                    <FullImage
                                      src={image.fields.file.url}
                                      alt={image.fields.title}
                                    />
                                  </Group>
                                </Group>
                              );
                            } else {
                              return (
                                <Group height="100vh" key={index}>
                                  <FullImage
                                    src={image.fields.file.url}
                                    alt={image.fields.title}
                                  />
                                </Group>
                              );
                            }
                          }),
                        ]
                  }
                />
                <ScrollEffect bottom="0%" id={`scroll1Down`}>
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
                <ScrollEffect top="0%" id={`scroll1Up`}>
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section" bgc="#0C2340">
                <MoreProjects
                  handleLinkChange={props.handleLinkChange}
                  projects={props.projects.filter((project) => {
                    return project.fields.campaignTitle !== campaignTitle;
                  })}
                />
                <ScrollEffect top="0%" id={`scroll2Up`}>
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

export default CaseStudy;
