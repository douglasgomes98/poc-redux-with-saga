import { put, select } from "redux-saga/effects";
import { editUserSliceActions } from "../../user/editUserSlice";
import { counterSliceActions, CounterState } from "../counterSlice";

export function* checkCounterSaga() {
  const counterStore: CounterState = yield select((state) => state.counter);

  if (counterStore.value >= 5) {
    yield put(counterSliceActions.incrementByAmount(counterStore.value * -1));
    yield put(
      editUserSliceActions.setUser({
        name: "Douglas",
        age: 24,
        email: "email@gmail.com",
      })
    );
  }
}
