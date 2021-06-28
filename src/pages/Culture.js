// @flow

import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import { TweenMax } from "gsap";
import {
  Footer,
  Group,
  Slider,
  Image,
  SmallSlider,
  SectionTab,
  Breadcrumbs,
  VimeoPlayer,
} from "../components";
import Careers from "../static/videos/GS_Careers-2.mp4";
import { useContentful } from "react-contentful";
import { useLocation } from "react-router-dom";

type TCultureProps = {
  handleLinkChange: Function,
};

const SectionWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.bgc || "#0033a0"};
`;
const HeadshotImg = styled.img`
  width: 8.333%;
  height: auto;
  @media (max-width: 1024px) {
    width: 20%;
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

const TextBox = styled.div`
  position: absolute;
  left: 10vw;
  bottom: 15%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;
  @media (max-width: 1024px) {
    left: 50px;
  }
`;
const Title = styled.h1`
  line-height: 110%;
  font-family: Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 9rem;
  margin-bottom: 2rem;
  font-weight: 300;
  margin-top: 0;
  color: #fffcf2;

  @media (max-width: 1024px) {
    font-size: 3rem;
    font-weight: 300;
    word-wrap: break-word;
    margin-bottom: 1rem;
    &.smaller {
      font-size: 2rem;
    }
  }
`;
const Desc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  position: relative;
  margin: ${(props) => props.margin || 0};
  color: ${(props) => props.color || "#FFFCF2"};
  &.see {
    font-weight: 400;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 70%;
    &.desc {
      display: none;
    }
  }
`;
const OurValues = styled.div`
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 70%;
  font-family: "interstate-mono";
  color: #fffcf2;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const MediumText = styled.div`
  font-size: 2rem;
  line-height: 110%;
  text-transform: capitalize;
  font-weight: 300;
  margin: ${(props) => props.margin || 0};
  position: relative;
  color: ${(props) => props.color || "#FFFCF2"};

  &.larger {
    font-size: 4rem;
    margin-bottom: 5vh;
  }

  @media (max-width: 1024px) {
    font-weight: 300;
    margin: 1rem 0rem;
    width: 80vw;
    font-size: 2rem;
    line-height: 2.2rem;
    margin-top: 50vh;
    margin-left: 0rem;
    &.careers {
      margin-top: 10vh;
      margin-left: 50px;
      font-size: 2rem;
    }
    br {
      display: none;
    }
  }
`;
const MediumTextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 40%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;
  @media (max-width: 1024px) {
    left: 50px;
  }
`;
const CareersBox = styled.div`
  width: 80vw;
  margin-left: 10vw;
  padding: 2.5rem;
  box-sizing: border-box;
  background-color: #0c2340;
  > div:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 1024px) {
    margin-left: 50px;
  }
`;

const JobTitle = styled.div`
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.6rem;
  text-transform: capitalize;
  padding-right: 0 .5rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const JobInfo = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
  a {
    color: #fffcf2;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const NewsTitle = styled.div`
  font-size: 4rem;
  margin-top: 13vh;
  margin-bottom: 5vh;
  margin-left: 10vw;
  color: #b1c3d6;
  @media (max-width: 1024px) {
    margin-left: 50px;
    margin-top: 8vh;
    font-size: 3rem;
  }
`;

const NewsImg = styled.img`
  height: 80px;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
    display: none;
  }
`;

const Info = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  postion: relative;
  opacity: 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }

  .text {
    line-height: 140%;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: ${(props) => props.fw || 300};
    color: #fffcf2;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    width: 80%;

    a {
      text-decoration: none;
      color: #fffcf2;
      font-weight: 400;
    }
  }

  @media (max-width: 1024px) {
    opacity: 1;
    background: none;
    margin-bottom: 10vh;
    .text {
      top: 55vh;
      font-size: 0.8rem;
      transform: translateY(0);
      .blurb {
        display: none;
      }
      .see {
        margin-top: 1rem;
      }
    }
  }
`;
const Vid = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100vw;
  min-height: 56.25vw; /* 100 * 9 / 16 */
