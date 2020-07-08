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
  bottom: 140px;
  right: 1px;
  z-index: 999;
  cursor: pointer;
  color: #fe9b96;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  line-height: 1.1rem;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
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
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #0033a0;
  pointer-events: none;
  opacity: 0;
`;

const LinkWrap = styled.h1`
  font-family: Baskerville;
  font-size: 20vh;
  line-height: 20vh;
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
  } else {
    TweenMax.to(".menu-wrap", 0.4, {
      opacity: 0,
      pointerEvents: "none",
      ease: "power3.inOut",
      onComplete: resetMenu,
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
  TweenMax.set(".link-wrap", { opacity: 0, y: 16 });
};
const Nav = (props: TStyledNavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handleLinkChange } = props;
  return (
    <>
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
      <DateWrap>01.01.2020</DateWrap>
      <NYLAWrap>
        NY <br /> LA
      </NYLAWrap>
      <SectionTab>
        <SmallText id="section-tab"> Text </SmallText>
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
