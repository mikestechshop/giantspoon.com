// @flow

import React from "react";
import { Wrapper, Group, Image, SimilarProject } from "../components";
import ReactPlayer from "react-player";
import playButton from "../static/playButton.png";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import arrowLeft from "../static/arrow-left.png";
import arrowRight from "../static/arrow-right.png";
import Reveal from "react-reveal/Reveal";

type TCaseStudyProps = {
  handleLinkChange: Function,
  caseStudy: {
    pageTitle: string,
    pageSplashImage: {
      fields: {
        file: {
          url: string,
          title: string,
        },
      },
    },
    pageSplashVideo: {
      fields: {
        file: {
          url: string,
          title: string,
        },
      },
    },
    pageBodyText: { content: Array<Object> },
    pageCampaignType: string,
    pageAwards: { content: Array<Object> },
    pageSlideShow: Array<Object>,
    similarProject1Title: string,
    similarProject1Url: string,
    similarProject1Image: {
      fields: {
        file: {
          url: string,
          title: string,
        },
      },
    },
    similarProject2Title: string,
    similarProject2Url: string,
    similarProject2Image: {
      fields: {
        file: {
          url: string,
          title: string,
        },
      },
    },
    similarProject3Title: string,
    similarProject3Url: string,
    similarProject3Image: {
      fields: {
        file: {
          url: string,
          title: string,
        },
      },
    },
  },
};

const StyledPageTitle = styled.h1`
  margin: 0;
  font-size: 4rem;
  bottom: 0;
  margin-left: 8rem;
  font-weight: 300;
  transform: translateY(-50%);
  align-content: left;
  align-self: flex-start;
`;

const SmallTextWrap = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: ${(props) => props.mb || 0};
`;

const TextGroupLeft = styled.div`
  width: 55%;
  padding-left: 8rem;
  align-self: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
const TextGroupRight = styled.div`
  width: 45%;
  padding-left: 8rem;
  align-self: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
const CarouselWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const CaseStudy = (props: TCaseStudyProps) => {
  console.log(props);
  const {
    pageSplashImage,
    pageSplashVideo,
    pageTitle,
    pageBodyText,
    pageCampaignType,
    pageAwards,
    pageSlideShow,
    similarProject1Title,
    similarProject1Url,
    similarProject1Image,
    similarProject2Title,
    similarProject2Url,
    similarProject2Image,
    similarProject3Title,
    similarProject3Url,
    similarProject3Image,
  } = props.caseStudy;
  return (
    <Wrapper>
      <Group height="90vh">
        <Reveal effect="animate__fadeIn" duration={1500}>
          {" "}
          {pageSplashVideo ? (
            <ReactPlayer
              url={pageSplashVideo.fields.file.url}
              width="100%"
              height="100%"
              light={pageSplashImage.fields.file.url}
              playIcon={
                <Image
                  src={playButton}
                  alt="play button"
                  height="75px"
                  width="auto"
                />
              }
            />
          ) : (
            <Image
              height="auto"
              width="100%"
              src={pageSplashImage.fields.file.url}
              alt={pageSplashImage.fields.file.title}
            />
          )}
        </Reveal>
      </Group>
      <Reveal effect="animate__fadeIn" duration={1500}>
        <StyledPageTitle>{pageTitle}</StyledPageTitle>
      </Reveal>
      <Group mt="3rem" flexDirection="row">
        <TextGroupLeft>
          <Reveal effect="animate__fadeInUp" duration={1500}>
            {pageBodyText.content.map((content, index) => {
              return (
                <SmallTextWrap mb="2rem">
                  {content.content[0].value}
                </SmallTextWrap>
              );
            })}
          </Reveal>
        </TextGroupLeft>
        <TextGroupRight>
          <Reveal effect="animate__fadeInUp" duration={1500}>
            <SmallTextWrap mb="4rem">{pageCampaignType}</SmallTextWrap>
            {pageAwards.content.map((content, index) => {
              return (
                <SmallTextWrap mb="1rem">
                  {content.content[0].value}
                </SmallTextWrap>
              );
            })}
          </Reveal>
        </TextGroupRight>
      </Group>
      <Group mt="4rem">
        <CarouselWrap>
          <Reveal effect="animate__fadeIn" duration={1500}>
            <Carousel
              arrowLeft={
                <Image
                  src={arrowLeft}
                  alt="arrow left"
                  width="auto"
                  height="50px"
                />
              }
              arrowRight={
                <Image
                  src={arrowRight}
                  alt="arrow-right"
                  width="auto"
                  height="50px"
                />
              }
              addArrowClickHandler
              infinite
            >
              {pageSlideShow.map((slide, index) => {
                return (
                  <Image
                    width="70vw"
                    height="auto"
                    key={index}
                    src={slide.fields.file.url}
                    alt={slide.fields.title}
                  />
                );
              })}
            </Carousel>
          </Reveal>
        </CarouselWrap>
      </Group>
      <TextGroupLeft>
        <Reveal effect="animate__fadeInUp" duration={1500}>
          <SmallTextWrap mb="2rem">Similar Projects</SmallTextWrap>
        </Reveal>
      </TextGroupLeft>
      <Group flexDirection="row">
        <SimilarProject
          title={similarProject1Title}
          handleLinkChange={props.handleLinkChange}
          url={similarProject1Url}
          src={similarProject1Image.fields.file.url}
          alt={similarProject1Image.fields.file.title}
        />
        <SimilarProject
          ml="2%"
          mr="2%"
          title={similarProject2Title}
          handleLinkChange={props.handleLinkChange}
          url={similarProject2Url}
          src={similarProject2Image.fields.file.url}
          alt={similarProject2Image.fields.file.title}
        />
        <SimilarProject
          title={similarProject3Title}
          handleLinkChange={props.handleLinkChange}
          url={similarProject3Url}
          src={similarProject3Image.fields.file.url}
          alt={similarProject3Image.fields.file.title}
        />
      </Group>
    </Wrapper>
  );
};

export default CaseStudy;
