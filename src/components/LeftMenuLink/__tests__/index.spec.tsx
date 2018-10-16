import * as React from "react";

// utils
import { mountWrapper } from "../../../utils/testsUtils/index";

import { LeftMenuLink } from "../index";

describe('<LeftMenuLink/>', () => {
  it("LeftMenuLink should render", () => {
    const result = mountWrapper(<LeftMenuLink content="hello" icon="home" link="/" />).contains(<span>hello </span>) 
    expect(result).toBeTruthy();
  });
})
