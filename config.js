import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDqfsGi5aFSkQRQC1DMV9jseIry8UsNw8g",
  authDomain: "online-library-c4906.firebaseapp.com",
  projectId: "online-library-c4906",
  storageBucket: "online-library-c4906.appspot.com",
  messagingSenderId: "226449549369",
  appId: "1:226449549369:web:35b89b5bc68e78ffa005e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()