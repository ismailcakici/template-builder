import ReactDOM from "react-dom/client";
import React from "react";
import routes from "./routes/routes";
import "./assets/css/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./context/global_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <RouterProvider router={routes} />
  </GlobalContextProvider>
);
