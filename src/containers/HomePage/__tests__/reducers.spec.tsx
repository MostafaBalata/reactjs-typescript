import { homePageReducer, initialState } from "../reducers";
import { increaseAction, triggerSagaMessage } from "../actions";

describe('HomePage reducers', () => {
  it("Should increase number", () => {
    const state = initialState;

    const store = homePageReducer(state, increaseAction());
    // Test first call;
    expect(store).toEqual({ number: 1, message: '' });
  });

  it("Should Say hello", () => {
    const state = initialState;

    const store = homePageReducer(state, triggerSagaMessage("Hello"));
    // Test first call;
    expect(store).toEqual({ number: 0, message: 'Hello' });
  });

})
