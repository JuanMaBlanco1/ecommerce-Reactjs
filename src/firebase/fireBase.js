
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { firebaseConfig } from "../config/config";

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
