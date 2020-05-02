import { RootState } from 'typesafe-actions'

export const selectOrderState = (state: RootState) => ({
  loading: state.orders.loading,
})

export const selectOrdersHistory = (state: RootState) => ({
  data: state.orders.history,
  loading: state.orders.historyLoading,
  error: state.orders.historyError,
})

export const selectOrder = (orderId: string) => (state: RootState) =>
  state.orders.history!.find((order) => order.id === orderId)!
