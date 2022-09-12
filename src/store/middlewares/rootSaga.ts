import { all, fork } from "redux-saga/effects";
import { counterSagas } from "../features/counter/sagas";

export function* rootSaga() {
  yield all([fork(counterSagas)]);
}
