// @flow

import React, { useEffect } from "react";
import PrivacyImg from "../static/Privacy.png";
import { Wrapper, Group, Image } from "../components";

const Privacy = () => {
  useEffect(() => {
    if (document.querySelector("#section-tab")) {
      document.querySelector("#section-tab").innerHTML = "Privacy";
    }
  });
  return (
    <Wrapper>
      <Group bgc="#0C2340" flexDirection="row">
        hello
        <Image src={PrivacyImg} alt="Privacy+conditions" />
      </Group>
    </Wrapper>
  );
};

export default Privacy;
