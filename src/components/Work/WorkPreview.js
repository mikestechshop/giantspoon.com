// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";
import Reveal from "react-reveal/Reveal";

type TWorkPreviewProps = {
  title: string,
  subtitle: string,
  imgSrc: string,
  imgAlt: string,
  url: string,
  handleLinkChange: Function,
};

const StyledWorkPreview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 1rem;
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
    transform: translateY(0rem);
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    .text-container {
      transform: translateY(-0.5rem);
    }
  }
`;

const TextContainer = styled.div`
  width: 45%;
  padding-left: 5rem;
  padding-right: 5rem;
  align-self: flex-end;
`;

const ImageContainer = styled.div`
  width: 55%;
  overflow: hidden;
`;

const LargeTextWrap = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
`;

const SmallTextWrap = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  margin-top: 1rem;
`;

const WorkPreview = (props: TWorkPreviewProps) => {
  const { title, subtitle, imgSrc, imgAlt, url, handleLinkChange } = props;
  return (
    <StyledWorkPreview
      onClick={() => {
        handleLinkChange(`work/${url}`);
      }}
    >
      <TextContainer className="text-container">
        <Reveal effect="animate__fadeInUp" duration={1500}>
          <LargeTextWrap>{title}</LargeTextWrap>
          <SmallTextWrap>{subtitle}</SmallTextWrap>
        </Reveal>
      </TextContainer>
      <ImageContainer>
        <Reveal effect="animate__fadeInRight" duration={1500}>
          <Image src={imgSrc} alt={imgAlt} />
        </Reveal>
      </ImageContainer>
    </StyledWorkPreview>
  );
};

export default WorkPreview;
