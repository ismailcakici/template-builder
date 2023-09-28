import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/main";
import NotFound from "../pages/not-found/not_found";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
