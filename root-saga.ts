import { all } from "redux-saga/effects";
import { watchFetchOrdersHistory, watchMakeOrder } from "./orders/saga";

export default function* rootSaga() {
  yield all([watchFetchOrdersHistory(), watchMakeOrder()]);
}
