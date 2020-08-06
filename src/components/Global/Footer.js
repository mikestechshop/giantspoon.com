// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";
import Logo from "../../static/logo.png";
import Ig from "../../static/Instagram.png";
import Twitter from "../../static/Twitter.png";
import Link from "../../static/Linked.png";

type TStyledFooterProps = {
  handleLinkChange: Function,
};

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0033a0;
  padding: 5rem 0 6rem 4rem;

  @media (max-width: 1024px) {
    height: 100vh;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.layout || "column"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  box-sizing: border-box;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;

const TextWrap = styled.p`
  font-size: 1rem;
  line-height: 1.8rem;
  font-weight: 300;
  margin: 0;
  margin-top: ${(props) => props.mt || 0};
  width: ${(props) => props.width || "100%"};
  cursor: pointer;

  &.mono {
    font-family: "interstate-mono";
    text-transform: uppercase;
  }
  @media (max-width: 1024px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const LargeText = styled.div`
  font-size: 2rem;
  line-height: 120%;
  .regular {
    font-weight: 400;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const LogoWrap = styled.div`
  height: 16px;
  width: 16px;
  margin-right: 2.5rem;
  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

const Footer = (props: TStyledFooterProps) => {
  const { handleLinkChange } = props;
  return (
    <FooterWrap>
      <Box width="100%" layout="column">
        <Box width="100%">
          <Box
            width="100%"
            layout={window.innerWidth > 1025 ? "row" : "column"}
            wrap="wrap"
          >
            <Box width={window.innerWidth > 1025 ? "50%" : "100%"}>
              <Image src={Logo} alt="logo" width="128px" height="auto" />
            </Box>
            <Box width={window.innerWidth > 1025 ? "50%" : "100%"}>
              <LargeText>
                Like what you see? <br />
                <span className="regular">Get In Touch.</span>
              </LargeText>
            </Box>
            <Box
              width={window.innerWidth > 1025 ? "50%" : "100%"}
              margin="0rem 4rem 2rem 0 "
            >
              <TextWrap>Newletter sign up goes here</TextWrap>
            </Box>
          </Box>
        </Box>
        <Box width="100%" layout={window.innerWidth > 1025 ? "row" : "column"}>
          <Box
            width={window.innerWidth > 1025 ? "50%" : "100%"}
            margin="0rem 4rem 0 0 "
            layout="row"
          >
            <Box width="100%" margin="0 4rem 0 0 ">
              <Box width="100%" layout="row">
                <Box width="50%" margin="0 4rem 0 0 ">
                  <TextWrap>
                    <strong>Los Angeles</strong> <br />
                    6100 Wilshire Blvd. <br />
                    Suite 700 <br />
                    Los Angeles, CA <br />
                    90048
                  </TextWrap>
                </Box>

                <Box width="50%" margin="0 1rem 0 0 ">
                  <TextWrap>
                    <strong>New York</strong> <br />
                    44 Wall Street <br />
                    3rd floor <br />
                    New York, NY <br />
                    10005
                  </TextWrap>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={window.innerWidth > 1025 ? "50%" : "100%"}
            margin="0 4rem 0 0 "
          >
            <Box
              width="100%"
              margin={window.innerWidth > 1025 ? "0" : "3rem 0 0 0"}
              layout={window.innerWidth > 1025 ? "column" : "row-reverse"}
            >
              <Box
                width={window.innerWidth > 1025 ? "100%" : "50%"}
                layout={window.innerWidth > 1025 ? "row" : "column"}
                wrap="wrap"
              >
                <TextWrap
                  width="33%"
                  className="mono"
                  onClick={() => {
                    handleLinkChange("/work");
                  }}
                >
                  Work
                </TextWrap>
                <TextWrap
                  width="33%"
                  className="mono"
                  onClick={() => {
                    handleLinkChange("/about");
                  }}
                >
                  About Us
                </TextWrap>
                <TextWrap
                  width="33%"
                  className="mono"
                  onClick={() => {
                    handleLinkChange("/about#services");
                  }}
                >
                  Services
                </TextWrap>
                <TextWrap
                  className="mono"
                  width="33%"
                  onClick={() => {
                    handleLinkChange("/contact");
                  }}
                >
                  Contact
                </TextWrap>
                <TextWrap
                  className="mono"
                  width="33%"
                  onClick={() => {
                    handleLinkChange("/culture");
                  }}
                >
                  Culture
                </TextWrap>
                <TextWrap
                  width="33%"
                  className="mono"
                  onClick={() => {
                    handleLinkChange("/culture#careers");
                  }}
                >
                  Careers
                </TextWrap>
                <TextWrap
                  className="mono"
                  width="33%"
                  onClick={() => {
                    handleLinkChange("/terms");
                  }}
                >
                  Terms of use
                </TextWrap>
                <TextWrap
                  className="mono"
                  width="33%"
                  onClick={() => {
                    handleLinkChange("/privacy");
                  }}
                >
                  Privacy Policy
                </TextWrap>
              </Box>

              <Box
                width={window.innerWidth > 1025 ? "100%" : "50%"}
                layout={window.innerWidth > 1025 ? "row" : "column"}
                margin={window.innerWidth > 1025 ? "3rem 0 0 0" : "0"}
              >
                <LogoWrap>
                  <Image src={Link} alt="linkedIn logo" />
                </LogoWrap>
                <LogoWrap>
                  <Image src={Ig} alt="insta logo" />
                </LogoWrap>
                <LogoWrap>
                  <Image src={Twitter} alt="twitter logo" />
                </LogoWrap>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
