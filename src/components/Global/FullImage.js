// @flow

import React from "react";
import styled from "styled-components";

type TFullImageProps = {
  src: string,
  alt: string,
};

const StyledFullImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => props.src || ""};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const FullImage = (props: TFullImageProps) => {
  const { src, alt } = props;
  return <StyledFullImage src={`url(${src})`} />;
};

export default FullImage;
