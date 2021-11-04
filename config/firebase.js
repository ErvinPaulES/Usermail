import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdNIJGMwOS-0ykMQKy5vS6vGuapU7olXw",
  authDomain: "usermail-7534b.firebaseapp.com",
  projectId: "usermail-7534b",
  storageBucket: "usermail-7534b.appspot.com",
  messagingSenderId: "781482042211",
  appId: "1:781482042211:web:d20e9c0d1713bfec352956"
}

let Firebase;

if(firebase.apps.length === 0){
  Firebase = firebase.initializeApp(firebaseConfig);

}

export default Firebase;