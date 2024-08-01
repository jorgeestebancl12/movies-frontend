export interface UserType {
  token: string;
  modal: boolean;
  user: {
    id: string;
    fullname: string;
  };
  conversation: {
    id: string;
  };
}

export const initial_user_context: UserType = {
  token: "",
  modal: false,
  user: {
    id: "",
    fullname: "",
  },
  conversation: {
    id: "",
  },
};

export const userContextTupes = {
  LOGIN: "[USER] Login",
  LOGOUT: "[USER] Logout",
  SET_MODAL: "[USER] Set modal",
};
