import { createContext, useCallback, useEffect, useState } from 'react';

import { User } from '../../models/user';
import { AuthContextType } from './typings/authContextType';
import { auth, authProvider } from '../../services/firebase';
import { convertFirebaseUser } from './functions/convertFirebaseUser';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const userData = convertFirebaseUser(firebaseUser);

        setUser(userData);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const { user: firebaseUser } = await auth.signInWithPopup(authProvider);

    if (firebaseUser) {
      const userData = convertFirebaseUser(firebaseUser);

      setUser(userData);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
