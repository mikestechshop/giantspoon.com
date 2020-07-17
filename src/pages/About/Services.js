// @flow

import React from "react";
import { Wrapper, Slider, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Slide1 from "../../static/slide1.png";
import Slide2 from "../../static/slide2.png";
import Slide3 from "../../static/slide3.png";
import Slide4 from "../../static/slide4.png";
import { TimelineMax } from "gsap";

const SlideImg = styled.img`
  height: 100%;
  min-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: white;
  cursor: pointer;
`;
const ServicesBigTitle = styled.h1`
  line-height: 110%;
  font-size: 8rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const ServicesSmallTitle = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;
const ServicesDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
`;
const Ball = styled.div`
  height: 16vh;
  width: 16vh;
  background-color: ${(props) => props.color || "white"};
  border-radius: 50%;
  position: absolute;
  z-index: ${(props) => props.zIndex || 0};
`;

const IntroAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 13vh;
  right: 10vw;
  background: none;
`;
const ServicesAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 50vw;
  right: 5vw;
  background: none;
`;
const CreativeAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  background: none;
`;

const MediaAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 60vw;
  top: 0;
  left: 40vw;
  background: none;
`;
const ExpAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  background: none;
`;
const ProAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 60vw;
  top: 0;
  left: 40vw;
  background: none;
`;
const SocialAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 60vw;
  top: 0;
  left: 40vw;
  background: none;
`;
const Work = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  if (inView) {
    var tl = new TimelineMax({ repeat: -1, repeatDelay: 1, yoyo: true });

    tl.set(".ball", { y: "110vh" })
      .add("start")
      .to("#ball1", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .to("#ball2", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .to("#ball3", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .to("#ball4", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .to("#ball5", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .to("#ball6", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .to("#ball7", 0.7, { y: "90vh", ease: "power1.out" }, "start")
      .add("next")
      .to("#ball1", 0.7, { y: "70vh", ease: "power1.out" }, "next")
      .to("#ball2", 0.7, { y: "70vh", ease: "power1.out" }, "next")
      .to("#ball3", 0.7, { y: "70vh", ease: "power1.out" }, "next")
      .to("#ball4", 0.7, { y: "70vh", ease: "power1.out" }, "next")
      .to("#ball5", 0.7, { y: "70vh", ease: "power1.out" }, "next")
      .to("#ball6", 0.7, { y: "70vh", ease: "power1.out" }, "next")
      .add("next2")
      .to("#ball1", 0.7, { y: "50vh", ease: "power1.out" }, "next2")
      .to("#ball2", 0.7, { y: "50vh", ease: "power1.out" }, "next2")
      .to("#ball3", 0.7, { y: "50vh", ease: "power1.out" }, "next2")
      .to("#ball4", 0.7, { y: "50vh", ease: "power1.out" }, "next2")
      .to("#ball5", 0.7, { y: "50vh", ease: "power1.out" }, "next2")
      .add("next3")
      .to("#ball1", 0.7, { y: "30vh", ease: "power1.out" }, "next3")
      .to("#ball2", 0.7, { y: "30vh", ease: "power1.out" }, "next3")
      .to("#ball3", 0.7, { y: "30vh", ease: "power1.out" }, "next3")
      .to("#ball4", 0.7, { y: "30vh", ease: "power1.out" }, "next3")
      .add("next4")
      .to("#ball1", 0.7, { y: "10vh", ease: "power1.out" }, "next4")
      .to("#ball2", 0.7, { y: "10vh", ease: "power1.out" }, "next4")
      .to("#ball3", 0.7, { y: "10vh", ease: "power1.out" }, "next4")
      .add("next5")
      .to("#ball1", 0.7, { y: "-10vh", ease: "power1.out" }, "next5")
      .to("#ball2", 0.7, { y: "-10vh", ease: "power1.out" }, "next5")
      .add("next6")
      .to("#ball1", 0.7, { y: "-30vh", ease: "power1.out" }, "next6")
      .add("next7")
      .to("#ball7", 0.7, { y: "70vh", ease: "power1.out" }, "next7")
      .add("next8")
      .to("#ball6", 0.7, { y: "50vh", ease: "power1.out" }, "next8")
      .to("#ball7", 0.7, { y: "50vh", ease: "power1.out" }, "next8")
      .add("next9")
      .to("#ball5", 0.7, { y: "30vh", ease: "power1.out" }, "next9")
      .to("#ball6", 0.7, { y: "30vh", ease: "power1.out" }, "next9")
      .to("#ball7", 0.7, { y: "30vh", ease: "power1.out" }, "next9")
      .add("next10")
      .to("#ball4", 0.7, { y: "10vh", ease: "power1.out" }, "next10")
      .to("#ball5", 0.7, { y: "10vh", ease: "power1.out" }, "next10")
      .to("#ball6", 0.7, { y: "10vh", ease: "power1.out" }, "next10")
      .to("#ball7", 0.7, { y: "10vh", ease: "power1.out" }, "next10")
      .add("next11")
      .to("#ball3", 0.7, { y: "-10vh", ease: "power1.out" }, "next11")
      .to("#ball4", 0.7, { y: "-10vh", ease: "power1.out" }, "next11")
      .to("#ball5", 0.7, { y: "-10vh", ease: "power1.out" }, "next11")
      .to("#ball6", 0.7, { y: "-10vh", ease: "power1.out" }, "next11")
      .to("#ball7", 0.7, { y: "-10vh", ease: "power1.out" }, "next11")
      .add("next12")
      .to("#ball2", 0.7, { y: "-30vh", ease: "power1.out" }, "next12")
      .to("#ball3", 0.7, { y: "-30vh", ease: "power1.out" }, "next12")
      .to("#ball4", 0.7, { y: "-30vh", ease: "power1.out" }, "next12")
      .to("#ball5", 0.7, { y: "-30vh", ease: "power1.out" }, "next12")
      .to("#ball6", 0.7, { y: "-30vh", ease: "power1.out" }, "next12")
      .to("#ball7", 0.7, { y: "-30vh", ease: "power1.out" }, "next12");
    tl.play();

    var tl2 = new TimelineMax({ repeat: -1 });
    tl2
      .set("#service-ball1", { y: "20vh", x: "12vw" })
      .set("#service-ball2", { y: "20vh", x: "30vw" })
      .set("#service-ball3", { y: "42.5vh", x: "3vw" })
      .set("#service-ball4", { y: "42.5vh", x: "38vw" })
      .set("#service-ball5", { y: "65vh", x: "12vw" })
      .set("#service-ball6", { y: "65vh", x: "30vw" })
      .set("#service-ball7", { y: "20vh", x: "12vw" })
      .to("#service-ball1", 1.5, { y: "20vh", x: "30vw" })
      .to("#service-ball1", 1.5, { y: "42.5vh", x: "3vw" })
      .to("#service-ball1", 1.5, { y: "42.5vh", x: "38vw" })
      .to("#service-ball1", 1.5, { y: "65vh", x: "12vw" })
      .to("#service-ball1", 1.5, { y: "65vh", x: "30vw" })
      .to("#service-ball1", 1.5, { y: "20vh", x: "12vw" })
      .fromTo(
        "#services-animation",
        9,
        {
          rotation: 0,
        },
        {
          rotation: 360,
          duration: 1,
          ease: "power1.inOut",
        },
        0
      );
    tl2.play();

    var tl3 = new TimelineMax({ repeat: -1 });
    tl3
      .set("#creative-animation div", { y: "42vh", x: "50vw" })
      .set("#creative-ball6", { x: "-20vw" })
      .to("#creative-ball6", 1, { x: "50vw" })
      .add("start", "-=0.2")
      .to("#creative-ball2", 1, { y: "28vh", x: "60vw" }, "start")
      .to("#creative-ball3", 1, { y: "56vh", x: "60vw" }, "start")
      .to("#creative-ball4", 1.1, { y: "28vh", x: "70vw" }, "start")
      .to("#creative-ball5", 1.1, { y: "56vh", x: "70vw" }, "start")
      .to("#creative-ball1", 1.2, { x: "80vw" }, "start")
      .add("next", "+=1")
      .to("#creative-animation div", 2, { x: "+=60vw" }, "next");

    var tl4 = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 1 });
    tl4
      .set("#media-ball1", { x: 0, y: "34vh" })
      .set("#media-ball2", { x: "32vh", y: "34vh" })
      .set("#media-ball3", { x: "64vh", y: "34vh" })
      .set("#media-ball4", { x: "16vh", y: "50vh" })
      .set("#media-ball5", { x: "48vh", y: "50vh" })
      .set("#media-ball6", { x: "80vh", y: "50vh" })
      .add("start")
      .to("#media-ball1", 3, { y: "50vh", ease: "power2.easeIn" }, "start")
      .to("#media-ball2", 3, { y: "50vh", ease: "power2.easeIn" }, "start")
      .to("#media-ball3", 3, { y: "50vh", ease: "power2.easeIn" }, "start")
      .to("#media-ball4", 3, { y: "34vh", ease: "power2.easeIn" }, "start")
      .to("#media-ball5", 3, { y: "34vh", ease: "power2.easeIn" }, "start")
      .to("#media-ball6", 3, { y: "34vh", ease: "power2.easeIn" }, "start");

    var tl4 = new TimelineMax({ repeat: -1 });
    tl4
      .set("#exp-animation div", { y: "15", x: "120vw" })
      .add("start")
      .staggerTo(
        "#exp-animation div",
        2,
        { y: "84vh", x: "60vw", ease: "linear" },
        0.5,
        "start"
      )
      .staggerTo(
        "#exp-animation div",
        2,
        { y: "-20vh", x: "10vw", ease: "linear" },
        0.5,
        "start+=1.75"
      );

    var tl5 = new TimelineMax({ repeat: -1 })
      .set("#pro-ball1", {
        x: "-50%",
        left: "50%",
        y: "20vh",
      })
      .set("#pro-ball2", {
        x: "-125%",
        left: "50%",
        y: "40vh",
      })
      .set("#pro-ball3", {
        x: "25%",
        left: "50%",
        y: "40vh",
      })
      .set("#pro-ball4", {
        x: "-200%",
        left: "50%",
        y: "60vh",
      })
      .set("#pro-ball5", {
        x: "-50%",
        left: "50%",
        y: "60vh",
      })
      .set("#pro-ball6", {
        x: "100%",
        left: "50%",
        y: "60vh",
      })
      .set("#pro-animation div", {
        y: "-=100vh",
      })
      .staggerTo(
        "#pro-animation div",
        2,
        { y: "+=100vh", ease: "power4.inOut" },
        0.2
      )
      .staggerTo(
        "#pro-animation div",
        2,
        { y: "+=100vh", ease: "power4.inOut" },
        -0.2,
        "+=1"
      );

    var tl6 = new TimelineMax({ repeat: -1 })
      .set("#social-animation div", {
        x: "25vw",
        y: "46vh",
      })
      .add("start")
      .to(
        "#social-ball2",
        2,
        { y: "65vh", x: "35vw", ease: "power2.inOut" },
        "start"
      )
      .to(
        "#social-ball3",
        2,
        { y: "65vh", x: "35vw", ease: "power2.inOut" },
        "start"
      )
      .to(
        "#social-ball4",
        2,
        { y: "65vh", x: "35vw", ease: "power2.inOut" },
        "start"
      )
      .to(
        "#social-ball5",
        2,
        { y: "65vh", x: "35vw", ease: "power2.inOut" },
        "start"
      )
      .to(
        "#social-ball6",
        2,
        { y: "65vh", x: "35vw", ease: "power2.inOut" },
        "start"
      )
      .add("next")
      .to(
        "#social-ball3",
        2,
        { y: "65vh", x: "15vw", ease: "power2.inOut" },
        "next"
      )
      .to(
        "#social-ball6",
        2,
        { y: "65vh", x: "15vw", ease: "power2.inOut" },
        "next"
      )
      .to(
        "#social-ball4",
        2,
        { y: "36vh", x: "40vw", ease: "power2.inOut" },
        "next"
      )
      .to(
        "#social-ball5",
        2,
        { y: "36vh", x: "40vw", ease: "power2.inOut" },
        "next"
      )
      .add("next2")
      .to(
        "#social-ball5",
        2,
        { y: "20vh", x: "25vw", ease: "power2.inOut" },
        "next2"
      )
      .to(
        "#social-ball6",
        2,
        { y: "36vh", x: "10vw", ease: "power2.inOut" },
        "next2"
      )
      .to("#social-ball2", 1, { y: "36vh", x: "40vw", ease: "power2.inOut" })
      .add("next3")
      .to(
        "#social-ball2",
        1,
        { y: "20vh", x: "25vw", ease: "power2.inOut" },
        "next3"
      )
      .to(
        "#social-ball4",
        1,
        { y: "20vh", x: "25vw", ease: "power2.inOut" },
        "next3"
      )
      .add("next4")
      .to(
        "#social-ball2",
        1,
        { y: "36vh", x: "10vw", ease: "power2.inOut" },
        "next4"
      )
      .to(
        "#social-ball4",
        1,
        { y: "36vh", x: "10vw", ease: "power2.inOut" },
        "next4"
      )
      .to(
        "#social-ball5",
        1,
        { y: "36vh", x: "10vw", ease: "power2.inOut" },
        "next4"
      )
      .add("next5")
      .to(
        "#social-ball2",
        1,
        { y: "65vh", x: "15vw", ease: "power2.inOut" },
        "next5"
      )
      .to(
        "#social-ball4",
        1,
        { y: "65vh", x: "15vw", ease: "power2.inOut" },
        "next5"
      )
      .to(
        "#social-ball5",
        1,
        { y: "65vh", x: "15vw", ease: "power2.inOut" },
        "next5"
      )
      .to(
        "#social-ball6",
        1,
        { y: "65vh", x: "15vw", ease: "power2.inOut" },
        "next5"
      )
      .add("next6")
      .to(
        "#social-ball2",
        1,
        { x: "25vw", y: "46vh", ease: "power2.inOut" },
        "next6"
      )
      .to(
        "#social-ball4",
        1,
        { x: "25vw", y: "46vh", ease: "power2.inOut" },
        "next6"
      )
      .to(
        "#social-ball5",
        1,
        { x: "25vw", y: "46vh", ease: "power2.inOut" },
        "next6"
      )
      .to(
        "#social-ball6",
        1,
        { x: "25vw", y: "46vh", ease: "power2.inOut" },
        "next6"
      )
      .to(
        "#social-ball3",
        1,
        { x: "25vw", y: "46vh", ease: "power2.inOut" },
        "next6"
      );
  }

  return (
    <Wrapper>
      <div ref={ref}></div>

      <Slider
        slideId="work-slider"
        slides={[
          <Group height="100vh" bgc="#B1C3D6">
            <TextBox>
              <ServicesSmallTitle>Social </ServicesSmallTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <SocialAnimation id="social-animation">
              <Ball id="social-ball1" color="#0033A0" zIndex={9} />
              <Ball id="social-ball2" color="#FFFCF2" />
              <Ball id="social-ball3" color="#FFFCF2" />
              <Ball id="social-ball4" color="#FFFCF2" />
              <Ball id="social-ball5" color="#FFFCF2" />
              <Ball id="social-ball6" color="#FFFCF2" />
            </SocialAnimation>
          </Group>,
          <Group height="100vh" bgc="#B1C3D6">
            <TextBox>
              <ServicesSmallTitle>Production </ServicesSmallTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <ProAnimation id="pro-animation">
              <Ball id="pro-ball1" color="#0033A0" />
              <Ball id="pro-ball2" color="#FFFCF2" />
              <Ball id="pro-ball3" color="#FFFCF2" />
              <Ball id="pro-ball4" color="#FFFCF2" />
              <Ball id="pro-ball5" color="#FFFCF2" />
              <Ball id="pro-ball6" color="#FFFCF2" />
            </ProAnimation>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle>Experiential </ServicesSmallTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <ExpAnimation id="exp-animation">
              <Ball id="exp-ball1" color="#B1C3D6" />
              <Ball id="exp-ball2" color="#FFFCF2" />
              <Ball id="exp-ball3" color="#FFFCF2" />
              <Ball id="exp-ball4" color="#FFFCF2" />
              <Ball id="exp-ball5" color="#FFFCF2" />
              <Ball id="exp-ball6" color="#FFFCF2" />
            </ExpAnimation>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle>Media </ServicesSmallTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <MediaAnimation id="media-animation">
              <Ball id="media-ball1" color="#B1C3D6" />
              <Ball id="media-ball2" color="#FFFCF2" />
              <Ball id="media-ball3" color="#FFFCF2" />
              <Ball id="media-ball4" color="#FFFCF2" />
              <Ball id="media-ball5" color="#FFFCF2" />
              <Ball id="media-ball6" color="#FFFCF2" />
            </MediaAnimation>
          </Group>,
          <Group height="100vh" bgc="#0033A0">
            <TextBox>
              <ServicesSmallTitle> Creative </ServicesSmallTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <CreativeAnimation id="creative-animation">
              <Ball id="creative-ball1" color="#FE9B96" />
              <Ball id="creative-ball2" color="#FFFCF2" />
              <Ball id="creative-ball3" color="#FFFCF2" />
              <Ball id="creative-ball4" color="#FFFCF2" />
              <Ball id="creative-ball5" color="#FFFCF2" />
              <Ball id="creative-ball6" color="#FFFCF2" />
            </CreativeAnimation>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesBigTitle> Title </ServicesBigTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <IntroAnimation id="intro-animation">
              <Ball id="ball1" color="#FE9B96" className="ball" zIndex={9} />
              <Ball id="ball2" color="#B1C3D6" className="ball" />
              <Ball id="ball3" color="#B1C3D6" className="ball" />
              <Ball id="ball4" color="#B1C3D6" className="ball" />
              <Ball id="ball5" color="#B1C3D6" className="ball" />
              <Ball id="ball6" color="#B1C3D6" className="ball" />
              <Ball id="ball7" color="#B1C3D6" className="ball" />
            </IntroAnimation>
          </Group>,
          <Group height="100vh" bgc="#B1C3D6">
            <TextBox>
              <ServicesBigTitle> Title </ServicesBigTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
            </TextBox>
            <ServicesAnimation id="services-animation">
              <Ball id="service-ball1" color="#0033A0" zIndex={9} />
              <Ball id="service-ball2" color="#FFFCF2" />
              <Ball id="service-ball3" color="#FFFCF2" />
              <Ball id="service-ball4" color="#FFFCF2" />
              <Ball id="service-ball5" color="#FFFCF2" />
              <Ball id="service-ball6" color="#FFFCF2" />
              <Ball id="service-ball7" color="#FFFCF2" />
            </ServicesAnimation>
          </Group>,

          <Group height="100vh">
            <SlideImg src={Slide3} />
            <TextBox>
              <ServicesBigTitle> Title </ServicesBigTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
              <ServicesDesc>See More > </ServicesDesc>
            </TextBox>
          </Group>,
          <Group height="100vh">
            <SlideImg src={Slide4} />
            <TextBox>
              <ServicesBigTitle> Title </ServicesBigTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
              <ServicesDesc>See More > </ServicesDesc>
            </TextBox>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesBigTitle>
                Lorem ipsum <br /> About Our Work
              </ServicesBigTitle>
              <ServicesDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                commodo, bibendum id interdum lobortis praesent lectus.
                Ullamcorper non pretium tincidunt felis amet. A eget tellus et,
                amet, accumsan.
              </ServicesDesc>
              <ServicesDesc>See More > </ServicesDesc>
            </TextBox>
          </Group>,
        ]}
      />
    </Wrapper>
  );
};

export default Work;
