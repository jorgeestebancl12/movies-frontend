// Core
import { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

// Components
import { Loader } from "./components";

// Screens
import { AuthModal } from "./screens/auth/auth.modal";
import { HomeScreen } from "./screens/home/home.screen";
import { MovieScreen } from "./screens/movie/movie.screen";
import { LayoutScreen } from "./screens/layout/layout.screen";

// Contexts
import { UserContext } from "./contexts/user/user.context";

export function App() {
  const { auth, set_modal } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route
          element={
            <LayoutScreen>
              <Outlet />
            </LayoutScreen>
          }
        >
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<MovieScreen />} />
        </Route>
      </Routes>
      <Loader />
      <AuthModal show={auth.modal} handlerClose={() => set_modal(false)} />
    </>
  );
}
