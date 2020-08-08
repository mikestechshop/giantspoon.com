// @flow

import React, { useState } from "react";
import { Wrapper, Slider, Group } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TimelineMax } from "gsap";
import ContactVideo from "../../static/videos/spinning_circles.mp4";

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  text-align: left;
  color: white;
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
const Ball = styled.div`
  height: 10vw;
  width: 10vw;
  min-width: 100px;
  min-height: 100px;
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

  .ball {
    opacity: 0;
  }
  @media (max-width: 1024px) {
    right: 34vw;
  }
`;
const ServicesAnimation = styled.div`
  height: 50vw;
  position: absolute;
  width: 50vw;
  top: 50%;
  transform: translateY(-50%);
  right: 5vw;
  background: none;
  @media (max-width: 1024px) {
    width: 80vw;
    height: 80vw;
    right: 10vw;
    top: 30%;
    .ball(
      max-height: 75px;
      max-width: 75px;
    )
  }
`;
const CreativeAnimation = styled.div`
  height: 60vh;
  position: absolute;
  width: 60vw;
  top: 20vh;
  right: 0;
  background: none;
  div {
    width: 10vw;
    height: 10vw;
  }
  @media (max-width: 1024px) {
    top: 5vh;
    right: 20%;
  }
`;

const MediaAnimation = styled.div`
  height: 100vh;
  position: absolute;
  width: 60vw;
  top: 0;
  left: 40vw;
  background: none;

  @media (max-width: 1024px) {
    left: 0;
    top: -20vh;
  }
`;
const ExpAnimation = styled.div`
  height: 50vh;
  position: absolute;
  width: 60vw;
  top: 25vh;
  right: 5vw;
  background: none;
  .container {
    width: 30vw;
    height: 30vw;
    position: absolute;
    top: 0;
    transform-origin: center;
    &:nth-child(1) {
      left: 58%;
    }
    &:nth-child(2) {
      left: 21%;
      transform: rotate(60deg);
      top: 25%;
    }
    .exp-ball {
      &:nth-child(1) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
      }
      &:nth-child(2) {
        top: 50%;
        left: 50%;
        transform: translate(10%, 0%);
      }
      &:nth-child(3) {
        top: 50%;
        left: 50%;
        transform: translate(-110%, 0%);
      }
    }
  }
  .exp-ball {
    width: 10vw;
    height: 10vw;
    top: 0;
    left: 0;
  }
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
const Vid = styled.video`
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
`;
const Work = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const [animationRun, setAnimationRun] = useState(false);
  if (inView && !animationRun) {
    setAnimationRun(true);
    var tl = new TimelineMax({ repeat: -1, repeatDelay: 1, yoyo: true });

    tl.set(".ball", { y: "110vh", opacity: 1 })
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
      .set("#service-ball1", { top: "50%", left: "50%", y: "-50%", x: "100%" })
      .set("#service-ball2", { top: "50%", left: "50%", y: "-50%", x: "100%" })
      .set("#service-ball3", {
        top: "50%",
        left: "50%",
        y: "-50%",
        x: "-200%",
      })
      .set("#service-ball4", {
        top: "50%",
        left: "50%",
        y: "-200%",
        x: "-150%",
      })
      .set("#service-ball5", { top: "50%", left: "50%", y: "-200%", x: "50%" })
      .set("#service-ball6", { top: "50%", left: "50%", y: "100%", x: "50%" })
      .set("#service-ball7", {
        top: "50%",
        left: "50%",
        y: "100%",
        x: "-150%",
      })
      .to("#service-ball1", 1.5, {
        top: "50%",
        left: "50%",
        y: "-50%",
        x: "-200%",
      })
      .to("#service-ball1", 1.5, {
        top: "50%",
        left: "50%",
        y: "-200%",
        x: "-150%",
      })
      .to("#service-ball1", 1.5, {
        top: "50%",
        left: "50%",
        y: "-200%",
        x: "50%",
      })
      .to("#service-ball1", 1.5, {
        top: "50%",
        left: "50%",
        y: "100%",
        x: "50%",
      })
      .to("#service-ball1", 1.5, {
        top: "50%",
        left: "50%",
        y: "100%",
        x: "-150%",
      })
      .to("#service-ball1", 1.5, {
        top: "50%",
        left: "50%",
        y: "-50%",
        x: "100%",
      })
      .fromTo(
        "#services-animation",
        1.5,
        {
          rotation: 0,
        },
        {
          rotation: 60,
          duration: 1,
          ease: "power1.inOut",
        },
        0
      )
      .fromTo(
        "#services-animation",
        1.5,
        {
          rotation: 60,
        },
        {
          rotation: 120,
          duration: 1,
          ease: "power1.inOut",
        },
        1.5
      )
      .fromTo(
        "#services-animation",
        1.5,
        {
          rotation: 120,
        },
        {
          rotation: 180,
          duration: 1,
          ease: "power1.inOut",
        },
        3
      )
      .fromTo(
        "#services-animation",
        1.5,
        {
          rotation: 180,
        },
        {
          rotation: 240,
          duration: 1,
          ease: "power1.inOut",
        },
        4.5
      )
      .fromTo(
        "#services-animation",
        1.5,
        {
          rotation: 240,
        },
        {
          rotation: 300,
          duration: 1,
          ease: "power1.inOut",
        },
        6
      )
      .fromTo(
        "#services-animation",
        1.5,
        {
          rotation: 300,
        },
        {
          rotation: 360,
          duration: 1,
          ease: "power1.inOut",
        },
        7.5
      );
    tl2.play();

    var tl3 = new TimelineMax({ repeat: -1 });
    tl3
      .set("#creative-animation div", {
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      })
      .add("step1")
      .to("#creative-ball2", 1, { y: "-170%", x: "-50%" }, "step1")
      .to("#creative-ball3", 1, { y: "70%", x: "-50%" }, "step1")
      .to("#creative-ball4", 1, { x: "-170%", y: "-50%" }, "step1")
      .to("#creative-ball5", 1, { x: "70%", y: "-50%" }, "step1")
      .to("#creative-ball6", 1, { y: "-170%", x: "-50%" }, "step1")
      .add("step2")
      .to("#creative-ball6", 1, { y: "-170%", x: "70%" }, "step2")
      .add("step3")
      .to("#creative-ball5", 1, { y: "70%", x: "70%" }, "step3")
      .add("step4")
      .to("#creative-ball5", 1, { y: "70%", x: "-50%" }, "step4")
      .to("#creative-ball6", 1, { y: "-170%", x: "-50%" }, "step4")
      .to("#creative-ball1", 1, { y: "-50%", x: "70%" }, "step4")
      .to("#creative-ball4", 1, { y: "-50%", x: "-50%" }, "step4")
      .to("#creative-ball3", 1, { y: "70%", x: "-170%" }, "step4")
      .to("#creative-ball2", 1, { y: "-170%", x: "-170%" }, "step4")
      .add("step5")
      .to("#creative-ball2", 1, { y: "-50%", x: "-170%" }, "step5")
      .add("step6")
      .to("#creative-ball5", 1, { y: "70%", x: "70%" }, "step6")
      .add("step7")
      .to("#creative-ball5", 1, { y: "-50%", x: "70%" }, "step7")
      .to("#creative-ball1", 1, { y: "-170%", x: "70%" }, "step7")
      .to("#creative-ball6", 1, { y: "-50%", x: "-50%" }, "step7")
      .to("#creative-ball4", 1, { y: "70%", x: "-50%" }, "step7")
      .to("#creative-ball2", 1, { y: "-170%", x: "-170%" }, "step7")
      .to("#creative-ball3", 1, { y: "-50%", x: "-170%" }, "step7")
      .add("step8")
      .to("#creative-ball1", 1, { y: "-170%", x: "-50%" }, "step8")
      .add("step9")
      .to("#creative-ball4", 1, { y: "70%", x: "70%" }, "step9")
      .add("step10")
      .to("#creative-ball1", 1, { y: "-50%", x: "-50%" }, "step10")
      .to("#creative-ball6", 1, { y: "70%", x: "-50%" }, "step10")
      .to("#creative-ball4", 1, { y: "-50%", x: "70%" }, "step10")
      .to("#creative-ball5", 1, { y: "-170%", x: "70%" }, "step10")
      .add("step11")
      .to("#creative-ball2", 1, { y: "-170%", x: "-50%" }, "step11")
      .to("#creative-ball5", 1, { y: "-170%", x: "-50%" })
      .add("final")
      .to("#creative-ball1", 1, { y: "-50%", x: "-50%" }, "final")
      .to("#creative-ball2", 1, { y: "-50%", x: "-50%" }, "final")
      .to("#creative-ball3", 1, { y: "-50%", x: "-50%" }, "final")
      .to("#creative-ball4", 1, { y: "-50%", x: "-50%" }, "final")
      .to("#creative-ball5", 1, { y: "-50%", x: "-50%" }, "final")
      .to("#creative-ball6", 1, { y: "-50%", x: "-50%" }, "final");
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

    var tl5 = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 2 });
    tl5
      .add("start")
      .to("#container1", 1, { rotation: "120" }, "start")
      .to(
        "#container2",
        1,
        { left: "14%", top: "18%", rotation: "-63" },
        "start"
      )
      .add("start2")
      .to("#container1", 1, { rotation: "237" }, "start2")
      .to(
        "#container2",
        1,
        { left: "21%", top: "26%", rotation: "-180" },
        "start2"
      )
      .add("start3")
      .to("#container1", 1, { rotation: "+=123deg" }, "start3")
      .to(
        "#container2",
        1,
        { left: "21%", top: "24%", rotation: "-300" },
        "start3"
      );

    var tl6 = new TimelineMax({ repeat: -1 })
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

    var tl7 = new TimelineMax({ repeat: -1 })
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
    tl5.play();
    tl6.play();
    tl7.play();
  }

  return (
    <Wrapper>
      <div ref={ref}></div>

      <Slider
        slideId="work-slider"
        slides={[
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle> template </ServicesSmallTitle>
              <ServicesDesc>Template for video animations</ServicesDesc>
            </TextBox>
            <Vid id="vid" autoPlay muted loop data-keepplaying>
              <source id="mp4" src={ContactVideo} type="video/mp4" />
            </Vid>
          </Group>,
          <Group height="100vh" bgc="#0C2340">
            <TextBox>
              <ServicesSmallTitle> Our Services </ServicesSmallTitle>
              <ServicesDesc>
                We aren’t like everyone else and neither are our services. Take
                a scroll to check out what we do differently to build our
                Spoonshots
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
            <CreativeAnimation id="creative-animation">
              <Ball id="creative-ball1" color="#FE9B96" zIndex={9} />
              <Ball id="creative-ball2" color="#FFFCF2">
                2
              </Ball>
              <Ball id="creative-ball3" color="#FFFCF2">
                3
              </Ball>
              <Ball id="creative-ball4" color="#FFFCF2">
                4
              </Ball>
              <Ball id="creative-ball5" color="#FFFCF2">
                5
              </Ball>
              <Ball id="creative-ball6" color="#FFFCF2">
                6
              </Ball>
            </CreativeAnimation>
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
            <MediaAnimation id="media-animation">
              <Ball id="media-ball1" color="#B1C3D6" />
              <Ball id="media-ball2" color="#FFFCF2" />
              <Ball id="media-ball3" color="#FFFCF2" />
              <Ball id="media-ball4" color="#FFFCF2" />
              <Ball id="media-ball5" color="#FFFCF2" />
              <Ball id="media-ball6" color="#FFFCF2" />
            </MediaAnimation>
          </Group>,
          <Group height="100vh" bgc="#B1C3D6">
            <TextBox>
              <ServicesSmallTitle>Production </ServicesSmallTitle>
              <ServicesDesc>
                Primo negotiators and artistic collaborators. Our producers have
                premiered films with Hollywood Heavyweights, made social series
                with eSports titans, and erected a nearfi ghost town on the
                outskirts of Texas. This SWAT team of film, experiential, and
                integrated producers can make our wildest dreams a reality, no
                matter the size.
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
            <SocialAnimation id="social-animation">
              <Ball id="social-ball1" color="#0033A0" zIndex={9} />
              <Ball id="social-ball2" color="#FFFCF2" />
              <Ball id="social-ball3" color="#FFFCF2" />
              <Ball id="social-ball4" color="#FFFCF2" />
              <Ball id="social-ball5" color="#FFFCF2" />
              <Ball id="social-ball6" color="#FFFCF2" />
            </SocialAnimation>
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
            <ExpAnimation id="exp-animation">
              <div className="container" id="container1">
                <Ball id="exp-ball1" color="#FFFCF2" className="exp-ball">
                  1
                </Ball>
                <Ball id="exp-ball2" color="#FFFCF2" className="exp-ball">
                  2
                </Ball>
                <Ball id="exp-ball3" color="#FFFCF2" className="exp-ball">
                  3
                </Ball>
              </div>
              <div className="container" id="container2">
                <Ball id="exp-ball4" color="#FFFCF2" className="exp-ball">
                  4
                </Ball>
                <Ball id="exp-ball5" color="#B1C3D6" className="exp-ball">
                  5
                </Ball>
                <Ball id="exp-ball6" color="#FFFCF2" className="exp-ball">
                  6
                </Ball>
              </div>
            </ExpAnimation>
          </Group>,
        ]}
      />
    </Wrapper>
  );
};

export default Work;
