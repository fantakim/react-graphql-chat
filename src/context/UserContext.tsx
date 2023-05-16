import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AUTH } from '../constants';
import { UserFragment } from '../graphql/generated/schema';

type Props = {
  children: React.ReactNode;
};

type Context = {
  signIn: (user: UserFragment, token: string) => void;
  signOut: () => void;
  user: UserFragment | null;
};

const UserContext = createContext<Context>({
  signIn: () => {},
  signOut: () => {},
  user: null,
});

const UserContextProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<UserFragment | null>(null);

  const signOut = useCallback(() => {
    localStorage.removeItem(AUTH.token);
    localStorage.removeItem(AUTH.user);
    setUser(null);
  }, []);

  const signIn = useCallback((user: UserFragment, token: string) => {
    localStorage.setItem(AUTH.token, token);
    localStorage.setItem(AUTH.user, JSON.stringify(user));
    setUser(user);
  }, []);

  useEffect(() => {
    const restoreUser = () => {
      const user = localStorage.getItem(AUTH.user);
      if (user) {
        const decodedUser: UserFragment = JSON.parse(user);
        setUser(decodedUser);
      }
    };

    restoreUser();
  }, []);

  const contextValue = useMemo(
    () => ({
      signIn,
      signOut,
      user,
    }),
    [signIn, signOut, user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};

export default UserContextProvider;
