// @flow

import React, { useState } from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import Partner1 from "../../static/partner1.png";
import "gsap/TextPlugin";

const LargeText = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const SmallText = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  width: 30vw;
`;
const PartnersWrap = styled.div`
  height: 80vh;
  width: 80vw;
  box-sizing: border-box;
  margin: 10vh 10vw;
  position: relative;
`;
const TextBox = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  width: 50%;
`;
const PartnerImg = styled.img`
  width: 25%;
  height: auto;
  box-sizing: border-box;
  padding: 0 5%;
`;

const Partners = () => {
  const [ref] = useInView({
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <PartnersWrap>
        <TextBox>
          <LargeText>
            Lorem Ipsum <br />
            About Partners
          </LargeText>
          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo,
            bibendum id interdum lobortis praesent lectus. Ullamcorper non
            pretium tincidunt felis amet. A eget tellus et, amet, accumsan.
          </SmallText>
        </TextBox>
        <Group width="100%" flexDirection="row">
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
        </Group>
        <Group width="100%" flexDirection="row">
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
        </Group>
        <Group width="100%" flexDirection="row-reverse">
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
        </Group>
        <Group width="100%" flexDirection="row-reverse">
          <PartnerImg src={Partner1} />
          <PartnerImg src={Partner1} />
        </Group>
      </PartnersWrap>
    </Wrapper>
  );
};

export default Partners;
