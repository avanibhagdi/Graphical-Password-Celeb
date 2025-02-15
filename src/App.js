import logo from "./logo.svg";
import "./App.css";
import Imagepassword from "./screens/image-password";
import Success from "./screens/success";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verified from "./screens/verified";
import ErrorC from "./screens/error";
import Name from "./screens/name";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// to create a url for each user, we will now use get method to get name of user and extract username from it to use in the app
const url = new URL(window.location.href);
const name = url.searchParams.get("name"); // example url : http://localhost:3000/?name=John
localStorage.setItem("name", name);
// we will use this name to create a url for each user
// example url : http://localhost:3000/John
console.log(name);
// we also want to get the session number, 0 for setup and so on
const session = url.searchParams.get("session"); // example url : http://localhost:3000/?name=John&session=0
localStorage.setItem("session", session);
console.log(session);
// I want to be able to use the name and session number in the other file (image-password.jsx) so I will use localStorage to store them

const router = createBrowserRouter([
  {
    path: "/",
    element: <Imagepassword />,
  },
  {
    path: "/ip",
    element: <Imagepassword />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/error",
    element: <ErrorC />,
  },
  {
    path: "/verified",
    element: <Verified />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
