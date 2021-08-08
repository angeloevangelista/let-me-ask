import { User } from "../../../models/user";

type AuthContextType = {
  user: User | undefined;

  signInWithGoogle: () => Promise<void>;
};

export type { AuthContextType };
