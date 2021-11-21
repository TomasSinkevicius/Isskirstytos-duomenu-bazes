import "firebase/database";
import firebase from "firebase";

let config = {
  apiKey: "AIzaSyCTfK84A_NB-5CuMu6QWJ6WAHvRPvV6JQI",
  authDomain: "isskirstytos-duomenu-bazes.firebaseapp.com",
  databaseURL:
    "https://isskirstytos-duomenu-bazes-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "isskirstytos-duomenu-bazes",
  storageBucket: "isskirstytos-duomenu-bazes.appspot.com",
  messagingSenderId: "651264855183",
  appId: "1:651264855183:web:f6730fff6841a71b4cf4fa",
  measurementId: "G-07DQDV7Z7G",
};
let secondConfig = {
  apiKey: "AIzaSyBXY7cgNpQixZnSxBrkoInfegxos4NitQg",
  authDomain: "duombazes1.firebaseapp.com",
  databaseURL:
    "https://duombazes1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "duombazes1",
  storageBucket: "duombazes1.appspot.com",
  messagingSenderId: "327924615257",
  appId: "1:327924615257:web:66478498bf6afce47bc948",
};

const first = firebase.initializeApp(config, "first");
const second = firebase.initializeApp(secondConfig, "secondary");

const databases = { db1: first, db2: second };

// const databases = [first, second];

export default databases;
