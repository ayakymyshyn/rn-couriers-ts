import { NewOrder, Order } from 'Orders'
import { createAsyncAction } from 'typesafe-actions'
import auth from '@react-native-firebase/auth';

export const makeOrderAsync = createAsyncAction(
  'MAKE_ORDER_REQUEST',
  'MAKE_ORDER_SUCCESS',
  'MAKE_ORDER_FAILURE',
)<NewOrder, undefined, undefined>()

export const fetchOrdersHistoryAsync = createAsyncAction(
  'FETCH_ORDERS_HISTORY_REQUEST',
  'FETCH_ORDERS_HISTORY_SUCCESS',
  'FETCH_ORDERS_HISTORY_FAILURE',
)<undefined, Order[], undefined>()
