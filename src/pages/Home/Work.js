// @flow

import React from "react";
import {
  Wrapper,
  Slider,
  Group,
  FullImage,
  VimeoPlayer,
} from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import SeeMoreVideo from "../../static/videos/services/see_more.webm";
import SeeMoreVideoMobile from "../../static/videos/services/see_more_portrait.webm";

type TWorkProps = {
  caseStudyItems: Array<Object>,
  handleLinkChange: Function,
  vimeoId: string,
};
const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;
  z-index: 1;
`;
const WorkTitle = styled.h1`
  line-height: 16vh;
  font-size: 12vh;
  font-weight: 300;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
    font-weight: 300;
    line-height: 3.5rem;
    margin-bottom: 1rem;
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

const Vid = styled.video`
  position: absolute;
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
`;
const Work = (props: TWorkProps) => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const { caseStudyItems, vimeoId } = props;

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
            <VimeoPlayer id={vimeoId} />
          </Group>,
          ...featuredCaseStudies,
          <Group height="100vh" bgc="#0C2340">
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={
                  window.innerWidth > 1025 ? SeeMoreVideo : SeeMoreVideoMobile
                }
                type="video/webm"
              />
            </Vid>
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
