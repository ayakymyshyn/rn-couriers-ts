import { RootState } from 'typesafe-actions'
import { select, call, put, takeLatest } from 'redux-saga/effects'
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { makeOrderAsync, fetchOrdersHistoryAsync } from './actions'
import rsf from '../rsf'
import { Order } from 'Orders'

async function createTransaction(payload: any, userId: string) {
  await firestore().runTransaction(async (t) => {
    const newDocRef = firestore().collection('orders').doc()

    const lastNumSnap = await firestore()
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get()

    const lastNum = lastNumSnap.empty ? 0 : lastNumSnap.docs[0].data().number

    t.set(newDocRef, {
      ...payload,
      userId,
      createdAt: firestore.FieldValue.serverTimestamp(),
      number: lastNum + 1,
    })
  })
}

export function* watchMakeOrder() {
  yield takeLatest(makeOrderAsync.request, function* (
    action: ReturnType<typeof makeOrderAsync.request>,
  ) {
    try {
      const { id } = yield select((state: RootState) => state.auth.user)
      yield call(createTransaction, action.payload, id)
      yield put(makeOrderAsync.success())

      const {
        deliveryAddress,
        porch,
        floor,
        apart,
      } = action.payload.deliveryInfo

    } catch (err) {
      yield put(makeOrderAsync.failure())
    }
  })
}

export function* watchFetchOrdersHistory() {
  yield takeLatest(fetchOrdersHistoryAsync.request, function* () {
    try {
      // const { id } = yield select((state: RootState) => state.auth.user)
      const id = "CwfYWV57YhPbhlx8RY0PPc5ufhB3";
      const ordersRef = firestore()
        .collection('orders')
        .where('userId', '==', id)
        .orderBy('createdAt', 'desc')
      const snap: FirebaseFirestoreTypes.QuerySnapshot = yield call(
        rsf.firestore.getCollection,
        ordersRef,
      )
      const orders = snap.docs.map((order) => ({
        id: order.id,
        data: order.data(),
      })) as Order[]

      yield put(fetchOrdersHistoryAsync.success(orders))
    } catch (err) {
      yield console.log(err);
      yield put(fetchOrdersHistoryAsync.failure())
    }
  })
}
