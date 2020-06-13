// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";

type TFeaturedWorkPreviewProps = {
  title: string,
  subtitle: string,
  body: string,
  imgSrc: string,
  imgAlt: string,
};

const StyledFeaturedWorkPreview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 6rem;
  align-items: center;
  width: 100%;
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
  const { title, subtitle, body, imgSrc, imgAlt } = props;
  return (
    <StyledFeaturedWorkPreview>
      <TextContainer>
        <LargeTextWrap>{title}</LargeTextWrap>
        <SmallTextWrap>{body}</SmallTextWrap>
        <SmallTextWrap>{subtitle}</SmallTextWrap>
      </TextContainer>
      <ImageContainer>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageContainer>
    </StyledFeaturedWorkPreview>
  );
};

export default FeaturedWorkPreview;
