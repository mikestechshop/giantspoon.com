// @flow

import React from "react";
import { Wrapper, Group } from "../../components";
import styled from "styled-components";
import "gsap/TextPlugin";

type TAwardProps = {
  awards: Object,
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
const AwardsWrap = styled.div`
  height: 40vw;
  width: 80vw;
  box-sizing: border-box;
  margin: 20vh 10vw;
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
  @media (max-width: 1024px) {
    width: 100%;
    top: 40vh;
  }
`;
const AwardImg = styled.div`
  width: 25%;
  height: auto;
  box-sizing: border-box;
  padding: 0 5%;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
  .hover {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5vw;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    height: 10vw;
    width: 10vw;
    box-sizing: border-box;
    font-size: 0.8rem;
    color: #0033a0;
    border-radius: 100%;
    background-color: #fffcf2;
    display: flex;
    align-items: center;
    text-align: center;
  }
  &:hover {
    .hover {
      opacity: 1;
    }
  }
  @media (max-width: 1024px) {
    &.placeholder {
      display: none;
    }
  }
`;

const Awards = (props: TAwardProps) => {
  const {
    award1,
    award1Hover,
    award2,
    award2Hover,
    award3,
    award3Hover,
    award4,
    award4Hover,
    award5,
    award5Hover,
    award6,
    award6Hover,
    award7,
    award7Hover,
    award8,
    award8Hover,
  } = props.awards.fields;
  return (
    <Wrapper>
      <AwardsWrap>
        <TextBox>
          <LargeText>We’ve Won Some Stuff</LargeText>
          <SmallText>
            We feel weird about posting our awards too, but we have to put this
            page here so procurement says you can hire us.
          </SmallText>
        </TextBox>
        <Group width="100%" flexDirection="row" wrap="wrap">
          <AwardImg>
            {award1 && (
              <img
                src={award1.fields.file.url}
                alt={award1.fields.file.title}
              />
            )}
            {award1Hover && <div className="hover">{award1Hover}</div>}
          </AwardImg>
          <AwardImg>
            {award2 && (
              <img
                src={award2.fields.file.url}
                alt={award2.fields.file.title}
              />
            )}
            {award2Hover && <div className="hover">{award2Hover}</div>}
          </AwardImg>
          <AwardImg>
            {award3 && (
              <img
                src={award3.fields.file.url}
                alt={award3.fields.file.title}
              />
            )}
            {award3Hover && <div className="hover">{award3Hover}</div>}
          </AwardImg>
          <AwardImg>
            {award4 && (
              <img
                src={award4.fields.file.url}
                alt={award4.fields.file.title}
              />
            )}
            {award4Hover && <div className="hover">{award4Hover}</div>}
          </AwardImg>
        </Group>
        <Group width="100%" flexDirection="row" wrap="wrap">
          <AwardImg className="placeholder" />
          <AwardImg className="placeholder" />
          <AwardImg>
            {award5 && (
              <img
                src={award5.fields.file.url}
                alt={award5.fields.file.title}
              />
            )}
            {award5Hover && <div className="hover">{award5Hover}</div>}
          </AwardImg>
          <AwardImg>
            {award6 && (
              <img
                src={award6.fields.file.url}
                alt={award6.fields.file.title}
              />
            )}
            {award6Hover && <div className="hover">{award6Hover}</div>}
          </AwardImg>
          <AwardImg className="placeholder" />
          <AwardImg className="placeholder" />
          <AwardImg>
            {award7 && (
              <img
                src={award7.fields.file.url}
                alt={award7.fields.file.title}
              />
            )}
            {award7Hover && <div className="hover">{award7Hover}</div>}
          </AwardImg>
          <AwardImg>
            {award8 && (
              <img
                src={award8.fields.file.url}
                alt={award8.fields.file.title}
              />
            )}
            {award8Hover && <div className="hover">{award8Hover}</div>}
          </AwardImg>
        </Group>
      </AwardsWrap>
    </Wrapper>
  );
};

export default Awards;
