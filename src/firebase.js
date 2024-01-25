import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABsWsgTjt5MS35_hjX12uEIUpSoTu2bIA",
  authDomain: "color-palette-3457e.firebaseapp.com",
  projectId: "color-palette-3457e",
  storageBucket: "color-palette-3457e.appspot.com",
  messagingSenderId: "102960221577",
  appId: "1:102960221577:web:76526b1f09258c4f73e558",
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
