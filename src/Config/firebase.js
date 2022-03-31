import firebase from 'firebase/compat/app' 
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA3W0IQRz-VSEo40zFH6bI1H7ghycRle2Y",
  authDomain: "database-shop-641f6.firebaseapp.com",
  projectId: "database-shop-641f6",
  storageBucket: "database-shop-641f6.appspot.com",
  messagingSenderId: "234346068713",
  appId: "1:234346068713:web:2c25a755eb9e9f3be28e78"
};
  
 firebase.initializeApp(firebaseConfig)
  firebase.db = firebase.firestore()
  firebase.auth = firebase.auth()
 export default firebase; 