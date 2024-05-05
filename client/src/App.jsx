import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Home from "./pages/Home/Home";
import Admin from "./Admin/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/router-name" element={<element-name />} /> */}
      <Route path="/" element={<Auth />} />

      <Route
        index
        element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />

      <Route
        path="/admin"
        element={
          <>
            <SignedIn>
              <Admin />
            </SignedIn>

            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </>
  )
);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
