// @flow

import React from "react";
import styled from "styled-components";
import { Image, SmallSlider, Group } from "../../components";
import Damn from "../../static/damn.png";

type TMoreProjectsProps = {
  projects: Array<Object>,
};
const NewsTitle = styled.div`
  font-size: 4rem;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 10vw;
  color: #b1c3d6;
`;

const MoreProjects = (props: TMoreProjectsProps) => {
  console.log(props.projects);
  return (
    <Group height="100vh" flexAlign="flex-start">
      <NewsTitle> More Projects </NewsTitle>
      <Group height="50vh">
        <SmallSlider
          slideId="news-slide"
          slides={props.projects.map((project) => {
            return (
              <Group height="100%">
                <Image
                  height="100%"
                  width="auto"
                  src={project.fields.previewMedia.fields.file.url}
                  alt={project.fields.previewMedia.fields.title}
                />
              </Group>
            );
          })}
        />
      </Group>
    </Group>
  );
};

export default MoreProjects;
