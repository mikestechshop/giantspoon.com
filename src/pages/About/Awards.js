// @flow

import React from "react";
import { Wrapper, Group } from "../../components";
import { useInView } from "react-intersection-observer";
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
  height: 55vw;
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
  bottom: 25vh;
  left: 5vw;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
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
    top: 10px;
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
  }
  &:hover {
    .hover {
      opacity: 1;
    }
  }
`;

const Awards = (props: TAwardProps) => {
  const [ref] = useInView({
    triggerOnce: true,
  });
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
          <LargeText>
            Lorem Ipsum <br />
            About Awards
          </LargeText>
          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At commodo,
            bibendum id interdum lobortis praesent lectus. Ullamcorper non
            pretium tincidunt felis amet. A eget tellus et, amet, accumsan.
          </SmallText>
        </TextBox>
        <Group width="100%" flexDirection="row">
          <AwardImg>
            {award1 && (
              <img
                src={award1.fields.file.url}
                alt={award1.fields.file.title}
              />
            )}
            {award1Hover && (
              <img
                className="hover"
                src={award1Hover.fields.file.url}
                alt={award1.fields.file.title}
              />
            )}
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
            {award3Hover && (
              <img
                className="hover"
                src={award3Hover.fields.file.url}
                alt={award3.fields.file.title}
              />
            )}
          </AwardImg>
          <AwardImg>
            {award4 && (
              <img
                src={award4.fields.file.url}
                alt={award4.fields.file.title}
              />
            )}
            {award4Hover && (
              <img
                className="hover"
                src={award4Hover.fields.file.url}
                alt={award4.fields.file.title}
              />
            )}
          </AwardImg>
        </Group>
        <Group width="100%" flexDirection="row-reverse">
          <AwardImg>
            {award5 && (
              <img
                src={award5.fields.file.url}
                alt={award5.fields.file.title}
              />
            )}
            {award5Hover && (
              <img
                className="hover"
                src={award5Hover.fields.file.url}
                alt={award5.fields.file.title}
              />
            )}
          </AwardImg>
          <AwardImg>
            {award6 && (
              <img
                src={award6.fields.file.url}
                alt={award6.fields.file.title}
              />
            )}
            {award6Hover && (
              <img
                className="hover"
                src={award6Hover.fields.file.url}
                alt={award6.fields.file.title}
              />
            )}
          </AwardImg>
        </Group>
        <Group width="100%" flexDirection="row-reverse">
          <AwardImg>
            {award7 && (
              <img
                src={award7.fields.file.url}
                alt={award7.fields.file.title}
              />
            )}
            {award7Hover && (
              <img
                className="hover"
                src={award7Hover.fields.file.url}
                alt={award7.fields.file.title}
              />
            )}
          </AwardImg>
          <AwardImg>
            {award8 && (
              <img
                src={award8.fields.file.url}
                alt={award8.fields.file.title}
              />
            )}
            {award8Hover && (
              <img
                className="hover"
                src={award8Hover.fields.file.url}
                alt={award8.fields.file.title}
              />
            )}
          </AwardImg>
        </Group>
      </AwardsWrap>
    </Wrapper>
  );
};

export default Awards;
