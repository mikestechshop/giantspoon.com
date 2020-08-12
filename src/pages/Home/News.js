// @flow

import React from "react";
import { Wrapper, Slider, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

type TNewsProps = {
  newsItems: Array<Object>,
};
const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;
  @media (max-width: 1024px) {
    top: 50vh;
  }
`;

const NewsImg = styled.img`
  height: 80px;
  margin-bottom: 1rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const NewsTitle = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
  @media (max-width: 1024px) {
    font-weight: 300;
    margin: 1rem 0rem;
    width: 70vw;
  }
`;
const NewsDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  &.see {
    font-weight: 400;
  }
  a {
    color: #fffcf2;
    text-decoration: none;
  }
  @media (max-width: 1024px) {
    width: 70vw;
    font-size: 0.8rem;
  }
`;

const News = (props: TNewsProps) => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  const newsItemsArray = props.newsItems
    .filter((news, index) => {
      return index < 3;
    })
    .map((news, index) => {
      return (
        <Group height="100vh">
          <FullImage
            className="half"
            src={news.fields.image.fields.file.url}
            alt={news.fields.image.fields.title}
          />
          <TextBox>
            {news.fields.publicationImage && (
              <NewsImg
                src={news.fields.publicationImage.fields.file.url}
                alt={news.fields.publicationImage.fields.title.replace(
                  /'/g,
                  "\u2019"
                )}
              />
            )}

            <NewsTitle> {news.fields.title.replace(/'/g, "\u2019")} </NewsTitle>
            <NewsDesc>{news.fields.blurb.replace(/'/g, "\u2019")}</NewsDesc>
            <NewsDesc className="see">
              <a href={news.fields.url} target="_blank">
                See More >
              </a>
            </NewsDesc>
          </TextBox>
        </Group>
      );
    });

  return (
    <Wrapper height="calc(100vh - calc(100vh - 100%))">
      <div ref={ref}></div>
      <Slider slideId="news-slider" slides={newsItemsArray} />
    </Wrapper>
  );
};

export default News;
