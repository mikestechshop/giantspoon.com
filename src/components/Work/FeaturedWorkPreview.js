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
  margin-bottom: 4rem;
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

const FeaturedWorkPreview = (props: TFeaturedWorkPreviewProps) => {
  const { title, subtitle, body, imgSrc, imgAlt } = props;
  return (
    <StyledFeaturedWorkPreview>
      <TextContainer>
        <h1> {title} </h1>
        <h4> {subtitle} </h4>
        <p> {body}</p>
      </TextContainer>
      <ImageContainer>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageContainer>
    </StyledFeaturedWorkPreview>
  );
};

export default FeaturedWorkPreview;
