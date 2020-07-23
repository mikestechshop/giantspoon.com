// @flow

import React, { useState } from "react";
import {
  Footer,
  Slider,
  Group,
  FullImage,
  Breadcrumbs,
  MoreProjects,
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

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
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
  max-width: 90%;
`;

const CaseStudy = (props: TCaseStudyProps) => {
  console.log(props);
  const {
    pageSplashImage,
    pageSplashVideo,
    pageGallery,
    campaignTitle,
    campaignType,
    clientTitle,
    pageBlurb,
  } = props.caseStudy;
  console.log(pageGallery);
  const [breadcrumbs, setBreadcrumbs] = useState(0);
  return (
    <>
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
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionWrap className="section">
                {pageSplashVideo ? (
                  {
                    /* <Group height="90vh">
                  <ReactPlayer
                    url={workFields.splash.fields.file.url}
                    width="100%"
                    height="100%"
                    light={workFields.splashPreview.fields.file.url}
                    playIcon={
                      <Image
                        src={playButton}
                        alt="play button"
                        height="75px"
                        width="auto"
                      />
                    }
                  />
                </Group> */
                  }
                ) : (
                  <FullImage
                    src={pageSplashImage.fields.file.url}
                    alt={pageSplashImage.fields.file.title}
                  />
                )}
              </SectionWrap>
              <SectionWrap className="section">
                <Slider
                  slideId={`${campaignTitle}-slider`}
                  slides={pageGallery.map((image, index) => {
                    if (index === 0) {
                      return (
                        <Group height="100vh" flexDirection="row" key={index}>
                          <Group width="40%" height="100vh" bgc="#0C2340">
                            <TextBox>
                              <CampaignType> {campaignType}</CampaignType>
                              <NewsTitle>
                                {clientTitle} <br />{" "}
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
                  })}
                />
              </SectionWrap>
              <SectionWrap className="section" bgc="#0C2340">
                <MoreProjects
                  projects={props.projects.filter((project) => {
                    return project.fields.campaignTitle !== campaignTitle;
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
    </>
  );
};

export default CaseStudy;
