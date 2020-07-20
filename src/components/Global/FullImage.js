// @flow

import React from "react";
import styled from "styled-components";

type TFullImageProps = {
  src: string,
  alt: string,
};

const StyledFullImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const FullImage = (props: TFullImageProps) => {
  const { src, alt } = props;
  return <StyledFullImage src={src} alt={alt} />;
};

export default FullImage;
