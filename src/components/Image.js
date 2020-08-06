// @flow

import React from "react";
import styled from "styled-components";

type TStyledImageProps = {
  src: string,
  alt: string,
  height?: string,
  width?: string,
};

const StyledImage = styled.img`
  height: ${(props) => props.height || "auto"};
  display: flex;
  width: ${(props) => props.width || "100%"};
`;

const Image = (props: TStyledImageProps) => {
  const { src, alt, height, width } = props;
  return (
    <StyledImage
      className="hoverable"
      src={src}
      alt={alt}
      height={height}
      width={width}
      data-keepplaying
    />
  );
};

export default Image;
