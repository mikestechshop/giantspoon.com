// @flow

import React from "react";
import styled from "styled-components";
import { Image, SmallSlider, Group } from "../../components";
import Damn from "../../static/damn.png";

const NewsTitle = styled.div`
  font-size: 4rem;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 10vw;
  color: #b1c3d6;
`;

const LetsChat = () => {
  return (
    <Group height="100vh" flexAlign="flex-start">
      <NewsTitle> More Projects </NewsTitle>
      <Group height="50vh">
        <SmallSlider
          slideId="news-slide"
          slides={[
            <Group height="100%">
              <Image height="100%" width="auto" src={Damn} alt="sample image" />
            </Group>,
            <Group height="100%">
              <Image height="100%" width="auto" src={Damn} alt="sample image" />
            </Group>,
            <Group height="100%">
              <Image height="100%" width="auto" src={Damn} alt="sample image" />
            </Group>,
            <Group height="100%">
              <Image height="100%" width="auto" src={Damn} alt="sample image" />
            </Group>,
            <Group height="100%">
              <Image height="100%" width="auto" src={Damn} alt="sample image" />
            </Group>,
            <Group height="100%">
              <Image height="100%" width="auto" src={Damn} alt="sample image" />
            </Group>,
          ]}
        />
      </Group>
    </Group>
  );
};

export default LetsChat;
