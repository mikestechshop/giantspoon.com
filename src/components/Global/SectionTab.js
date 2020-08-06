// @flow

import React from "react";
import styled from "styled-components";

type TSectionTabProps = {
  text: string,
};

const StyledSectionTab = styled.div`
  position: fixed;
  top: 0;
  left: 10vw;
  height: 17px;
  width: 142px;
  z-index: 999;
  background: #b1c3d6;
  @media (max-width: 1024px) {
    left: 50px;
  }
`;
const SectionTabText = styled.div`
  position: absolute;
  left: 14px;
  top: -5px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.85rem;
  line-height: 140%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: interstate-mono, monospace;
  color: #0c2340;
`;

const SectionTab = (props: TSectionTabProps) => {
  const { text } = props;
  return (
    <StyledSectionTab>
      <SectionTabText id="section-tab"> {text} </SectionTabText>
    </StyledSectionTab>
  );
};

export default SectionTab;
