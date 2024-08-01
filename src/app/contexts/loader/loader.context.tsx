// Core
import { useReducer, createContext } from "react";
import { useCallback } from "react";

// Reducer
import { loaderReducer } from "./loader.reducer";

// Type
import { loaderContextTypes } from "./loader.types";

// Initial value
const loading_init: boolean = false;

// Create the context
export const LoaderContext = createContext({
  loading: false,
  setLoading: (status: boolean): void => {
    console.log(status);
  },
});

// Create the provider
export function LoaderProvider({ children }: { children: JSX.Element }) {
  const [loading, dispatch] = useReducer(loaderReducer, loading_init);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: loaderContextTypes.LOADER, payload: loading });
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}
