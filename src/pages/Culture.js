// @flow

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import styled from "styled-components";
import { TweenMax } from "gsap";
import {
  Footer,
  Group,
  Slider,
  FullImage,
  Image,
  SmallSlider,
} from "../components";
import Headshot from "../static/headshot.png";
import Enjoy from "../static/enjoy.png";
import Damn from "../static/damn.png";
import Try from "../static/try.png";
import Careers from "../static/careers.png";

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
`;

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
`;
const Title = styled.h1`
  line-height: 110%;
  font-size: 8rem;
  margin-bottom: 2rem;
  font-weight: 300;
  margin-top: 0;
`;
const Desc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  position: relative;
  margin: ${(props) => props.margin || 0};
  color: ${(props) => props.color || "#B1C3D6"};
`;
const OurValues = styled.div`
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 70%;
  margin-bottom: 2rem;
`;

const MediumText = styled.div`
  font-size: 4rem;
  line-height: 4.7rem;
  text-transform: capitalize;
  font-weight: 300;
  margin: ${(props) => props.margin || 0};
  position: relative;
  color: ${(props) => props.color || "#FFFCF2"};
`;

const CareersBox = styled.div`
  width: 80vw;
  margin-left: 10vw;
  padding: 2.5rem;
  box-sizing: border-box;
  background-color: #0c2340;
`;

const JobTitle = styled.div`
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.6rem;
  text-transform: capitalize;
`;

const JobInfo = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 140%;
`;

const NewsTitle = styled.div`
  font-size: 4rem;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 10vw;
  color: #b1c3d6;
`;

const scrollAni = (id: string) => {
  TweenMax.to(id, 0.35, { height: "35vh" });
  TweenMax.to(id, 0.35, { height: "0vh", delay: 0.4 });
};
const Culture = (props: TCultureProps) => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={800} /* Options here */
    onLeave={function (origin, destination, direction) {
      console.log(origin.index);
      console.log(direction);
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
          <SectionWrap className="section" bgc="#0C2340">
            <Group height="100vh" flexDirection="row" flexWrap="wrap">
              {[...Array(60)].map((x, i) => {
                return <HeadshotImg src={Headshot} alt="headshot" />;
              })}
            </Group>
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            <Slider
              slideId="work-slider"
              slides={[
                <Group height="100vh">
                  <FullImage src={Try} alt="slide image" />
                  <TextBox>
                    <OurValues>Our Values</OurValues>
                    <Title> Try Anything </Title>
                    <Desc>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At commodo, bibendum id interdum lobortis praesent lectus.
                      Ullamcorper non pretium tincidunt felis amet. A eget
                      tellus et, amet, accumsan.
                    </Desc>
                    <Desc>See More > </Desc>
                  </TextBox>
                </Group>,
                <Group height="100vh">
                  <FullImage src={Damn} alt="slide image" />
                  <TextBox>
                    <OurValues>Our Values</OurValues>
                    <Title> Give A Damn </Title>
                    <Desc>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At commodo, bibendum id interdum lobortis praesent lectus.
                      Ullamcorper non pretium tincidunt felis amet. A eget
                      tellus et, amet, accumsan.
                    </Desc>
                    <Desc>See More > </Desc>
                  </TextBox>
                </Group>,
                <Group height="100vh">
                  <FullImage src={Enjoy} alt="slide image" />
                  <TextBox>
                    <OurValues>Our Values</OurValues>
                    <Title>
                      Enjoy <br /> Each Other
                    </Title>
                    <Desc>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At commodo, bibendum id interdum lobortis praesent lectus.
                      Ullamcorper non pretium tincidunt felis amet. A eget
                      tellus et, amet, accumsan.
                    </Desc>
                    <Desc>See More > </Desc>
                  </TextBox>
                </Group>,
              ]}
            />
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            <Group height="100vh" flexAlign="flex-start">
              <FullImage src={Careers} alt="slide image" />
              <MediumText margin="10vh 10vw 30vh">
                We love that everyone’s <br /> strange and personal <br />
                journey brought them here
              </MediumText>
              <Desc color="#FFFCF2" margin="0 10vw 0">
                We hire playwrights, former politicos, and pro gamers. The
                humans we hire are what makes the work so damn good. Take a look
                at some of the Spoons in our drawer and the weird stuff they’re
                into.
              </Desc>
            </Group>
          </SectionWrap>
          <SectionWrap className="section" bgc="#0033A0">
            <Group height="100vh" flexAlign="flex-start">
              <MediumText margin="10vh 10vw " color="#B1C3D6">
                Who we’re currently looking for
              </MediumText>
              <CareersBox>
                <Group flexDirection="row">
                  <Group width="30%" flexAlign="flex-start">
                    <JobTitle> Senior Anaylst </JobTitle>
                  </Group>
                  <Group width="25%" flexAlign="flex-start">
                    <JobInfo>
                      Media <br /> Los Angeles, CA
                    </JobInfo>
                  </Group>
                  <Group width="45%" flexAlign="flex-start">
                    <JobInfo>
                      Giant Spoon is looking for a Senior Analyst with a track
                      record for teasing insights from data. Someone who knows
                      the story lies between the lines — a combination of
                      qualitative and quantitative, art and science analysis.
                      See More>
                    </JobInfo>
                  </Group>
                </Group>
              </CareersBox>
            </Group>
          </SectionWrap>
          <SectionWrap className="section" bgc="#0C2340">
            <SectionWrap className="section" bgc="#0C2340">
              <Group height="100vh" flexAlign="flex-start">
                <NewsTitle> News </NewsTitle>
                <Group height="50vh">
                  <SmallSlider
                    slideId="news-slide"
                    slides={[
                      <Group height="100%">
                        <Image
                          height="100%"
                          width="auto"
                          src={Damn}
                          alt="sample image"
                        />
                      </Group>,
                      <Group height="100%">
                        <Image
                          height="100%"
                          width="auto"
                          src={Damn}
                          alt="sample image"
                        />
                      </Group>,
                      <Group height="100%">
                        <Image
                          height="100%"
                          width="auto"
                          src={Damn}
                          alt="sample image"
                        />
                      </Group>,
                      <Group height="100%">
                        <Image
                          height="100%"
                          width="auto"
                          src={Damn}
                          alt="sample image"
                        />
                      </Group>,
                      <Group height="100%">
                        <Image
                          height="100%"
                          width="auto"
                          src={Damn}
                          alt="sample image"
                        />
                      </Group>,
                      <Group height="100%">
                        <Image
                          height="100%"
                          width="auto"
                          src={Damn}
                          alt="sample image"
                        />
                      </Group>,
                    ]}
                  />
                </Group>
              </Group>
            </SectionWrap>
          </SectionWrap>
          <SectionWrap className="section fp-auto-height" bgc="#FE9B96">
            <Footer handleLinkChange={props.handleLinkChange} />
          </SectionWrap>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Culture;
