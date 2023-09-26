import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuayn38j3TpkcHqUESKpD4C-UtvPn8sIc",
  authDomain: "somativa2-6487b.firebaseapp.com",
  projectId: "somativa2-6487b",
  storageBucket: "somativa2-6487b.appspot.com",
  messagingSenderId: "909100522338",
  appId: "1:909100522338:web:6cf39a1b88c17cd5ca2a3b",
  measurementId: "G-VKJS8VN930"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);