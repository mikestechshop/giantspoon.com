// @flow

import React from "react";
import { Wrapper, Group, PageTitle } from "../components";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Wrapper>
      <Group height="100vh">
        <PageTitle>Contact</PageTitle>
        <Link to="/work/about">About</Link>
      </Group>
    </Wrapper>
  );
};

export default Contact;
