import * as React from "react";
import { shallow } from "enzyme";

import { Header } from "../index";
describe('<Header/>', () => {

  it("renders the heading", () => {
    const result = shallow(<Header />).contains(<h2>Admin Dashboard</h2>);
    expect(result).toBeTruthy();
  });
});