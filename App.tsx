import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// other screens
import {HomeScreen} from './screens/HomeScreen';
import {OrderDetails} from './screens/OrderDetails';
import {ProductsList} from './screens/ProductsList';

// redux
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);
export const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="ProductsList" component={ProductsList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
