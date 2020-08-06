// @flow

import React from "react";
import { Wrapper, Slider, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Slide1 from "../../static/slide1.png";

type TWorkProps = {
  caseStudyItems: Array<Object>,
  handleLinkChange: Function,
};
const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
`;
const WorkTitle = styled.h1`
  line-height: 16vh;
  font-size: 12vh;
  font-weight: 300;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
    font-weight: 300;
    word-wrap: break-word;
    &.smaller {
      font-size: 2rem;
    }
  }
`;
const WorkDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  &.see {
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    width: 70%;
    &.desc {
      display: none;
    }
  }
`;

const Work = (props: TWorkProps) => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const { caseStudyItems } = props;

  const featuredCaseStudies = caseStudyItems
    .filter((caseStudy) => {
      return caseStudy.fields.featured;
    })
    .map((caseStudy, index) => {
      console.log(caseStudy);
      return (
        <Group height="100vh">
          <FullImage
            src={caseStudy.fields.previewMedia.fields.file.url}
            alt={caseStudy.fields.previewMedia.fields.title}
          />
          <TextBox>
            <WorkTitle> {caseStudy.fields.campaignTitle} </WorkTitle>
            <WorkDesc className="desc">
              {caseStudy.fields.previewBlurb}
            </WorkDesc>
            <WorkDesc
              onClick={() => {
                props.handleLinkChange(`work/${caseStudy.fields.url}`);
              }}
              className="see"
            >
              See More >
            </WorkDesc>
          </TextBox>
        </Group>
      );
    });
  return (
    <Wrapper>
      <div ref={ref}></div>

      <Slider
        slideId="work-slider"
        slides={[
          <Group height="100vh">
            <FullImage src={Slide1} alt="slide image" />
          </Group>,
          ...featuredCaseStudies,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <WorkTitle className="smaller">Want to See More?</WorkTitle>
              <WorkDesc>
                Wow, you really love case studies. Take a look at more of what
                we’ve made.
              </WorkDesc>
              <WorkDesc
                onClick={() => {
                  props.handleLinkChange(`work/`);
                }}
                className="see"
              >
                See More >
              </WorkDesc>
            </TextBox>
          </Group>,
        ]}
      />
    </Wrapper>
  );
};

export default Work;
