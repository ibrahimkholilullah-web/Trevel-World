import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/router";
import AuthPrivated from "./Components/AuthPrivate/AuthPrivated";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthPrivated>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthPrivated>
  </React.StrictMode>
);
