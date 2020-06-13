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

const WorkPreview = (props: TWorkPreviewProps) => {
  const { title, subtitle, imgSrc, imgAlt } = props;
  return (
    <StyledWorkPreview>
      <TextContainer>
        <h1> {title} </h1>
        <h4> {subtitle} </h4>
      </TextContainer>
      <ImageContainer>
        <Image src={imgSrc} alt={imgAlt} />
      </ImageContainer>
    </StyledWorkPreview>
  );
};

export default WorkPreview;
