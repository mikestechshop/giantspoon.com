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
  bgc?: string,
  flexWrap?: string,
  wrap?: string,
};

const StyledGroup = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: ${(props) => props.flexDirection || "column"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  align-items: ${(props) => props.flexAlign || "center"};
  position: relative;
  height: ${(props) => props.height || "auto"};
  margin-top: ${(props) => props.mt || "0"};
  margin-bottom: ${(props) => props.mb || "0"};
  margin-left: ${(props) => props.ml || "0"};
  margin-right: ${(props) => props.mr || "0"};
  background-color: ${(props) => props.bgc || ""};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;

const Wrapper = (props: TWrapperProps) => {
  const {
    children,
    height,
    width,
    mt,
    mb,
    mr,
    ml,
    bgc,
    flexAlign,
    flexDirection,
    flexWrap,
    wrap,
  } = props;
  return (
    <StyledGroup
      height={height}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}
      flexAlign={flexAlign}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      bgc={bgc}
      width={width}
      wrap={wrap}
    >
      {children}
    </StyledGroup>
  );
};

export default Wrapper;
