// @flow

import React, { useEffect } from "react";
import NotFoundImg from "../static/not-found.png";
import { Wrapper, Group, FullImage } from "../components";
import styled from "styled-components";
import NotFoundVideo from "../static/videos/not-found.mp4";

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
const Vid = styled.video`
  position: absolute;
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
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
        <Vid id="vid" autoPlay muted loop data-keepplaying>
          <source id="mp4" src={NotFoundVideo} type="video/mp4" />
        </Vid>

        <Large> 404 </Large>
        <Small>What have you done? </Small>
      </Group>
    </Wrapper>
  );
};

export default NotFound;
