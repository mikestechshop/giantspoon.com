// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

type TWrapperProps = {
  children: Node,
  height?: string,
  flexAlign?: string,
  flexDirection?: string,
  ml?: string,
  mb?: string,
  mt?: string,
  mr?: string,
  width?: string,
};

const StyledGroup = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.flexAlign || "center"};
  position: relative;
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
`;

const Wrapper = (props: TWrapperProps) => {
  const { children, height, mt, mb, mr, ml, flexAlign, flexDirection } = props;
  return (
    <StyledGroup
      height={height}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      flexAlign={flexAlign}
      flexDirection={flexDirection}
    >
      {children}
    </StyledGroup>
  );
};

export default Wrapper;
