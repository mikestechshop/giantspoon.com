// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

type TStyledImageProps = {
  src: string,
  alt: string,
};

const StyledImage = styled.img`
  background-color: #0c2340;
  height: auto;
  display: flex;
  width: 100%;
`;

const Image = (props: TStyledImageProps) => {
  const { src, alt } = props;
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
