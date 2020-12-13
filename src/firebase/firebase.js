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

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763,
});

//database.ref('notes/-MORto9lO8_zfuommLur').remove();

// database.ref('notes').push({
//   title: 'to do2',
//   body: 'test2',
// });

// const firebaseNotes = {
//   notes: {
//     test: {
//       title: 'test',
//       body: 'test',
//     },
//     test2: {
//       title: 'test',
//       body: 'test',
//     },
//   },
// };

// const notes = [
//   { id: '123,', title: 'asd', body: 'my note' },
//   { id: '123,', title: 'asd', body: 'my note' },
// ];

// database.ref('notes').set(notes);
// database.ref().on(
//   'value',
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   },
//   (e) => {
//     console.log('error while fetching', e);
//   }
// );

// database
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error: ', e);
//   });

// const onValueChange = database.ref().on(
//   'value',
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log('error with data fetching', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(24);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 4500);

// setTimeout(() => {
//   database.ref('age').set(27);
// }, 5500);

// database
//   .ref()
//   .set({
//     name: 'Piotr Kasprzycki',
//     age: 32,
//     job: {
//       title: 'software dev',
//       company: 'ibpm',
//     },
//     location: {
//       city: 'Iława',
//       country: 'Poland',
//     },
//   })
//   .then(() => {
//     console.log('data is saved');
//   })
//   .catch((e) => {
//     console.log('error: ', e);
//   });

// database
//   .ref()
//   .update({
//     name: 'Stefan',
//     age: 30,
//     'location/city': 'Boston',
//   })
//   .then(() => {
//     console.log('data is updated');
//   })
//   .catch((e) => {
//     console.log('error: ', e);
//   });

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

// database
//   .ref('age')
//   .set(null)
//   .then(() => {
//     console.log('Property is now == null');
//   })
//   .catch((e) => {
//     console.log('error', e);
//   });
