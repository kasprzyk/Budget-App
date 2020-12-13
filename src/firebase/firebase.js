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

database
  .ref()
  .set({
    name: 'Piotr Kasprzycki',
    age: 32,
    location: {
      city: 'Iława',
      country: 'Poland',
    },
  })
  .then(() => {
    console.log('data is saved');
  })
  .catch((e) => {
    console.log('error: ', e);
  });

// database
//   .ref('attributes')
//   .set({
//     height: 73,
//     weight: 100,
//   })
//   .then(() => {
//     console.log('call worked');
//   })
//   .catch((e) => {
//     console.log('error', e);
//   });

// database
//   .ref('age')
//   .remove()
//   .then(() => {
//     console.log('removed sucessfully');
//   })
//   .catch((e) => {
//     console.log('error', e);
//   });

database
  .ref('age')
  .set(null)
  .then(() => {
    console.log('Property is now == null');
  })
  .catch((e) => {
    console.log('error', e);
  });
