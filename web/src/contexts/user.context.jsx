import { createContext, useReducer } from "react";
import Cookies from "universal-cookie";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
  saveUserInfo: () => {},
});

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
const INITIAL_STATE = {
  currentUser: new Cookies().get("user"),
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }
  const value = { currentUser, setCurrentUser, saveUserInfo };
  console.log("UserProvider");

  function saveUserInfo(user) {
    new Cookies().set("user", user, { path: "/", sameSite: true });
    setCurrentUser(user);
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
