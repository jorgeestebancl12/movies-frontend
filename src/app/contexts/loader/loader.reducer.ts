// Types
import { loaderContextTypes } from "./loader.types";

export function loaderReducer(
  state: boolean,
  action: { type: string; payload: boolean }
) {
  switch (action.type) {
    case loaderContextTypes.LOADER:
      return action.payload;
    default:
      return state;
  }
}
