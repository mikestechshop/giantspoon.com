// @flow

import React, { useState } from "react";
import styled from "styled-components";
import { Image, Group } from "../";
import Logo from "../../static/logo.png";
import LogoVert from "../../static/logo-vert.png";
import Circle from "../../static/circle.png";
import Ig from "../../static/ig.png";
import Twitter from "../../static/twitter.png";
import Link from "../../static/link.png";
import { TweenMax } from "gsap";
import { useContentful } from "react-contentful";

type TStyledNavProps = {
  //   src: string,
  //   alt: string,
  height?: string,
  width?: string,
  handleLinkChange: Function,
};

const MenuDotsWrap = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  cursor: pointer;
`;
const LogoVertWrap = styled.div`
  position: fixed;
  top: 80px;
  right: 25px;
  z-index: 999;
  cursor: pointer;
  transform: rotate(180deg);
`;
const DateWrap = styled.div`
  position: fixed;
  bottom: 168px;
  right: -1px;
  z-index: 999;
  cursor: pointer;
  color: #fe9b96;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1.1rem;
  transform: rotate(270deg);
  transform-origin: 50% 50%;
  z-index: 99;
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
`;
const SectionTab = styled.div`
  position: fixed;
  top: 0;
  left: 130px;
  height: 17px;
  width: 142px;
  z-index: 999;
  background: #b1c3d6;
`;
const SmallText = styled.div`
  position: absolute;
  left: 14px;
  top: -3px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 140%;
  text-transform: uppercase;
  letter-spacing: 2px;

  color: #0c2340;
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
`;
const SmallLinks = styled.div`
  transform: rotate(270deg) translateY(100%);
  align-self: flex-start;
  transform-origin: 0% 100%;
`;

const SmallLinkWrap = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 140%;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 5vw;
`;
const LogoWrap = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 1rem;
  align-self: flex-start;
  margin-bottom: 10px;
  img {
    height: 100%;
    width: 100%;
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
    rgba(0, 0, 0, 0.5340511204481793) 100%
  );
  z-index: 9;
  pointer-events: none;
  background-blend-mode: multiply;
`;

const ThoughtOfTheDay = styled.div`
  position: fixed;
  top: 220px;
  left: 0;
  background: #fffcf2;
  height: 60vh;
  width: 100%;
  z-index: 98;
  padding: 2.5rem 2rem;
  opacity: 0;
  pointer-events: none;
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

const handleMenuOpen = (open) => {
  if (!open) {
    TweenMax.to(".menu-wrap", 0.4, {
      opacity: 1,
      pointerEvents: "all",
      ease: "power3.inOut",
    });
    TweenMax.staggerTo(
      ".link-wrap",
      0.4,
      { opacity: 1, y: 0, delay: 0.4, ease: "power1.in" },
      0.3
    );
    TweenMax.to(".bottom-links", 0.4, {
      y: "-=10vh",
    });
  } else {
    TweenMax.to(".menu-wrap", 0.4, {
      opacity: 0,
      pointerEvents: "none",
      ease: "power3.inOut",
      onComplete: resetMenu,
    });
  }
};
const handleThoughtOpen = (open) => {
  if (!open) {
    TweenMax.to("#thought", 0.4, {
      opacity: 1,
      ease: "power3.inOut",
    });
    TweenMax.to("#date", 0.4, {
      color: "#0C2340",
      ease: "power3.inOut",
    });
  } else {
    TweenMax.to("#thought", 0.4, {
      opacity: 0,
      ease: "power3.inOut",
    });
    TweenMax.to("#date", 0.4, {
      color: "#FE9B96",
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
    y: "+=10vh",
  });
  TweenMax.set(".link-wrap", { opacity: 0, y: 16 });
};
const Nav = (props: TStyledNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [thoughtOpen, setThoughtOpen] = useState(false);
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
        onClick={() => {
          handleMenuOpen(menuOpen);
          setMenuOpen(!menuOpen);
        }}
      >
        <Image src={Circle} alt="menu nav" width="45px" height="45px" />
      </MenuDotsWrap>
      <LogoVertWrap
        className="menu-link"
        onClick={() => {
          handleLinkChange("/");
          resetMenu();
          setMenuOpen(false);
        }}
      >
        <Image src={LogoVert} alt="menu nav" />
      </LogoVertWrap>
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
      <NYLAWrap id="ny-la" className="bottom-links">
        NY <br /> LA
      </NYLAWrap>
      <ThoughtOfTheDay id="thought">
        <h2> Here's a thought </h2>
        <h1>{items[0].fields.thought}</h1>
      </ThoughtOfTheDay>

      <SectionTab>
        <SmallText id="section-tab"> Welcome </SmallText>
      </SectionTab>
      <MenuWrap className="menu-wrap">
        <Group flexDirection="row">
          <Group width="50%" height="100vh" mt="10vh">
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
          <Group width="50%" height="100vh" ml="10vw">
            <SmallLinks flexDirection="row">
              <SmallLinkWrap>SERVICES</SmallLinkWrap>
              <SmallLinkWrap>CAREERS</SmallLinkWrap>
              <SmallLinkWrap>TERMS OF USE</SmallLinkWrap>
              <SmallLinkWrap>PRIVACY POLICY</SmallLinkWrap>
            </SmallLinks>
            <Group mt="5vh">
              <LogoWrap>
                <Image src={Link} alt="linkedIn logo" />
              </LogoWrap>
              <LogoWrap>
                <Image src={Ig} alt="insta logo" />
              </LogoWrap>
              <LogoWrap>
                <Image src={Twitter} alt="twitter logo" />
              </LogoWrap>
            </Group>
          </Group>
        </Group>
      </MenuWrap>
    </>
  );
};

export default Nav;
