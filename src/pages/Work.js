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

const Work = () => {
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
  console.log(workFields);

  return (
    <Wrapper>
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
              />
            );
          } else {
            return null;
          }
        })}
        {items.map((item, index) => {
          console.log(item);
          if (item.fields.featured === false) {
            return (
              <WorkPreview
                key={index}
                imgSrc={item.fields.previewImage.fields.file.url || ""}
                imgAlt={item.fields.previewImage.fields.file.title || ""}
                title={item.fields.title || ""}
                subtitle={item.fields.subtitle || ""}
              />
            );
          } else {
            return null;
          }
        })}
      </Group>
    </Wrapper>
  );
};

export default Work;
