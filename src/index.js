import ReactDOM from "react-dom/client";
import React from "react";
import routes from "./routes/routes";
import "./assets/css/tailwind.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
