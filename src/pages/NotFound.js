// @flow

import React, { useEffect } from "react";
import NotFoundImg from "../static/not-found.png";
import { Wrapper, Group, FullImage } from "../components";
import styled from "styled-components";

const Large = styled.div`
  font-family: Interstate;
  font-style: normal;
  font-weight: 300;
  font-size: 30vw;
  line-height: 110%;
  z-index: 1;
  color: #ffffff;
  margin-left: 5vw;
  margin-top: 20vh;
`;

const Small = styled.div`
  font-family: Interstate;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  margin-left: 10vw;
  z-index: 1;
  color: #ffffff;
`;

const NotFound = () => {
  useEffect(() => {
    if (document.querySelector("#section-tab")) {
      document.querySelector("#section-tab").innerHTML = "Not Found";
    }
  });
  return (
    <Wrapper>
      <Group height="100vh" flexAlign="flex-start">
        <FullImage src={NotFoundImg} alt="slide image" />

        <Large> 404 </Large>
        <Small>What have you done? </Small>
      </Group>
    </Wrapper>
  );
};

export default NotFound;
