// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";
import Reveal from "react-reveal/Reveal";

type TFeaturedWorkPreviewProps = {
  title: string,
  subtitle: string,
  body: string,
  imgSrc: string,
  imgAlt: string,
  url: string,
  handleLinkChange: Function,
};

const StyledFeaturedWorkPreview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 6rem;
  align-items: center;
  width: 100%;
  opacity: 1;
  transition: all 1s;
  cursor: pointer;
  img {
    transform: scale(1);
    transition: all 1s;
  }
  .text-container {
    transition: all 1s;
    transform: translateY(2rem);
  }
  &:hover {
    opacity: 0.5;
    img {
      transform: scale(1.1);
    }
    .text-container {
      transform: translateY(-2rem);
    }
  }
`;

const TextContainer = styled.div`
  width: 45%;
  padding-left: 5rem;
  padding-right: 5rem;
  align-self: flex-end;
  transform: translateY(2rem);
`;

const ImageContainer = styled.div`
  width: 55%;
  transition: all 1s;
  overflow: hidden;
`;

const LargeTextWrap = styled.h1`
  font-size: 4rem;
  font-weight: 300;
`;

const SmallTextWrap = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  margin-top: 6rem;
`;

const FeaturedWorkPreview = (props: TFeaturedWorkPreviewProps) => {
  const {
    title,
    subtitle,
    body,
    imgSrc,
    imgAlt,
    url,
    handleLinkChange,
  } = props;

  return (
    <StyledFeaturedWorkPreview
      onClick={() => {
        handleLinkChange(url);
      }}
    >
      <TextContainer className="text-container">
        <Reveal effect="animate__fadeInUp" duration={1500}>
          <LargeTextWrap>{title}</LargeTextWrap>
          <SmallTextWrap>{body}</SmallTextWrap>
          <SmallTextWrap>{subtitle}</SmallTextWrap>
        </Reveal>
      </TextContainer>
      <ImageContainer>
        <Reveal effect="animate__fadeInRight" duration={1500}>
          <Image src={imgSrc} alt={imgAlt} />
        </Reveal>
      </ImageContainer>
    </StyledFeaturedWorkPreview>
  );
};

export default FeaturedWorkPreview;
