// @flow

import React from "react";
import styled from "styled-components";
import { Image } from "../";
import Logo from "../../static/logo.png";
import Ig from "../../static/ig.png";
import Twitter from "../../static/twitter.png";
import Link from "../../static/link.png";

type TStyledFooterProps = {
  handleLinkChange: Function,
};

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0033a0;
  padding: 5rem 0 6rem 4rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.layout || "column"};
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  box-sizing: border-box;
`;

const TextWrap = styled.p`
  font-size: 1rem;
  line-height: 1.8rem;
  font-weight: 300;
  margin: 0;
  margin-top: ${(props) => props.mt || 0};
  width: ${(props) => props.width || "100%"};
  cursor: pointer;
`;

const LogoWrap = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 1rem;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Footer = (props: TStyledFooterProps) => {
  const { handleLinkChange } = props;
  return (
    <FooterWrap>
      <Box width="100%">
        <Image src={Logo} alt="logo" width="128px" height="auto" />
      </Box>
      <Box width="100%" margin="4rem 4rem 0 0 " layout="row">
        <Box width="40%" margin="0 4rem 0 0 ">
          <Box width="100%" layout="row">
            <Box width="50%" margin="0 4rem 0 0 ">
              <TextWrap>
                <strong>Los Angeles</strong> <br />
                6100 Wilshire Blvd. <br />
                Suite 700 <br />
                Los Angeles, CA <br />
                90048
              </TextWrap>
              <TextWrap mt="4rem">Terms of Use</TextWrap>
            </Box>
            <Box width="50%" margin="0 4rem 0 0 ">
              <TextWrap>
                <strong>New York</strong> <br />
                44 Wall Street, <br />
                3rd floor <br />
                New York, NY <br />
                10005
              </TextWrap>
              <TextWrap mt="4rem">Privacy Policy</TextWrap>
            </Box>
          </Box>
        </Box>
        <Box width="60%" padding="0 10%" margin="0 4rem 0 0 ">
          <Box width="100%">
            <Box width="100%" layout="row">
              <TextWrap
                width="33%"
                onClick={() => {
                  handleLinkChange("/work");
                }}
              >
                Work
              </TextWrap>
              <TextWrap
                width="33%"
                onClick={() => {
                  handleLinkChange("/about");
                }}
              >
                About Us
              </TextWrap>
              <TextWrap width="33%">Services</TextWrap>
            </Box>
            <Box width="100%" margin="0" layout="row">
              <TextWrap
                width="33%"
                onClick={() => {
                  handleLinkChange("/contact");
                }}
              >
                Contact
              </TextWrap>
              <TextWrap
                width="33%"
                onClick={() => {
                  handleLinkChange("/culture");
                }}
              >
                Culture
              </TextWrap>
              <TextWrap width="33%">Careers</TextWrap>
            </Box>
            <Box width="100%" margin="0">
              <TextWrap mt="4rem">Get In Touch! hello@giantspoon.som</TextWrap>
            </Box>
            <Box width="100%" margin="4rem 0 0 0" layout="row">
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
    </FooterWrap>
  );
};

export default Footer;
