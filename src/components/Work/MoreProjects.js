// @flow

import React from "react";
import styled from "styled-components";
import { Image, SmallSlider, Group } from "../../components";

type TMoreProjectsProps = {
  projects: Array<Object>,
  handleLinkChange: Function,
};

const CampaignType = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 140%;
  text-transform: uppercase;
  font-family: interstate-mono, monospace;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
`;
const NewsTitle = styled.div`
  font-size: 4rem;
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-left: 10vw;
  color: #b1c3d6;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 4vh;
  }
`;
const Info = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  postion: relative;
  opacity: 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }

  .text {
    line-height: 140%;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: ${(props) => props.fw || 300};
    color: #fffcf2;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
  }

  @media (max-width: 1024px) {
    opacity: 1;
    background: none;
    margin-bottom: 10vh;
    .text {
      top: 85%;
    }
  }
`;

const MoreProjects = (props: TMoreProjectsProps) => {
  console.log(props.projects);
  return (
    <Group height="100vh" flexAlign="flex-start">
      <NewsTitle> More Projects </NewsTitle>
      <Group height={window.innerWidth > 1025 ? "50vh" : "80vh"}>
        <SmallSlider
          slideId="news-slide"
          slides={props.projects.map((project) => {
            return (
              <Group height="100%">
                <Image
                  height="50vh"
                  width="auto"
                  src={project.fields.previewMedia.fields.file.url}
                  alt={project.fields.previewMedia.fields.title}
                />
                <Info>
                  <div
                    className="text"
                    onClick={() => {
                      props.handleLinkChange(`/work/${project.fields.url}`);
                    }}
                  >
                    <CampaignType> {project.fields.campaignType} </CampaignType>
                    {project.fields.clientTitle} <br />
                    <strong>{project.fields.campaignTitle} </strong>
                  </div>
                </Info>
              </Group>
            );
          })}
        />
      </Group>
    </Group>
  );
};

export default MoreProjects;
