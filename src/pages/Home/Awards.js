// @flow

import React from "react";
import { Wrapper, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import AwardsBg from "../../static/awards-bg.png";

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  text-align: left;
  color: white;
  cursor: pointer;
`;
const AwardsTitle = styled.h1`
  line-height: 110%;
  font-size: 6rem;
  margin-bottom: 2rem;
  font-weight: 300;
  width: 70vw;
`;
const AwardsDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
`;

const Awards = () => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <div ref={ref}></div>
      <Group height="100vh">
        <FullImage src={AwardsBg} alt="awards image" />
        <TextBox>
          <AwardsTitle> lorem ipsum about trophies </AwardsTitle>
          <AwardsDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo,
            bibendum id interdum lobortis praesent lectus. Ullamcorper non
            pretium tincidunt felis amet. A eget tellus et, amet, accumsan.
          </AwardsDesc>
          <AwardsDesc>See More > </AwardsDesc>
        </TextBox>
      </Group>
    </Wrapper>
  );
};

export default Awards;
