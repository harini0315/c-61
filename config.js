 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5j6eyLC05KzZh5xpl5GW_7ICQbnn8cxA",
  authDomain: "c-60-db779.firebaseapp.com",
  databaseURL: "https://c-60-db779-default-rtdb.firebaseio.com",
  projectId: "c-60-db779",
  storageBucket: "c-60-db779.appspot.com",
  messagingSenderId: "472202266245",
  appId: "1:472202266245:web:4b2f68757a3202a90b0bec"
};


  firebase.initializeApp(firebaseConfig);


  export default firebase.database()
 

  