// @flow

import React, { useState } from "react";
import { Footer, Slider, Group } from "../components";
import ReactFullpage from "@fullpage/react-fullpage";
import { TweenMax } from "gsap";

import styled from "styled-components";

type TCaseStudyProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};
`;
const SlideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
const BreadCrumbWrap = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  z-index: 1000;
  &.hide {
    display: none;
  }
  div {
    height: 7px;
    width: 7px;
    margin: 5px 0px;
    background: #fffcf2;
    border-radius: 100%;
  }
  div.active {
    background: #fe9b96;
  }
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
      <BreadCrumbWrap id="breadcrumbs">
        {[...Array(4)].map((x, i) => {
          if (i === breadcrumbs) {
            return <div class="active" key={i} />;
          } else {
            return <div key={i} />;
          }
        })}
      </BreadCrumbWrap>
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
                  <SlideImg
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
                        <Group height="100vh" flexDirection="row">
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
                            <SlideImg
                              src={image.fields.file.url}
                              alt={image.fields.title}
                            />
                          </Group>
                        </Group>
                      );
                    } else {
                      return (
                        <Group height="100vh">
                          <SlideImg
                            src={image.fields.file.url}
                            alt={image.fields.title}
                          />
                        </Group>
                      );
                    }
                  })}
                />
              </SectionWrap>
              <SectionWrap className="section">More Projects</SectionWrap>
              <SectionWrap className="section">Lets Chat</SectionWrap>
              <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
                <Footer />
              </SectionWrap>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default CaseStudy;
