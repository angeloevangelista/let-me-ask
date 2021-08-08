import firebase from 'firebase';

import { User } from '../../../models/user';

function convertFirebaseUser(firebaseUser: firebase.User): User {
  const { displayName, photoURL, uid } = firebaseUser;

  if (!displayName || !photoURL)
    throw new Error('Missing information from Google Account.');

  const user: User = {
    id: uid,
    name: displayName,
    avatar: photoURL,
  };

  return user;
}

export { convertFirebaseUser };
