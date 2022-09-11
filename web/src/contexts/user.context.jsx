import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import Cookies from 'universal-cookie';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const cookies = new Cookies();
  const [currentUser, setCurrentUser] = useState(cookies.get('user'));
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      cookies.set('user', user, { path: '/' });
    });

    return unsubsribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
