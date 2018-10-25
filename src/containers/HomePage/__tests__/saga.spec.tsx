import { expectSaga } from 'redux-saga-test-plan';
import { dispatchRandomeMessage } from '../saga';


describe('Saga', () => {
  it("Should dispatch the correct value", () => {
    const expectedAction = { type: 'SAGA_HELLO', payload: 'Hello from saga Welcome' };

    return expectSaga(dispatchRandomeMessage)
      .dispatch(expectedAction)

      // asert the dispatched action
      .put(expectedAction)
      .run();
  });

  it("Should fail, payload is not correct", async () => {
    const expectedAction = { type: 'SAGA_HELLO', payload: 'Hello from saga Yo yo' };

    try {
      await expectSaga(dispatchRandomeMessage)
        .dispatch(expectedAction)

        // asert the dispatched action
        .put(expectedAction)
        .run()
    } catch (error) {
      return expect(error).not.toBeNull()
    }
    expect.assertions(1);
  });

  it("Should fail, Action is not correct", async () => {
    const expectedAction = { type: 'Wrong_Action', payload: 'Hello from saga Yo yo' };

    try {
      await expectSaga(dispatchRandomeMessage)
        .dispatch(expectedAction)

        // asert the dispatched action
        .put(expectedAction)
        .run()
    } catch (error) {
      return expect(error).not.toBeNull()
    }
    expect.assertions(1);
  });
})
