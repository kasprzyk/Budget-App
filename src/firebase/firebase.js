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

const database = firebase.database();

database.ref().set({
  name: 'Piotr Kasprzycki',
  age: 32,
  location: {
    city: 'Iława',
    country: 'Poland',
  },
});

//database.ref().set('This is my data');

database.ref('age').set(27);
database.ref('location/city').set('Detroit');
database.ref('attributes').set({
  height: 73,
  weight: 100,
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
