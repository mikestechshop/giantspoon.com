// @flow

import React from "react";
import { Wrapper, Slider, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Slide1 from "../../static/slide1.png";

type TWorkProps = {
  caseStudyItems: Array<Object>,
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
  line-height: 110%;
  font-size: 8rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const WorkDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
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
      return (
        <Group height="100vh">
          <FullImage
            src={caseStudy.fields.previewMedia.fields.file.url}
            alt={caseStudy.fields.previewMedia.fields.title}
          />
          <TextBox>
            <WorkTitle> {caseStudy.fields.campaignTitle} </WorkTitle>
            <WorkDesc>{caseStudy.fields.previewBlurb}</WorkDesc>
            <WorkDesc>See More > </WorkDesc>
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
              <WorkTitle>
                Lorem ipsum <br /> About Our Work
              </WorkTitle>
              <WorkDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </WorkDesc>
              <WorkDesc>See More > </WorkDesc>
            </TextBox>
          </Group>,
        ]}
      />
    </Wrapper>
  );
};

export default Work;
