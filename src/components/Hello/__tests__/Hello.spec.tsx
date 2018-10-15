import * as React from "react";
import { shallow } from "enzyme";

import { Hello } from "../index";

it("renders the heading", () => {
  const result = shallow(<Hello num={123} message="hello" onClick={() => {}} />).contains(<h1>Hello!</h1>);
  expect(result).toBeTruthy();
});
