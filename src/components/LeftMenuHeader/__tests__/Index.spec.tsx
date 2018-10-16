import * as React from "react";
import { shallow } from "enzyme";

import { LeftMenuHeader } from "../index";

describe('<LeftMenuHeader/>', () => {

  it("LeftMenuHeader should render", () => {
    const result = shallow(<LeftMenuHeader />).equals(<div><a href="/"><span>Admin Dashboard</span></a></div>);
    expect(result).toBeTruthy();
  });
});