import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

import firebaseConfig from '../config/firebase';

enum DatabaseRefs {
  Rooms = 'rooms',
  Questions = 'questions',
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
const authProvider = new firebase.auth.GoogleAuthProvider();

export { authProvider, auth, database, DatabaseRefs };
