import { createContext, useState } from "react";
import Cookies from "universal-cookie";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  saveUserInfo: () => {},
});

export const UserProvider = ({ children }) => {
  const cookies = new Cookies();
  const [currentUser, setCurrentUser] = useState(cookies.get("user"));
  const value = { currentUser, setCurrentUser, saveUserInfo };
  console.log("UserProvider");

  function saveUserInfo(user) {
    new Cookies().set("user", user, { path: "/", sameSite: true });
    setCurrentUser(user);
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
