// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import { Footer, FullImage, MoreProjects } from "../components";
import { useContentful } from "react-contentful";

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
// const scrollAni = (id: string, html: string) => {
//   TweenMax.to(id, 0.35, { height: "35vh" });
//   TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
//   document.querySelector("#section-tab").innerHTML = html;
// };

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
`;

const CampaignType = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 140%;
  text-transform: uppercase;
`;

const NewsTitle = styled.h1`
  line-height: 140%;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: ${(props) => props.fw || 300};
`;
const NewsDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 400px;
`;

const Work = (props: TWorkProps) => {
  const { data, error, fetched, loading } = useContentful({
    contentType: "caseStudy",
  });
  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const { items } = data;
  console.log(items);
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={800} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <SectionWrap className="section">
              Work Video Goes here
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
                } = item.fields;
                return (
                  <SectionWrap key={i} className="section">
                    <FullImage
                      src={previewMedia.fields.file.url}
                      alt={previewMedia.fields.title}
                    />
                    <TextBox>
                      <CampaignType> {campaignType}</CampaignType>
                      <NewsTitle>
                        {clientTitle} <br /> <strong>{campaignTitle} </strong>
                      </NewsTitle>
                      <NewsDesc>{previewBlurb}</NewsDesc>
                      <NewsDesc>View Project > </NewsDesc>
                    </TextBox>
                  </SectionWrap>
                );
              })}
            <SectionWrap className="section" bgc="#0C2340">
              <MoreProjects
                projects={items.filter((item) => {
                  return !item.fields.featured;
                })}
              />
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

export default Work;
