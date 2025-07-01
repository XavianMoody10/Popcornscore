import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home/Home";
import { Header } from "./layouts/Header";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { UserStatusProvider } from "./contexts/UserStatusContext";

export const queryClient = new QueryClient();

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <UserStatusProvider>
          <RouterProvider router={router} />
        </UserStatusProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
