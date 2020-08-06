// @flow

import React, { useEffect } from "react";
import TermsImg from "../static/terms.png";
import { Wrapper, Group, Image } from "../components";

const Terms = () => {
  useEffect(() => {
    if (document.querySelector("#section-tab")) {
      document.querySelector("#section-tab").innerHTML = "Terms";
    }
  });
  return (
    <Wrapper>
      <Group bgc="#0C2340" flexDirection="row">
        <Image src={TermsImg} alt="terms+conditions" />
      </Group>
    </Wrapper>
  );
};

export default Terms;
