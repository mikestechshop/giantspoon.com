// @flow

import React from "react";
import styled from "styled-components";

type TVimeoPlayerProps = {
  id: string,
};
const VimeoHolder = styled.div`
  padding: 75% 0 0 0;
  pointer-events: none;
`;
const VimeoFrame = styled.iframe`
  box-sizing: border-box;
  height: 56.25vw;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  width: 177.77777778vh;
`;

const VimeoPlayer = (props: TVimeoPlayerProps) => {
  const { id } = props;
  return (
    <VimeoHolder>
      <VimeoFrame
        src={`https://player.vimeo.com/video/${id}?autoplay=1&autopause=false&loop=1&title=0&byline=0&portrait=0&background=1&muted=1`}
        frameBorder="0"
        allow="autoplay"
      />
    </VimeoHolder>
  );
};

export default VimeoPlayer;
