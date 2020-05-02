import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import OrderStatusTab from "../components/OrderStatusTab";
import { ActiveOrders, CompletedOrders } from "../components/Orders";

export const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <OrderStatusTab {...props} />}>
      <Tab.Screen name="Активные" component={ActiveOrders} />
      <Tab.Screen name="Завершенные" component={CompletedOrders} />
    </Tab.Navigator>
  );
};
