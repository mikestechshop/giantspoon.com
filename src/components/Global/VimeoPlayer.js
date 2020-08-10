// @flow

import React from "react";
import styled from "styled-components";

type TVimeoPlayerProps = {
  id: string,
};
const VimeoHolder = styled.div`
  padding: 75% 0 0 0;
  .toggle {
    position: absolute;
    top: 20px;
    left: 50%;
    cursor: pointer;
  }
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
  pointer-events: none;
`;

const VimeoPlayer = (props: TVimeoPlayerProps) => {
  const { id } = props;
  return (
    <VimeoHolder>
      <VimeoFrame
        src={`https://player.vimeo.com/video/${id}?autoplay=1&autopause=false&loop=1&title=0&byline=0&portrait=0&muted=1`}
        frameBorder="0"
        allow="autoplay"
        id="video"
      />
      <div
        className="toggle"
        onClick={() => {
          const video = document.querySelector("#video");
          console.log(video);
          // video.contentWindow.postMessage(
          //   '{"method":"setVolume", "value":0}',
          //   "*"
          // );
          video.contentWindow.postMessage(
            '{"method":"setVolume", "value":1}',
            "*"
          );
        }}
      >
        Sound Off
      </div>
    </VimeoHolder>
  );
};

export default VimeoPlayer;
