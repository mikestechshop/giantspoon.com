// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

type TWrapperProps = {
  children: Node,
};

const StyledWrapper = styled.div`
  background-color: #0c2340;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const Wrapper = (props: TWrapperProps) => {
  const { children } = props;
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
