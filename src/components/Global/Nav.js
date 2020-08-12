// @flow

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Image, Group } from "../";
import LogoVert from "../../static/logo-vert.png";
import MenuDots from "../../static/MenuDots.svg";
import CloseBtn from "../../static/close.svg";
import Ig from "../../static/Instagram.png";
import Twitter from "../../static/Twitter.png";
import Link from "../../static/Linked.png";
import { TweenMax } from "gsap";
import { useContentful } from "react-contentful";

type TStyledNavProps = {
  //   src: string,
  //   alt: string,
  height?: string,
  width?: string,
  handleLinkChange: Function,
};

const wiggle = keyframes` 
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(5deg); }
   95% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

const MenuDotsWrap = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
  animation-name: ${wiggle};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  &.ani-off {
    animation: none;
  }
  img {
    cursor: pointer !important;
  }
`;
const LogoVertWrap = styled.div`
  position: fixed;
  top: 80px;
  right: 25px;
  z-index: 999;
  cursor: pointer !important;
  transform: rotate(180deg);
  img {
    cursor: pointer !important;
  }
`;
const DateWrap = styled.div`
  position: fixed;
  bottom: 168px;
  right: -8px;
  z-index: 999;
  cursor: pointer;
  color: #fe9b96;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1.1rem;
  transform: rotate(270deg);
  transform-origin: 50% 50%;
  z-index: 989;
  font-family: interstate-mono, monospace;
  font-weight: 400;
  font-style: normal;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const ContactWrap = styled.div`
  position: fixed;
  bottom: 294px;
  right: 4px;
  z-index: 999;
  cursor: pointer;
  color: #fe9b96;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1.1rem;
  transform: rotate(270deg);
  transform-origin: 50% 50%;
  z-index: 989;
  font-family: interstate-mono, monospace;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const NYLAWrap = styled.div`
  position: fixed;
  bottom: 50px;
  right: 24.5px;
  z-index: 999;
  cursor: pointer;
  color: #fe9b96;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1.1rem;
  font-family: interstate-mono, monospace;
  font-weight: 400;
  font-style: normal;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuWrap = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 10vh;
  bottom: 10vh;
  right: 0;
  background-color: #0033a0;
  pointer-events: none;
  opacity: 0;
  @media (max-width: 1024px) {
    left: 0;
    bottom: 0;
  }
`;

const LinkWrap = styled.h1`
  font-family: Baskerville;
  font-size: 17.5vh;
  line-height: 17.5vh;
  margin-left: 5vw;
  margin-bottom: 0;
  color: #b1c3d6;
  font-weight: 400;
  align-self: flex-start;
  margin-top: 0;
  cursor: pointer;
  opacity: 0;
  transform: translateY(1rem);
  @media (max-width: 1024px) {
    font-size: 9.5vh;
    line-height: 10.5vh;
    margin-left: 3rem;
  }
`;
const SmallLinks = styled.div`
  transform: rotate(270deg) translateY(100%);
  align-self: flex-start;
  transform-origin: 0% 100%;

  @media (max-width: 1024px) {
    transform: rotate(0deg) translateY(0%);
  }
`;

const SmallLinkWrap = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 140%;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 5vw;
  font-family: "interstate-mono";
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-left: 3rem;
    font-size: 0.8rem;
  }
`;
const LogoWrap = styled.div`
  height: 16px;
  width: 16px;
  margin-right: 1rem;
  align-self: flex-start;
  margin-top: 2rem;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const NavWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 91px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 0;
  pointer-events: none;
  background-blend-mode: multiply;
`;

const ThoughtOfTheDay = styled.div`
  position: fixed;
  bottom: 106px;
  left: 0;
  background: #fffcf2;
  height: 60vh;
  width: 100%;
  z-index: 98;
  padding: 2.5rem 2rem;
  opacity: 0;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  .close {
    position: absolute;
    top: 36px;
    right: 36px;
    height: 30px;
    width: auto;
    cursor: pointer;
  }
  h2 {
    font-size: 16px;
    mb: 1.5rem;
    color: #0033a0;
    font-weight: 300;
  }
  h1 {
    font-size: 3.2rem;
    line-height: 140%;
    color: #0c2340;
    font-weight: 300;
    width: 70%;
    margin-top: 0;
  }
