// @flow

import React from "react";
import { Wrapper, Slider, Group } from "../../components";
import styled from "styled-components";
import ServicesVideo from "../../static/videos/services/ladder.webm";
import ServicesVideoMobile from "../../static/videos/services/ladder_portrait.webm";
import StrategyVideo from "../../static/videos/services/carousel.webm";
import StrategyVideoMobile from "../../static/videos/services/carousel_portrait.webm";
import CreativeVideo from "../../static/videos/services/origami.webm";
import CreativeVideoMobile from "../../static/videos/services/origami_portrait.webm";
import ExperiencialVideo from "../../static/videos/services/triangle.webm";
import ExperiencialVideoMobile from "../../static/videos/services/triangle_portrait.webm";
import ProductionVideo from "../../static/videos/services/pyramid.webm";
import ProductionVideoMobile from "../../static/videos/services/pyramid_portrait.webm";
import SocialVideo from "../../static/videos/services/pentagon.webm";
import SocialVideoMobile from "../../static/videos/services/pentagon_portrait.webm";
import MediaVideo from "../../static/videos/services/pendulum.webm";
import MediaVideoMobile from "../../static/videos/services/pendulum_portrait.webm";

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;
  @media (max-width: 1024px) {
  }
`;

const ServicesSmallTitle = styled.h1`
  line-height: 110%;
  font-size: 6rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;
const ServicesDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    font-weight: 300;
    width: 70%;
  }
`;

const Vid = styled.video`
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
`;
const Work = () => {
  return (
    <Wrapper>
      <Slider
        slideId="work-slider"
        slides={[
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle>What We Do</ServicesSmallTitle>
              <ServicesDesc>
              We believe brands need more than a TV campaign to prove their worth,
and we’re just crazy enough to try anything. Sure, we can craft a big beautiful commercial, but we prefer pushing the limits, exploring new formats, avenues and media outlets to create transformative work that drives business value.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={
                  window.innerWidth > 1025 ? ServicesVideo : ServicesVideoMobile
                }
                type="video/webm"
              />
            </Vid>
          </Group>,
          <Group height="100vh" bgc="#B1C3D6">
            <TextBox>
              <ServicesSmallTitle> Strategy</ServicesSmallTitle>
              <ServicesDesc>
                We don’t look at brands for what they are, but what they could
                be. We read between the lines of client briefs, scour the far
                corners of culture, and challenge accepted wisdom to help our
                partners unlock the potential buried within their brand. We
                aren’t just brief writers, but critical collaborators that stay
                involved every step of the way.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={
                  window.innerWidth > 1025 ? StrategyVideo : StrategyVideoMobile
                }
                type="video/webm"
              />
            </Vid>
          </Group>,

          <Group height="100vh" bgc="#0033A0">
            <TextBox>
              <ServicesSmallTitle> Creative </ServicesSmallTitle>
              <ServicesDesc>
                Builders of brand worlds and silver-tongued storytellers. Our
                creative team cracks the big idea then sets out to craft a brand
                universe you want to live in. They’re a ragtag team of
                multi-faceted, multi-format makers that know their way around a
                brief.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={
                  window.innerWidth > 1025 ? CreativeVideo : CreativeVideoMobile
                }
                type="video/webm"
              />
            </Vid>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle>Media </ServicesSmallTitle>
              <ServicesDesc>
                We’re the most creative media practitioners in the world. Full
                stop. We look at the marketplace as a canvas to bring brands to
                life and believe that media isn’t bought, but built. Our
                programs help brands punch above their spend and make the market
                turn its multi-billion dollar head.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={window.innerWidth > 1025 ? MediaVideo : MediaVideoMobile}
                type="video/webm"
              />
            </Vid>
          </Group>,
          <Group height="100vh" bgc="#B1C3D6">
            <TextBox>
              <ServicesSmallTitle>Production </ServicesSmallTitle>
              <ServicesDesc>
                Primo negotiators and artistic collaborators. Our producers have
                premiered films with Hollywood Heavyweights, made social series
                with eSports titans, and erected a nearfi ghost town on the
                outskirts of Texas. This team of film, experiential, and
                integrated producers can make even the wildest dreams a reality,
                no matter the size.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={
                  window.innerWidth > 1025
                    ? ProductionVideo
                    : ProductionVideoMobile
                }
                type="video/webm"
              />
            </Vid>
          </Group>,
          <Group height="100vh" bgc="#0033A0">
            <TextBox>
              <ServicesSmallTitle>Social </ServicesSmallTitle>
              <ServicesDesc>
                We speak your language...whatever that may be. Our social team
                is stacked with troll slayers, meme masters, and strategic
                platform hackers who can inject our Spoon-y flair for
                conversation into your feed to make something remarkable.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={window.innerWidth > 1025 ? SocialVideo : SocialVideoMobile}
                type="video/webm"
              />
            </Vid>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle>Experiential </ServicesSmallTitle>
              <ServicesDesc>
                We build immersive experiences people would pay to attend. What
                sets us apart is the strategy that sits at the core of our
                offering &#8212; ensuring every partition or parting gift
                belongs to the world that we’ve created.
              </ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source
                id="mp4"
                src={
                  window.innerWidth > 1025
                    ? ExperiencialVideo
                    : ExperiencialVideoMobile
                }
                type="video/webm"
              />
            </Vid>
          </Group>,
        ]}
      />
    </Wrapper>
  );
};

export default Work;
