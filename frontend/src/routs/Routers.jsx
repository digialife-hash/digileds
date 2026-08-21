import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../components/page/Home";
import Abouts from "../components/page/Abouts";
import WhyChooseUs from "../components/page/WhychUs";
import ServiceDetail from "../components/page/ServiceDetail";
import Careers from "../components/page/Careers";
import DevelopmentProcess from "../components/page/DevelopmentProcess";
import Pricing from "../components/page/Pricing";
import Contact from "../components/page/Contact";
import Quote from "../components/page/Quote";
import NotFound from "../components/page/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      { path: "about", element: <Abouts /> },
      { path: "why-us", element: <WhyChooseUs /> },
      { path: "services/:slug", element: <ServiceDetail /> },
      { path: "careers", element: <Careers /> },
      { path: "development-process", element: <DevelopmentProcess /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "quote", element: <Quote /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
