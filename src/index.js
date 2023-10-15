import ReactDOM from "react-dom/client";
import React from "react";
import routes from "./routes/routes";
import "./assets/css/tailwind.css";
import { RouterProvider } from "react-router-dom";
import { PortProvider } from "./context/port_context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortProvider>
      <RouterProvider router={routes} />
    </PortProvider>
  </React.StrictMode>
);
