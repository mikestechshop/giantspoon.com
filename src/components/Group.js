// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

type TWrapperProps = {
  children: Node,
  height?: string,
  ml?: string,
  mb?: string,
  mt?: string,
  mr?: string,
};

const StyledGroup = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.mt || "none"};
  margin-bottom: ${(props) => props.mb || "none"};
  margin-left: ${(props) => props.ml || "none"};
  margin-right: ${(props) => props.mr || "none"};
`;

const Wrapper = (props: TWrapperProps) => {
  const { children, height, mt, mb, mr, ml } = props;
  return (
    <StyledGroup height={height} mt={mt} mb={mb} mr={mr} ml={ml}>
      {children}
    </StyledGroup>
  );
};

export default Wrapper;
