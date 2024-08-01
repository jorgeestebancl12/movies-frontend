// Core
import { createContext, useCallback, useReducer } from "react";

// Types
import { UserType, initial_user_context, userContextTupes } from "./user.types";

// Reducers
import { userReducer } from "./user.reducer";

// Utilites
import { remove_token, save_token } from "../../utilities/storage.utility";

// Define the context
export const UserContext = createContext({
  auth: {} as UserType,
  logout: (): void => {},
  login: (user: UserType): void => {
    console.log(user);
  },
  set_modal: (show: boolean) => {
    console.log(show);
  },
});

// Create the provider
export function UserProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [auth, dispatch] = useReducer(userReducer, initial_user_context);

  const login = useCallback((user: UserType) => {
    save_token(user.token);
    dispatch({
      type: userContextTupes.LOGIN,
      payload: user,
    });
  }, []);

  const logout = useCallback(() => {
    remove_token();
    dispatch({ type: userContextTupes.LOGOUT });
  }, []);

  const set_modal = useCallback((show: boolean) => {
    dispatch({
      type: userContextTupes.SET_MODAL,
      payload: {
        ...auth,
        modal: show,
      },
    });
  }, []);

  return (
    <UserContext.Provider value={{ auth, login, logout, set_modal }}>
      {children}
    </UserContext.Provider>
  );
}
