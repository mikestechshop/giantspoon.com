// @flow

import React from "react";
import styled from "styled-components";
import SoundOff from "../../static/sound-off.svg";
import SoundOn from "../../static/sound-on.svg";
import PlayBtn from "../../static/play-btn.svg";
import PauseBtn from "../../static/pause-btn.svg";
type TVimeoPlayerProps = {
  id: string,
  controls?: boolean,
  playVideo?: boolean,
  muteVideo?: boolean,
  setMuteVideo?: Function,
  setPlayVideo?: Function,
};
const VimeoHolder = styled.div`
  padding: 75% 0 0 0;
  .toggle-video {
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    left: 20px;
    bottom: 50px;
    /* right: 24.5px; */
    height: 30px;
  }
  .toggle-sound {
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    left: 60px;
    bottom: 50px;
    /* right: 24.5px; */
    height: 30px;
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
  const {
    id,
    controls,
    playVideo,
    muteVideo,
    setMuteVideo,
    setPlayVideo,
  } = props;

  return (
    <VimeoHolder>
      <VimeoFrame
        src={`https://player.vimeo.com/video/${id}?autoplay=1&autopause=false&loop=1&title=0&byline=0&portrait=0&muted=1&background=1`}
        frameBorder="0"
        allow="autoplay"
        id="video"
      />
      {controls && (
        <>
          <img
            src={playVideo ? PlayBtn : PauseBtn}
            alt="sound icon"
            className="toggle-video"
            onClick={() => {
              const video = document.querySelector("#video");

              if (playVideo) {
                const command = {
                  method: "pause",
                  value: "true",
                };
                // $FlowFixMe
                video.contentWindow.postMessage(command, "*");
              } else {
                const command = {
                  method: "play",
                  value: "true",
                };
                // $FlowFixMe
                video.contentWindow.postMessage(command, "*");
              }
              // $FlowFixMe
              setPlayVideo(!playVideo);
            }}
          />
          <img
            src={muteVideo ? SoundOff : SoundOn}
            alt="sound icon"
            className="toggle-sound"
            onClick={() => {
              const video = document.querySelector("#video");
              if (muteVideo) {
                // $FlowFixMe
                video.contentWindow.postMessage(
                  '{"method":"setVolume", "value":1}',
                  "*"
                );
              } else {
                // $FlowFixMe
                video.contentWindow.postMessage(
                  '{"method":"setVolume", "value":0}',
                  "*"
                );
              }
              // $FlowFixMe
              setMuteVideo(!muteVideo);
            }}
          />
        </>
      )}
    </VimeoHolder>
  );
};

export default VimeoPlayer;
