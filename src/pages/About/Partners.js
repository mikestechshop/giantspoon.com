// @flow

import React, { useState } from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import Partner1 from "../../static/partner1.png";
import "gsap/TextPlugin";

type TPartnerProps = {
  partners: Object,
};

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
  height: 62vh;
  width: 90vw;
  box-sizing: border-box;
  margin: 10vh 5vw;
  position: relative;
`;
const TextBox = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  width: 50%;
`;
const PartnerImg = styled.div`
  width: 20%;
  height: auto;
  box-sizing: border-box;
  padding: 0 5%;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  img.hover {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    padding: 0 5vw;
    box-sizing: border-box;
  }
  &:hover {
    img.hover {
      opacity: 1;
    }
  }
`;

const Partners = (props: TPartnerProps) => {
  const [ref] = useInView({
    triggerOnce: true,
  });
  const {
    partner1,
    partner1Hover,
    partner2,
    partner2Hover,
    partner3,
    partner3Hover,
    partner4,
    partner4Hover,
    partner5,
    partner5Hover,
    partner6,
    partner6Hover,
    partner7,
    partner7Hover,
    partner8,
    partner8Hover,
    partner9,
    partner9Hover,
    partner10,
    partner10Hover,
    partner11,
    partner11Hover,
    partner12,
    partner12Hover,
    partner13,
    partner13Hover,
    partner14,
    partner14Hover,
    partner15,
    partner15Hover,
    partner16,
    partner16Hover,
  } = props.partners.fields;
  console.log(partner1);
  return (
    <Wrapper>
      <PartnersWrap>
        <TextBox>
          <LargeText>The Company We Keep</LargeText>
          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo,
            bibendum id interdum lobortis praesent lectus. Ullamcorper non
            pretium tincidunt felis amet. A eget tellus et, amet, accumsan.
          </SmallText>
        </TextBox>
        <Group width="100%" flexDirection="row">
          <PartnerImg>
            {partner1 && (
              <img
                src={partner1.fields.file.url}
                alt={partner1.fields.file.title}
              />
            )}
            {partner1Hover && (
              <img
                className="hover"
                src={partner1Hover.fields.file.url}
                alt={partner1.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner2 && (
              <img
                src={partner2.fields.file.url}
                alt={partner2.fields.file.title}
              />
            )}
            {partner2Hover && (
              <img
                className="hover"
                src={partner2Hover.fields.file.url}
                alt={partner2.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner3 && (
              <img
                src={partner3.fields.file.url}
                alt={partner3.fields.file.title}
              />
            )}
            {partner3Hover && (
              <img
                className="hover"
                src={partner3Hover.fields.file.url}
                alt={partner3.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner4 && (
              <img
                src={partner4.fields.file.url}
                alt={partner4.fields.file.title}
              />
            )}
            {partner4Hover && (
              <img
                className="hover"
                src={partner4Hover.fields.file.url}
                alt={partner4.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner5 && (
              <img
                src={partner5.fields.file.url}
                alt={partner5.fields.file.title}
              />
            )}
            {partner5Hover && (
              <img
                className="hover"
                src={partner5Hover.fields.file.url}
                alt={partner5.fields.file.title}
              />
            )}
          </PartnerImg>
        </Group>
        <Group width="100%" flexDirection="row">
          <PartnerImg>
            {partner6 && (
              <img
                src={partner6.fields.file.url}
                alt={partner6.fields.file.title}
              />
            )}
            {partner6Hover && (
              <img
                className="hover"
                src={partner6Hover.fields.file.url}
                alt={partner6.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner7 && (
              <img
                src={partner7.fields.file.url}
                alt={partner7.fields.file.title}
              />
            )}
            {partner7Hover && (
              <img
                className="hover"
                src={partner7Hover.fields.file.url}
                alt={partner7.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner8 && (
              <img
                src={partner8.fields.file.url}
                alt={partner8.fields.file.title}
              />
            )}
            {partner8Hover && (
              <img
                className="hover"
                src={partner8Hover.fields.file.url}
                alt={partner8.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner9 && (
              <img
                src={partner9.fields.file.url}
                alt={partner9.fields.file.title}
              />
            )}
            {partner9Hover && (
              <img
                className="hover"
                src={partner9Hover.fields.file.url}
                alt={partner9.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner10 && (
              <img
                src={partner10.fields.file.url}
                alt={partner10.fields.file.title}
              />
            )}
            {partner10Hover && (
              <img
                className="hover"
                src={partner10Hover.fields.file.url}
                alt={partner10.fields.file.title}
              />
            )}
          </PartnerImg>
        </Group>
        <Group width="100%" flexDirection="row-reverse">
          <PartnerImg>
            {partner11 && (
              <img
                src={partner11.fields.file.url}
                alt={partner11.fields.file.title}
              />
            )}
            {partner11Hover && (
              <img
                className="hover"
                src={partner11Hover.fields.file.url}
                alt={partner11.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner12 && (
              <img
                src={partner12.fields.file.url}
                alt={partner12.fields.file.title}
              />
            )}
            {partner12Hover && (
              <img
                className="hover"
                src={partner12Hover.fields.file.url}
                alt={partner12.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner13 && (
              <img
                src={partner13.fields.file.url}
                alt={partner13.fields.file.title}
              />
            )}
            {partner13Hover && (
              <img
                className="hover"
                src={partner13Hover.fields.file.url}
                alt={partner13.fields.file.title}
              />
            )}
          </PartnerImg>
        </Group>
        <Group width="100%" flexDirection="row-reverse">
          <PartnerImg>
            {partner14 && (
              <img
                src={partner14.fields.file.url}
                alt={partner14.fields.file.title}
              />
            )}
            {partner14Hover && (
              <img
                className="hover"
                src={partner14Hover.fields.file.url}
                alt={partner14.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner15 && (
              <img
                src={partner15.fields.file.url}
                alt={partner15.fields.file.title}
              />
            )}
            {partner15Hover && (
              <img
                className="hover"
                src={partner15Hover.fields.file.url}
                alt={partner15.fields.file.title}
              />
            )}
          </PartnerImg>
          <PartnerImg>
            {partner16 && (
              <img
                src={partner16.fields.file.url}
                alt={partner16.fields.file.title}
              />
            )}
            {partner16Hover && (
              <img
                className="hover"
                src={partner16Hover.fields.file.url}
                alt={partner16.fields.file.title}
              />
            )}
          </PartnerImg>
        </Group>
      </PartnersWrap>
    </Wrapper>
  );
};

export default Partners;
