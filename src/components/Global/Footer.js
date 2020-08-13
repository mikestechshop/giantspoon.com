// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";
import Logo from "../../static/logo-blue.svg";
import Ig from "../../static/instagram.png";
import Twitter from "../../static/twitter.png";
import Link from "../../static/linked.png";
import Mailchimp from "react-mailchimp-form";

type TStyledFooterProps = {
  handleLinkChange: Function,
};

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0033a0;
  padding: 5rem 0 6rem 4rem;

  input {
    border-style: none;
    background: transparent;
    margin-right: 20px;
    color: #0c2340;
    font-family: interstate;
    background: #b1c3d6;
    padding: 10px 20px;
  }
  input:focus {
    outline: none;
  }
  button {
    background: #b1c3d6;
    font-family: interstate;
    border-style: none;
    font-weight: 600;
    background: #0c2340;
    color: #b1c3d6;
    padding: 10px 20px;
  }
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #0c2340 !important;
    opacity: 1; /* Firefox */
  }

  @media (max-width: 1024px) {
    height: 100vh;

    input {
      margin-right: 0px;
    }
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
    font-size: 0.6rem;
    line-height: 1rem;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
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
            <Box
              width={window.innerWidth > 1025 ? "50%" : "100%"}
              onClick={() => {
                handleLinkChange("/");
              }}
            >
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
              <p> Sign up for our Newsletter </p>
              <Mailchimp
                action="https://giantspoon.us17.list-manage.com/subscribe/post?u=df3c644d0ffcc72bdb51a361c&amp;id=3db69f1995"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "Your Email Goes Here",
                    type: "email",
                    required: true,
                  },
                ]}
              />
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
                  <a
                    href="https://www.linkedin.com/company/giant-spoon-llc"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <Image src={Link} alt="linkedIn logo" />
                  </a>
                </LogoWrap>
                <LogoWrap>
                  <a
                    href="https://www.instagram.com/giant_spoon/"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <Image src={Ig} alt="insta logo" />
                  </a>
                </LogoWrap>
                <LogoWrap>
                  <a
                    href="https://twitter.com/giant_spoon"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <Image src={Twitter} alt="twitter logo" />
                  </a>
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
