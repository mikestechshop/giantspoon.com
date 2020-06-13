// @flow

import React from "react";
import {
  Wrapper,
  Group,
  FeaturedWorkPreview,
  WorkPreview,
} from "../components";
import { useContentful } from "react-contentful";

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

  return (
    <Wrapper>
      <Group height="80vh">
        <img
          alt={workFields.splash.fields.title || ""}
          src={workFields.splash.fields.file.url || ""}
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
