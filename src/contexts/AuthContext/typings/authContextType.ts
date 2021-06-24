import { User } from './user';

type AuthContextType = {
  user: User | undefined;

  signInWithGoogle: () => Promise<void>;
};

export type { AuthContextType };
