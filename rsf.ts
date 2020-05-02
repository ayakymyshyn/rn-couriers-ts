import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import "@react-native-firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const app = firebase.app();

const reduxSagaFirebase = new ReduxSagaFirebase(app);

export default reduxSagaFirebase;
