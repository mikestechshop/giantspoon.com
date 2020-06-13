// @flow

import React from "react";
import type { Node } from "react";
import styled from "styled-components";

type TPageTitleProps = {
  children: Node,
};

const StyledPageTitle = styled.section`
  font-size: 6rem;
  font-family: "Libre Baskerville", serif;
`;

const PageTitle = (props: TPageTitleProps) => {
  const { children } = props;
  return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