`;
const TransitMap = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 10vh;
  bottom: 10vh;
  right: 0;
  background: #fffcf2;

  opacity: 0;
  visibility: hidden;
  .close {
    position: absolute;
    bottom: 27px;
    right: 20px;
    height: 30px;
    width: auto;
    cursor: pointer;
  }
  #la-map {
    height: 100%;
    width: 100%;
  }
  #ny-map {
    height: 100%;
    width: 100%;
  }
  .text {
    padding: 4rem 4rem;
    font-family: "interstate-mono";
    color: #fffcf2;
  }
  .largeText {
    color: ##fffcf2;
    font-size: 4vh;
    line-height: 10vh;
    align-self: flex-start;
    margin-left: 5rem;
    .coral {
      color: #fe9b96;
    }
  }
`;
const addPointers = () => {
  TweenMax.set(".menu-link", { pointerEvents: "all" });
  TweenMax.to("#menu", {
    pointerEvents: "all",
  });
};
const handleMenuOpen = (open) => {
  addPointers();
  TweenMax.set(".menu-link", { pointerEvents: "none" });
  if (!open) {
    TweenMax.to(".menu-wrap", 0.4, {
      opacity: 1,
      pointerEvents: "all",
      ease: "power3.inOut",
    });
    TweenMax.staggerTo(
      ".link-wrap",
      0.4,
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        ease: "power1.in",
      },
      0.3,
      addPointers
    );
    TweenMax.to(".bottom-links", 0.4, {
      opacity: 0,
    });
    TweenMax.to("#menu img", 0.4, {
      rotation: 45,
    });
    TweenMax.to("#menu", {
      pointerEvents: "none",
    });
  } else {
    TweenMax.to(".menu-wrap", 0.4, {
      opacity: 0,
      pointerEvents: "none",
      ease: "power3.inOut",
      onComplete: resetMenu,
    });
    TweenMax.to("#menu img", 0.4, {
      rotation: 0,
      onComplete: addPointers,
    });
    TweenMax.to("#menu", {
      pointerEvents: "none",
    });
  }
};
const handleThoughtOpen = (open) => {
  if (!open) {
    TweenMax.to("#thought", 0.4, {
      autoAlpha: 1,
      ease: "power3.inOut",
    });
    TweenMax.to("#date", 0.4, {
      color: "#0C2340",
      ease: "power3.inOut",
    });
    TweenMax.to("#breadcrumbs", 0.4, {
      opacity: 0,
      ease: "power3.inOut",
    });
  } else {
    TweenMax.to("#thought", 0.4, {
      autoAlpha: 0,
      ease: "power3.inOut",
    });
    TweenMax.to("#date", 0.4, {
      color: "#FE9B96",
      ease: "power3.inOut",
    });
    TweenMax.to("#breadcrumbs", 0.4, {
      opacity: 1,
      ease: "power3.inOut",
    });
  }
};
const handleTransitOpen = (open) => {
  if (!open) {
    TweenMax.to("#transit", 0.4, {
      autoAlpha: 1,
      ease: "power3.inOut",
    });
    TweenMax.to("#date", 0.4, {
      autoAlpha: 0,
      ease: "power3.inOut",
    });
  } else {
    TweenMax.to("#transit", 0.4, {
      autoAlpha: 0,
      ease: "power3.inOut",
    });
    TweenMax.to("#date", 0.4, {
      autoAlpha: 1,
      ease: "power3.inOut",
    });
  }
};
const resetMenu = () => {
  TweenMax.set(".menu-wrap", {
    opacity: 0,
    pointerEvents: "none",
    ease: "power3.inOut",
    delay: 0.5,
  });
  TweenMax.set(".menu-link", {
    delay: 0.5,
  });
  TweenMax.to(".bottom-links", 0.4, {
    opacity: 1,
  });
  TweenMax.set(".link-wrap", { opacity: 0, y: 16 });
  TweenMax.set("#menu img", {
    rotation: 0,
  });
};
const Nav = (props: TStyledNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [thoughtOpen, setThoughtOpen] = useState(false);
  const [transitOpen, setTransitOpen] = useState(false);
  const { data, error, fetched, loading } = useContentful({
    contentType: "thoughtOfTheDay",
  });
  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }
  const date = new Date();
  let year = date.getFullYear();

  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  const todaysDate = month + "." + day + "." + year;
  const { items } = data;
  const { handleLinkChange } = props;
  return (
    <>
      <NavWrap></NavWrap>
      <MenuDotsWrap
        className="menu-link"
        id="menu"
        onClick={() => {
          handleMenuOpen(menuOpen);
          setMenuOpen(!menuOpen);
        }}
      >
        <Image src={MenuDots} alt="menu nav" width="45px" height="45px" />
      </MenuDotsWrap>
      <LogoVertWrap
        className="menu-link"
        onClick={() => {
          handleLinkChange("/");
          if (menuOpen) {
            resetMenu();
          }
          setMenuOpen(false);
        }}
      >
        <Image src={LogoVert} alt="menu nav" />
      </LogoVertWrap>
      <ContactWrap
        id="date"
        onClick={() => {
          handleLinkChange("/contact");
        }}
        className="bottom-links"
      >
        Contact
      </ContactWrap>
      <DateWrap
        id="date"
        onClick={() => {
          handleThoughtOpen(thoughtOpen);
          setThoughtOpen(!thoughtOpen);
        }}
        className="bottom-links"
      >
        {todaysDate}
      </DateWrap>
      <NYLAWrap
        id="ny-la"
        className="bottom-links"
        onClick={() => {
          handleTransitOpen(transitOpen);
          setTransitOpen(!transitOpen);
        }}
      >
        NY <br /> LA
      </NYLAWrap>
      <ThoughtOfTheDay id="thought">
        <h2> Here's a thought </h2>
        <h1>{items[0].fields.thought}</h1>
        <img
          src={CloseBtn}
          alt="close button"
          className="close"
          onClick={() => {
            handleThoughtOpen(true);
            setThoughtOpen(false);
          }}
        />
      </ThoughtOfTheDay>
      <TransitMap id="transit">
        <Group height="80vh" flexDirection="row">
          <Group width="50%" bgc="#FE9B96">
            <Group height="80vh">
              <div id="la-map" />
            </Group>
          </Group>
          <Group width="50%" bgc="#0033A0">
            <Group height="80vh">
              <div id="ny-map" />
            </Group>
          </Group>
        </Group>
        <Group height="10vh" bgc="#0033A0">
          <div className="largeText">
            Are we <span className="coral">there</span> yet?
          </div>
        </Group>
        <img
          src={CloseBtn}
          alt="close button"
          className="close"
          onClick={() => {
            handleTransitOpen(true);
            setTransitOpen(false);
          }}
        />
      </TransitMap>

      <MenuWrap className="menu-wrap">
        <Group flexDirection={window.innerWidth > 1025 ? "row" : "column"}>
          <Group
            width={window.innerWidth > 1025 ? "50%" : "100%"}
            height={window.innerWidth > 1025 ? "100vh" : "auto"}
            overflow="visible"
            mt="10vh"
          >
            <LinkWrap
              className="link-wrap"
              onClick={() => {
                handleLinkChange("/work");
                resetMenu();
                setMenuOpen(false);
              }}
            >
              work
            </LinkWrap>
            <LinkWrap
              className="link-wrap"
              onClick={() => {
                handleLinkChange("/about");
                resetMenu();
                setMenuOpen(false);
              }}
            >
              about
            </LinkWrap>
            <LinkWrap
              className="link-wrap"
              onClick={() => {
                handleLinkChange("/culture");
                resetMenu();
                setMenuOpen(false);
              }}
            >
              spoons
            </LinkWrap>
            <LinkWrap
              className="link-wrap"
              onClick={() => {
                handleLinkChange("/contact");
                resetMenu();
                setMenuOpen(false);
              }}
            >
              contact
            </LinkWrap>
          </Group>
          <Group
            width={window.innerWidth > 1025 ? "50%" : "100%"}
            height={window.innerWidth > 1025 ? "100vh" : "auto"}
            ml={window.innerWidth > 1025 ? "10vw" : "0"}
            mt={window.innerWidth > 1025 ? "0" : "5vh"}
          >
            <SmallLinks flexDirection="row">
              <SmallLinkWrap
                onClick={() => {
                  handleLinkChange("/about#services");
                  resetMenu();
                  setMenuOpen(false);
                }}
              >
                SERVICES
              </SmallLinkWrap>
              <SmallLinkWrap
                onClick={() => {
                  handleLinkChange("/culture#careers");
                  resetMenu();
                  setMenuOpen(false);
                }}
              >
                CAREERS
              </SmallLinkWrap>
              <SmallLinkWrap
                onClick={() => {
                  handleLinkChange("/terms");
                  resetMenu();
                  setMenuOpen(false);
                }}
              >
                TERMS OF USE
              </SmallLinkWrap>
              <SmallLinkWrap
                onClick={() => {
                  handleLinkChange("/privacy");
                  resetMenu();
                  setMenuOpen(false);
                }}
              >
                PRIVACY POLICY
              </SmallLinkWrap>
            </SmallLinks>
            <Group mt="5vh">
              <LogoWrap>
                <a
                  href="https://www.linkedin.com/company/giant-spoon-llc"
                  target="_blank"
                >
                  <Image src={Link} alt="linkedIn logo" />
                </a>
              </LogoWrap>
              <LogoWrap>
                <a
                  href="https://www.instagram.com/giant_spoon/"
                  target="_blank"
                >
                  <Image src={Ig} alt="insta logo" />
                </a>
              </LogoWrap>
              <LogoWrap>
                <a href="https://twitter.com/giant_spoon" target="_blank">
                  <Image src={Twitter} alt="twitter logo" />
                </a>
              </LogoWrap>
            </Group>
          </Group>
        </Group>
      </MenuWrap>
    </>
  );
};

export default Nav;
