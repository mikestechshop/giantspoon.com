// @flow

import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Services from "./Services";
import styled from "styled-components";
import Intro from "./Intro";
import Work from "./Work";
import Awards from "./Awards";
import News from "./News";
import { TweenMax } from "gsap";
import { Footer, Breadcrumbs, SectionTab } from "../../components";
import { useContentful } from "react-contentful";
import Circles from "../../static/circles.svg";

type THomeProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};
  max-height: calc(100vh - calc(100vh - 100%));

  overflow: hidden;

  &.circles {
    background-image: url(${Circles});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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

const ScrollEffectDiv = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${(props) => props.color || "auto"};
`;
const scrollAni = (id: string) => {
  if (window.innerWidth < 1025) {
    return;
  }
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const onHover = (color) => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 1,
    scale: 4,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: color,
  });
  TweenMax.set(".hoverable", { cursor: "none" });
};
const onMouseExit = () => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 0,
    scale: 1,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: "#f7f8fa",
  });
  TweenMax.set(".hoverable", { cursor: "default" });
};
const Home = (props: THomeProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState(0);
  const [tabText, setTabText] = useState("Welcome");
  const caseStudy = useContentful({
    contentType: "caseStudy",
  });
  const homePage = useContentful({
    contentType: "homePage",
  });
  const news = useContentful({
    contentType: "news",
  });
  const videos = useContentful({
    contentType: "videos",
  });

  if (
    caseStudy.loading ||
    !caseStudy.fetched ||
    homePage.loading ||
    !homePage.fetched ||
    news.loading ||
    !news.fetched ||
    videos.loading ||
    !videos.fetched
  ) {
    return null;
  }

  if (caseStudy.error) {
    console.error(caseStudy.error);
    return null;
  }
  if (homePage.error) {
    console.error(homePage.error);
    return null;
  }
  if (news.error) {
    console.error(news.error);
    return null;
  }
  if (videos.error) {
    console.error(videos.error);
    return null;
  }

  const caseStudyItems = caseStudy.data.items;
  const newsItems = news.data.items;
  const homePageItems = homePage.data.items[0];
  const videosItems = videos.data.items[0].fields;

  console.log(videosItems);
  console.log(homePageItems);
  const {
    strategyBlurb,
    creativeBlurb,
    experientialBlurb,
    mediaBlurb,
    productionBlurb,
    socialBlurb,
    awardsBlurb,
    awardsTitle,
  } = homePageItems.fields;
  return (
    <>
      <Breadcrumbs hideFirst={true} count={5} active={breadcrumbs} />
      <SectionTab text={tabText} />
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={800} /* Options here */
        onLeave={function (origin, destination, direction) {
          setBreadcrumbs(destination.index);
          if (destination.isLast || destination.isFirst) {
            TweenMax.set("#breadcrumbs", { display: "none" });
          } else {
            TweenMax.set("#breadcrumbs", { display: "block" });
          }
          if (destination.index === 0) {
            setTabText("Welcome");
          } else if (destination.index === 1) {
            setTabText("Work");
          }
          if (destination.index === 2) {
            setTabText("Services");
          }
          if (destination.index === 3) {
            setTabText("Awards");
          }
          if (destination.index === 4) {
            setTabText("News");
          }
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
              <SectionWrap
                className="section hoverable circles"
                onMouseEnter={() => onHover("#FE9B96")}
                onMouseLeave={() => onMouseExit()}
              >
                <Intro onHover={onHover} />
                <ScrollEffect bottom="0%" id="scroll0Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section" bgc="#E5E5E5">
                <Work
                  vimeoId={videosItems.homeWorkVimeoId}
                  caseStudyItems={caseStudyItems}
                  handleLinkChange={props.handleLinkChange}
                />
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
              <SectionWrap className="section">
                <Services
                  handleLinkChange={props.handleLinkChange}
                  blurbs={{
                    strategyBlurb,
                    creativeBlurb,
                    experientialBlurb,
                    mediaBlurb,
                    productionBlurb,
                    socialBlurb,
                  }}
                />
                <ScrollEffect bottom="0%" id="scroll2Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
                <ScrollEffect top="0%" id="scroll2Up">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section">
                <Awards
                  handleLinkChange={props.handleLinkChange}
                  awardsBlurb={awardsBlurb}
                  awardsTitle={awardsTitle}
                />
                <ScrollEffect bottom="0%" id="scroll3Down">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
                <ScrollEffect top="0%" id="scroll3Up">
                  <ScrollEffectDiv color="#FE9B96" />
                  <ScrollEffectDiv color="#B1C3D6" />
                  <ScrollEffectDiv color="#FFFCF2" />
                  <ScrollEffectDiv color="#0C2340" />
                </ScrollEffect>
              </SectionWrap>
              <SectionWrap className="section" bgc="#0C2340">
                <News newsItems={newsItems} />
                <ScrollEffect top="0%" id="scroll4Up">
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

export default Home;
