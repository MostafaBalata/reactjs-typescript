import * as React from "react";

// utils
import { mountWrapper } from "../../../utils/testsUtils/index";

import { Table } from "../index";
import { shallow } from "enzyme";

describe('<Table/>', () => {
  it("Table should render", () => {
    const records: [{}] = [{ "name": "s7s" }];
    const columns: [{}] = [{ "name": "s7s" }];
    const loading: boolean = false;

    const result = shallow(<Table records={records} columns={columns} loading={loading} onFetchData={() => { }} />).children()
    // @TODO: continue
  });
})