`;

const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const Culture = (props: TCultureProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState(0);
  const { hash } = useLocation();
  const news = useContentful({
    contentType: "news",
  });
  const spoons = useContentful({
    contentType: "spoons",
  });
  const videos = useContentful({
    contentType: "videos",
  });
  const careers = useContentful({
    contentType: "careers",
  });

  if (
    spoons.loading ||
    !spoons.fetched ||
    news.loading ||
    !news.fetched ||
    videos.loading ||
    !videos.fetched ||
    careers.loading ||
    !careers.fetched
  ) {
    return null;
  }

  if (spoons.error) {
    console.error(spoons.error);
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
  if (careers.error) {
    console.error(careers.error);
    return null;
  }
  const newsItems = news.data.items;
  const spoonsItems = spoons.data.items;
  const careersItems = careers.data.items;
  const videosItems = videos.data.items[0].fields;
  return (
    <>
      <SectionTab text="spoons" />
      <Breadcrumbs hideFirst={true} count={5} active={breadcrumbs} />
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
          if (state.initialized && hash === "#careers") {
            fullpageApi.moveTo(4);
          }
          return (
            <>
              <SectionTab text="Spoons" />
              <ReactFullpage.Wrapper>
                <SectionWrap className="section" bgc="#0C2340">
                  <Group height="100vh" flexDirection="row" wrap="wrap">
                    {spoonsItems[0].fields.headshot.map((x, i) => {
                      return (
                        <HeadshotImg
                          src={x.fields.file.url}
                          alt={x.fields.title}
                          key={i}
                        />
                      );
                    })}
                  </Group>
                  <ScrollEffect bottom="0%" id="scroll0Down">
                    <ScrollEffectDiv color="#FE9B96" />
                    <ScrollEffectDiv color="#B1C3D6" />
                    <ScrollEffectDiv color="#FFFCF2" />
                    <ScrollEffectDiv color="#0C2340" />
                  </ScrollEffect>
                </SectionWrap>
                <SectionWrap className="section" bgc="#0C2340">
                  <Slider
                    slideId="work-slider"
                    slides={[
                      <Group height="100vh">
                        <VimeoPlayer id={videosItems.spoonsValue1VimeoId} />
                        <TextBox>
                          <OurValues>Our Values</OurValues>
                          <Title>
                            try <br />
                            anything
                          </Title>
                          <Desc>
                            Some people say it, but we really mean it. We were
                            born out of a startup culture. We fail fast, break
                            things, then dust ourselves off to start again. Our
                            best work was built because someone was dumb, brave,
                            or brilliant enough to try it. Be like that person.
                          </Desc>
                        </TextBox>
                      </Group>,
                      <Group height="100vh">
                        <VimeoPlayer id={videosItems.spoonsValue2VimeoId} />
                        <TextBox>
                          <OurValues>Our Values</OurValues>
                          <Title>
                            give <br />a damn
                          </Title>
                          <Desc>
                            We care. Like a lot. Maybe even too much. We sweat
                            every detail and punch up every line. We roll up our
                            sleeves and go to bat for better every day. We give
                            a damn and hope you do too.
                          </Desc>
                        </TextBox>
                      </Group>,
                      <Group height="100vh">
                        <VimeoPlayer id={videosItems.spoonsValue3VimeoId} />
                        <TextBox>
                          <OurValues>Our Values</OurValues>
                          <Title>
                            enjoy <br /> each other
                          </Title>
                          <Desc>
                            As a company founded by friends, we’ve always had a
                            strong foundation of fun. You’d be surprised how
                            many business problems we’ve solved while cracking a
                            joke, a beer, or a smile. While we care deeply about
                            the work, we also care deeply about enjoying the
                            people we work with.
                          </Desc>
                        </TextBox>
                      </Group>,
                    ]}
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
                  <Group height="100vh" flexAlign="flex-start">
                    <Vid id="vid" autoPlay muted loop data-keepplaying>
                      <source id="mp4" src={Careers} type="video/mp4" />
                    </Vid>
                    <MediumTextBox>
                      {/* <MediumText margin="10vh 0vw 2rem">
                        We love that everyone’s <br /> strange and personal{" "}
                        <br />
                        journey brought them here.

                      </MediumText> */}
                      <Desc color="#FFFCF2" margin="0">
                        {/* We hire playwrights, former politicos, and pro gamers.
                        The humans we hire are what makes the work so damn good.
                        Take a look at some of the Spoons in our drawer and the
                        weird stuff they’re into. */}
                        We don’t create typical ad campaigns so we hire people with unconventional backgrounds like playwrights, politicos and pro gamers. We’re a group of people who are insanely curious, ridiculously passionate, and enjoy breaking the rules. We hire people who can see around corners and connect the dots in unexpected ways. To be honest, we like humans who are a little bit weird, and kind, we’re really big on kind.
                      </Desc>
                    </MediumTextBox>
                  </Group>
                  <ScrollEffect bottom="0%" id={`scroll2Down`}>
                    <ScrollEffectDiv color="#FE9B96" />
                    <ScrollEffectDiv color="#B1C3D6" />
                    <ScrollEffectDiv color="#FFFCF2" />
                    <ScrollEffectDiv color="#0C2340" />
                  </ScrollEffect>
                  <ScrollEffect top="0%" id={`scroll2Up`}>
                    <ScrollEffectDiv color="#FE9B96" />
                    <ScrollEffectDiv color="#B1C3D6" />
                    <ScrollEffectDiv color="#FFFCF2" />
                    <ScrollEffectDiv color="#0C2340" />
                  </ScrollEffect>
                </SectionWrap>
                <SectionWrap className="section" bgc="#0033A0">
                  <Group height="100vh" flexAlign="flex-start">
                    <MediumText
                      margin="10vh 10vw "
                      color="#B1C3D6"
                      className="careers larger"
                    >
                      Our Open Positions
                    </MediumText>
                    <CareersBox>
                      {careersItems.map((career, i) => {
                        return (
                          <Group
                            flexDirection={
                              window.innerWidth > 1025 ? "row" : "column"
                            }
                          >
                            <Group
                              width={window.innerWidth > 1025 ? "30%" : "100%"}
                              flexAlign="flex-start"
                            >
                              <JobTitle> {career.fields.jobTitle} </JobTitle>
                            </Group>
                            <Group
                              width={window.innerWidth > 1025 ? "25%" : "100%"}
                              flexAlign="flex-start"
                            >
                              <JobInfo>
                                {career.fields.department} <br />{" "}
                                {career.fields.location}
                              </JobInfo>
                            </Group>
                            <Group
                              width={window.innerWidth > 1025 ? "45%" : "100%"}
                              flexAlign="flex-start"
                            >
                              <JobInfo>
                                {career.fields.description}{" "}
                                <a href={career.fields.url} target="_blank">
                                  {" "}
                                  See More >{" "}
                                </a>
                              </JobInfo>
                            </Group>
                          </Group>
                        );
                      })}
                    </CareersBox>
                    <TextBox>
                      <Desc>
                        Don’t see what you’re looking for? We’re always
                        searching for new Spoons for the drawer. Send us your
                        info: careers@giantspoon.com
                      </Desc>
                    </TextBox>
                  </Group>
                  <ScrollEffect bottom="0%" id={`scroll3Down`}>
                    <ScrollEffectDiv color="#FE9B96" />
                    <ScrollEffectDiv color="#B1C3D6" />
                    <ScrollEffectDiv color="#FFFCF2" />
                    <ScrollEffectDiv color="#0C2340" />
                  </ScrollEffect>
                  <ScrollEffect top="0%" id={`scroll3Up`}>
                    <ScrollEffectDiv color="#FE9B96" />
                    <ScrollEffectDiv color="#B1C3D6" />
                    <ScrollEffectDiv color="#FFFCF2" />
                    <ScrollEffectDiv color="#0C2340" />
                  </ScrollEffect>
                </SectionWrap>
                <SectionWrap className="section" bgc="#0C2340">
                  <Group height="100vh" flexAlign="flex-start">
                    <NewsTitle> News </NewsTitle>
                    <Group height={window.innerWidth > 1025 ? "50vh" : "80vh"}>
                      <SmallSlider
                        slideId="news-slide"
                        slides={newsItems.map((news) => {
                          return (
                            <Group height="100%">
                              <Image
                                height="50vh"
                                width="auto"
                                src={news.fields.image.fields.file.url}
                                alt={news.fields.image.fields.title}
                              />
                              <Info>
                                <div className="text">
                                  {news.fields.publicationImage && (
                                    <NewsImg
                                      src={
                                        news.fields.publicationImage.fields.file
                                          .url
                                      }
                                      alt={
                                        news.fields.publicationImage.fields
                                          .title
                                      }
                                    />
                                  )}

                                  <div>
                                    <strong> {news.fields.title} </strong>
                                  </div>
                                  <div className="blurb">
                                    {news.fields.blurb}
                                  </div>
                                  <div className="see">
                                    <a href={news.fields.url} target="_blank">
                                      See More >
                                    </a>
                                  </div>
                                </div>
                              </Info>
                            </Group>
                          );
                        })}
                      />
                    </Group>
                  </Group>
                  <ScrollEffect top="0%" id={`scroll4Up`}>
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
            </>
          );
        }}
      />
    </>
  );
};

export default Culture;
