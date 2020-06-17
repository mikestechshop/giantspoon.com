// @flow

import React, { useState } from "react";
import styled from "styled-components";
import { Image, Group } from "../";
import Dots from "../../static/dots.png";
import Logo from "../../static/logo.png";
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
  top: 3rem;
  right: 3rem;
  z-index: 999;
  cursor: pointer;
  transform: rotate(-45deg);
`;
const LogoWrap = styled.div`
  position: fixed;
  top: 4.2rem;
  left: 3rem;
  z-index: 999;
  cursor: pointer;
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
  font-size: 6rem;
  line-height: 6.2rem;
  margin-left: 3rem;
  margin-bottom: 1rem;
  color: #b1c3d6;
  font-weight: 400;
  align-self: flex-start;
  margin-top: 0;
  cursor: pointer;
  opacity: 0;
  transform: translateY(1rem);
`;

const handleMenuOpen = (open) => {
  if (!open) {
    TweenMax.to(".menu-wrap", 0.8, {
      opacity: 1,
      pointerEvents: "all",
      ease: "power3.inOut",
    });
    TweenMax.to(".menu-link", 0.8, {
      rotation: 0,
    });
    TweenMax.staggerTo(
      ".link-wrap",
      0.8,
      { opacity: 1, y: 0, delay: 0.8 },
      0.25
    );
  } else {
    TweenMax.to(".menu-wrap", 0.8, {
      opacity: 0,
      pointerEvents: "none",
      ease: "power3.inOut",
      onComplete: resetMenu,
    });
    TweenMax.to(".menu-link", 0.8, {
      rotation: -45,
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
    rotation: -45,
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
        <Image src={Dots} alt="menu nav" width="60px" height="60px" />
      </MenuDotsWrap>
      <MenuWrap className="menu-wrap">
        <LogoWrap
          onClick={() => {
            handleLinkChange("/");
            resetMenu();
            setMenuOpen(false);
          }}
        >
          <Image src={Logo} alt="logo" width="128px" height="auto" />
        </LogoWrap>
        <Group mt="8rem">
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
      </MenuWrap>
    </>
  );
};

export default Nav;
