// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";

type TWorkPreviewProps = {
  title: string,
  subtitle: string,
  imgSrc: string,
  imgAlt: string,
};

const StyledWorkPreview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.div`
  width: 45%;
  padding-left: 5rem;
  padding-right: 5rem;
  align-self: flex-end;
`;

const ImageContainer = styled.div`
  width: 55%;
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
  const { title, subtitle, imgSrc, imgAlt } = props;
  return (
    <StyledWorkPreview>
      <TextContainer>
        <LargeTextWrap>{title}</LargeTextWrap>
        <SmallTextWrap>{subtitle}</SmallTextWrap>
      </TextContainer>
      <ImageContainer>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageContainer>
    </StyledWorkPreview>
  );
};

export default WorkPreview;
