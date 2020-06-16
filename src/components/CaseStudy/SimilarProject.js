// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";
import Reveal from "react-reveal/Reveal";

type TSimilarProjectProps = {
  title: string,
  alt: string,
  src: string,
  url: string,
  ml?: string,
  mr?: string,
  handleLinkChange: Function,
};

const SimilarProjectWrap = styled.div`
  width: 32%;
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  h1 {
    position: absolute;
    margin: 0;
    left: 2rem;
    bottom: 2rem;
    font-size: 3rem;
    font-weight: 300;
    color: white;
  }
`;

const SimilarProject = (props: TSimilarProjectProps) => {
  const { url, src, alt, title, handleLinkChange, ml, mr } = props;
  return (
    <SimilarProjectWrap
      ml={ml}
      mr={mr}
      onClick={() => {
        handleLinkChange(url);
      }}
    >
      <Reveal effect="animate__fadeInUp" duration={1500}>
        <Image height="auto" width="100%" src={src} alt={alt} />
        <h1>{title}</h1>
      </Reveal>
    </SimilarProjectWrap>
  );
};

export default SimilarProject;
