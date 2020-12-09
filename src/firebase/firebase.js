import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyB9seJX61JZCnCilM-93ugaYd-UL38k9v4',
  authDomain: 'expensify-4cbeb.firebaseapp.com',
  databaseURL: 'https://expensify-4cbeb-default-rtdb.firebaseio.com',
  projectId: 'expensify-4cbeb',
  storageBucket: 'expensify-4cbeb.appspot.com',
  messagingSenderId: '452501806143',
  appId: '1:452501806143:web:b5307dbd6a112d1bdbec8a',
  measurementId: 'G-C3GHKH95VF',
};

firebase.initializeApp(firebaseConfig);
firebase.database().ref().set({
  name: 'Piotr Kasprzycki',
});

// <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>

// <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js"></script>

// <script>
// var firebaseConfig = {
//     apiKey: "AIzaSyB9seJX61JZCnCilM-93ugaYd-UL38k9v4",
//     authDomain: "expensify-4cbeb.firebaseapp.com",
//     databaseURL: "https://expensify-4cbeb-default-rtdb.firebaseio.com",
//     projectId: "expensify-4cbeb",
//     storageBucket: "expensify-4cbeb.appspot.com",
//     messagingSenderId: "452501806143",
//     appId: "1:452501806143:web:b5307dbd6a112d1bdbec8a",
//     measurementId: "G-C3GHKH95VF"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
