// Import types
import { UserType, initial_user_context, userContextTupes } from "./user.types";

export function userReducer(
  state: UserType,
  action: { type: string; payload?: UserType }
) {
  switch (action.type) {
    case userContextTupes.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case userContextTupes.SET_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    case userContextTupes.LOGOUT:
      return initial_user_context;
    default:
      return state;
  }
}
