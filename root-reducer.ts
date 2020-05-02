import { combineReducers } from "redux";
import ordersReducer from "./orders/reducer";
import auth from '@react-native-firebase/auth';

const rootReducer = combineReducers({
  orders: ordersReducer,
});

export default rootReducer;
