// @flow

import React from "react";
import {
  Wrapper,
  Group,
  FeaturedWorkPreview,
  WorkPreview,
  Image,
} from "../components";
import { useContentful } from "react-contentful";
import ReactPlayer from "react-player";
import playButton from "../static/playButton.png";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

type TWorkProps = {
  handleLinkChange: Function,
};

const CtaText = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  align-self: flex-start;
  margin: 0;
`;

const Work = (props: TWorkProps) => {
  const { handleLinkChange } = props;
  const workData = useContentful({
    contentType: "work",
  });

  const { data, error, fetched, loading } = useContentful({
    contentType: "caseStudy",
  });
  if (loading || !fetched || workData.loading || !workData.fetched) {
    return null;
  }

  if (error || workData.error) {
    console.error(error);
    return null;
  }

  const { items } = data;
  const workFields = workData.data.items[0].fields;

  return (
    <Wrapper>
      <Reveal effect="animate__fadeIn" duration={1500}>
        <Group height="90vh">
          <ReactPlayer
            url={workFields.splash.fields.file.url}
            width="100%"
            height="100%"
            light={workFields.splashPreview.fields.file.url}
            playIcon={
              <Image
                src={playButton}
                alt="play button"
                height="75px"
                width="auto"
              />
            }
          />
        </Group>
      </Reveal>
      <Group mt="4rem">
        {items.map((item, index) => {
          if (item.fields.featured) {
            return (
              <FeaturedWorkPreview
                key={index}
                imgSrc={item.fields.previewImage.fields.file.url || ""}
                imgAlt={item.fields.previewImage.fields.file.title || ""}
                title={item.fields.title || ""}
                subtitle={item.fields.subtitle || ""}
                body={item.fields.body || ""}
                url={item.fields.url || ""}
                handleLinkChange={handleLinkChange}
              />
            );
          } else {
            return null;
          }
        })}
        {items.map((item, index) => {
          if (item.fields.featured === false) {
            return (
              <WorkPreview
                key={index}
                imgSrc={item.fields.previewImage.fields.file.url || ""}
                imgAlt={item.fields.previewImage.fields.file.title || ""}
                title={item.fields.title || ""}
                subtitle={item.fields.subtitle || ""}
                url={item.fields.url || ""}
                handleLinkChange={handleLinkChange}
              />
            );
          } else {
            return null;
          }
        })}
      </Group>
      <Group mt="10rem" mb="10rem" ml="5rem">
        {workFields.cta.content.map((content, index) => {
          return (
            <CtaText>
              <Reveal effect="animate__fadeInUp" duration={1500} wave>
                {content.content[0].value}
              </Reveal>
            </CtaText>
          );
        })}
      </Group>
    </Wrapper>
  );
};

export default Work;
