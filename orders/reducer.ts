import { createReducer } from "typesafe-actions";
import { OrdersState } from "Orders";
import { makeOrderAsync, fetchOrdersHistoryAsync } from "./actions";

const initialState: OrdersState = {
  data: null,
  loading: false,
  error: false,
};

const ordersReducer = createReducer(initialState)
  .handleAction(fetchOrdersHistoryAsync.request, (state) => ({
    ...state,
    loading: true,
    error: false,
  }))
  .handleAction(fetchOrdersHistoryAsync.success, (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
  }))
  .handleAction(fetchOrdersHistoryAsync.failure, (state) => ({
    ...state,
    loading: false,
    error: true,
  }));

export default ordersReducer;
