// @flow

import React from "react";
import styled from "styled-components";

type TBreadcrumbsProps = {
  count: number,
  active: number,
  hideFirst?: boolean,
};

const StyledBreadcrumbs = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  z-index: 1000;
  &.hide {
    display: none;
  }
  div {
    height: 7px;
    width: 7px;
    margin: 5px 0px;
    background: #fffcf2;
    border-radius: 100%;
  }
  div.active {
    background: #fe9b96;
  }
`;

const Breadcrumbs = (props: TBreadcrumbsProps) => {
  const { count, active, hideFirst } = props;
  return (
    <StyledBreadcrumbs className={hideFirst ? "hide" : ""} id="breadcrumbs">
      {[...Array(count)].map((x, i) => {
        if (i === active) {
          return <div className="active" key={i} />;
        } else {
          return <div key={i} />;
        }
      })}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
