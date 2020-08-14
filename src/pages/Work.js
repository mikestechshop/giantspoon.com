// @flow

import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import {
  Footer,
  FullImage,
  MoreProjects,
  Group,
  SectionTab,
  Breadcrumbs,
  VimeoPlayer,
} from "../components";
import { useContentful } from "react-contentful";
import Video from "../static/video.mp4";
import { TweenMax } from "gsap";

type TWorkProps = {
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

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;

  @media (max-width: 1024px) {
    bottom: initial;
    top: 50vh;
    left: 50px;
  }
`;

const CampaignType = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 140%;
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
  &.view {
    font-weight: 400;
  }
  @media (max-width: 1024px) {
    width: 70vw;
    font-size: 0.8rem;
  }
`;
const Vid = styled.video`
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
`;
const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const Work = (props: TWorkProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState(0);
  const { data, error, fetched, loading } = useContentful({
    contentType: "caseStudy",
  });
  const videos = useContentful({
    contentType: "videos",
  });
  if (loading || !fetched || videos.loading || !videos.fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }
  if (videos.error) {
    console.error(error);
    return null;
  }

  const { items } = data;
  const featItemsLength = items.filter((item) => {
    return item.fields.featured;
  }).length;

  const { workSplashVimeoId } = videos.data.items[0].fields;

  return (
    <>
      <SectionTab text="work" />
      <Breadcrumbs
        hideFirst={true}
        count={2 + featItemsLength}
        active={breadcrumbs}
      />
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
          scrollAni(
            `#scroll${origin.index}${direction === "down" ? "Down" : "Up"}`
          );
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionWrap className="section">
                <Group height="100vh" width="auto">
                  <VimeoPlayer id={workSplashVimeoId} />
                </Group>
                <ScrollEffect bottom="0%" id="scroll0Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              {items
                .filter((item) => {
                  return item.fields.featured;
                })
                .map((item, i) => {
                  const {
                    campaignTitle,
                    campaignType,
                    clientTitle,
                    previewBlurb,
                    previewMedia,
                    url,
                  } = item.fields;
                  return (
                    <SectionWrap key={i} className="section" bgc="#0C2340">
                      <FullImage
                        className="half"
                        src={previewMedia.fields.file.url}
                        alt={previewMedia.fields.title}
                      />
                      <TextBox>
                        <CampaignType> {campaignType}</CampaignType>
                        <NewsTitle>
                          {clientTitle} <br /> <strong>{campaignTitle} </strong>
                        </NewsTitle>
                        <NewsDesc>{previewBlurb}</NewsDesc>
                        <NewsDesc
                          onClick={() => {
                            props.handleLinkChange(`work/${url}`);
                          }}
                          className="view"
                        >
                          View Project >
                        </NewsDesc>
                      </TextBox>
                      <ScrollEffect bottom="0%" id={`scroll${i + 1}Down`}>
                        <ScrollEffectDiv color="#FE9B96" />
                        <ScrollEffectDiv color="#B1C3D6" />
                        <ScrollEffectDiv color="#FFFCF2" />
                        <ScrollEffectDiv color="#0C2340" />
                      </ScrollEffect>
                      <ScrollEffect top="0%" id={`scroll${i + 1}Up`}>
                        <ScrollEffectDiv color="#FE9B96" />
                        <ScrollEffectDiv color="#B1C3D6" />
                        <ScrollEffectDiv color="#FFFCF2" />
                        <ScrollEffectDiv color="#0C2340" />
                      </ScrollEffect>
                    </SectionWrap>
                  );
                })}
              <SectionWrap className="section" bgc="#0C2340">
                <MoreProjects
                  handleLinkChange={props.handleLinkChange}
                  projects={items.filter((item) => {
                    return !item.fields.featured;
                  })}
                />
                <ScrollEffect top="0%" id={`scroll${featItemsLength + 1}Up`}>
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

export default Work;
