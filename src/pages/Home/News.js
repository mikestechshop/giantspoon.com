// @flow

import React from "react";
import { Wrapper, Slider, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Slide1 from "../../static/pd_loop1.gif";
import Slide2 from "../../static/news-slide-2.png";
import Tribeca from "../../static/tribeca-logo.png";
import Adweek from "../../static/adweek-logo.png";

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
`;

const NewsImg = styled.img`
  height: 80px;
  margin-bottom: 1rem;
`;
const NewsTitle = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const NewsDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
`;

const News = () => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <Wrapper height="100vh">
      <div ref={ref}></div>
      <Slider
        slideId="news-slider"
        slides={[
          <Group height="100vh">
            <FullImage src={Slide1} alt="news image" />
            <TextBox>
              <NewsImg src={Tribeca} />
              <NewsTitle> Title </NewsTitle>
              <NewsDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </NewsDesc>
              <NewsDesc>See More > </NewsDesc>
            </TextBox>
          </Group>,
          <Group height="100vh">
            <FullImage src={Slide2} alt="placeholder" />

            <TextBox>
              <NewsImg src={Adweek} />
              <NewsTitle> Title </NewsTitle>
              <NewsDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </NewsDesc>
              <NewsDesc>See More > </NewsDesc>
            </TextBox>
          </Group>,
        ]}
      />
    </Wrapper>
  );
};

export default News;
