import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {fetchOrdersHistoryAsync} from '../orders/actions';
import {useSelector, useDispatch} from 'react-redux';

import {OrderItem} from './OrderItem';

export function ActiveOrders({navigation}) {
  const dispatch = useDispatch();
  const ordersData = useSelector(({orders}) => orders);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    dispatch(fetchOrdersHistoryAsync.request());
    setOrders(ordersData.data);
  }, []);
  return (
    <ScrollView>
      {orders &&
        orders.map((order) => (
          <OrderItem
            completed={false}
            id={order.data.number}
            navigation={navigation}
            key={id}
            deliveryInfo={order.data.deliveryInfo}
            summarize={order.data.summarize}
            products={order.data.products}
            number={order.data.number}
          />
        ))}
    </ScrollView>
  );
}

export function CompletedOrders({navigation}) {
  return (
    <ScrollView>
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
      <OrderItem completed={true} id="123456" />
    </ScrollView>
  );
}

// const mapDispachToProps = dispatch => ({
//   fetchOrders: () => dispatch(fetchOrdersHistoryAsync.request),
// });
