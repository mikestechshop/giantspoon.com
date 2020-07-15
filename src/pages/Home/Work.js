// @flow

import React from "react";
import { Wrapper, Slider, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Slide1 from "../../static/slide1.png";
import Slide2 from "../../static/slide2.png";
import Slide3 from "../../static/slide3.png";
import Slide4 from "../../static/slide4.png";

const SlideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

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

const Work = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper>
      <div ref={ref}></div>

      <Slider
        slideId="work-slider"
        slides={[
          <Group height="100vh">
            <SlideImg src={Slide1} />
          </Group>,
          <Group height="100vh">
            <SlideImg src={Slide2} />
            <TextBox>
              <WorkTitle> Title </WorkTitle>
              <WorkDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </WorkDesc>
              <WorkDesc>See More > </WorkDesc>
            </TextBox>
          </Group>,
          <Group height="100vh">
            <SlideImg src={Slide3} />
            <TextBox>
              <WorkTitle> Title </WorkTitle>
              <WorkDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </WorkDesc>
              <WorkDesc>See More > </WorkDesc>
            </TextBox>
          </Group>,
          <Group height="100vh">
            <SlideImg src={Slide4} />
            <TextBox>
              <WorkTitle> Title </WorkTitle>
              <WorkDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </WorkDesc>
              <WorkDesc>See More > </WorkDesc>
            </TextBox>
          </Group>,
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
