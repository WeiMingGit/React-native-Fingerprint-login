import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbaqHt-vqBqic4HRc8Po4x7DXs9t0fhjw',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://react-native-bcb74.firebaseio.com/',
  projectId: 'react-native-bcb74',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:1061628549130:android:7e8cd097d1abf7d93667f3',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
