import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../components/page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // Future pages yahan add kar sakte ho
      // {
      //   path: "about",
      //   element: <About />,
      // },
      // {
      //   path: "services",
      //   element: <Services />,
      // },
      // {
      //   path: "contact",
      //   element: <Contact />,
      // },
    ],
  },
]);

export default router;