import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATo-pgDI1tLXErMWLwlZpidyG1CNCAMtM",
  authDomain: "rabin-ubereats-rn.firebaseapp.com",
  projectId: "rabin-ubereats-rn",
  storageBucket: "rabin-ubereats-rn.appspot.com",
  messagingSenderId: "26143672857",
  appId: "1:26143672857:web:7d83b36b005aacbd22f888",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
