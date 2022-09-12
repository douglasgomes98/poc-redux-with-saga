import { all, takeLatest } from "redux-saga/effects";
import { counterSliceActions } from "../counterSlice";
import { checkCounterSaga } from "./checkCounterSaga";

export function* counterSagas() {
  yield all([takeLatest(counterSliceActions.increment.type, checkCounterSaga)]);
}
