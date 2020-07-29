// @flow

import React from "react";
import styled from "styled-components";

type TFullImageProps = {
  src: string,
  alt: string,
  className?: string,
};

const StyledFullImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  background-image: ${(props) => props.src || ""};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 1024px) {
    &.half {
      height: 45vh;
    }
  }
`;

const FullImage = (props: TFullImageProps) => {
  const { src, alt, className } = props;
  return (
    <StyledFullImage className={className} src={`url(${src})`} alt={alt} />
  );
};

export default FullImage;
