// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

type TWrapperProps = {
  children: Node,
  height?: string,
};

const StyledWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: ${(props) => props.height || "auto"};
`;

const Wrapper = (props: TWrapperProps) => {
  const { children, height } = props;
  return <StyledWrapper height={height}>{children}</StyledWrapper>;
};

export default Wrapper;
