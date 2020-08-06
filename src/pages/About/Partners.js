// @flow

import React from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "gsap/TextPlugin";

type TPartnerProps = {
  partners: Object,
};

const LargeText = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
const SmallText = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  width: 30vw;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 75%;
  }
`;
const PartnersWrap = styled.div`
  height: 38vw;
  width: 90vw;
  box-sizing: border-box;
  margin: 10vh 5vw;
  position: relative;
  @media (max-width: 1024px) {
    height: 80vh;
  }
`;
const TextBox = styled.div`
  position: absolute;
  bottom: 0vh;
  left: 5vw;
  width: 50%;
  p {
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
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
  @media (max-width: 1024px) {
    width: 33%;
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
            Our partners pick us because they want to do things differently. We
            work with Fortune 50 giants looking to flip the tables on tradition
            and Silicon Valley darlings ready to rattle the status quo.
            Regardless of size or specialty, our clients come to us for our take
            on how to prepare their brand for the future.
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
