import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../components/page/Home";
import Abouts from "../components/page/Abouts";
import WhyChooseUs from "../components/page/WhychUs";
import WebDevelopment from "../components/services/WebDevelopment";
import MobileAppDevelopment from "../components/services/MobileAppDevelopment";
import Ecommerce from "../components/services/Ecommerce";
import DigitalMarketing from "../components/services/DigitalMarketing";
import GoogleSEO from "../components/services/GoogleSEO";
import SocialMediaHandling from "../components/services/SocialMediaHandling";
import MetaAds from "../components/services/MetaAds";
import GoogleAds from "../components/services/GoogleAds";
import WhatsAppMarketing from "../components/services/WhatsAppMarketing";
import EmailMarketing from "../components/services/EmailMarketing";
import VideoEditing from "../components/services/VideoEditing";
import CustomSoftware from "../components/services/CustomSoftware";
import UIUXDesign from "../components/services/UIUXDesign";
import GraphicsDesign from "../components/services/GraphicsDesign";
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
      { path: "services/web-development", element: <WebDevelopment /> },
      { path: "services/mobile-app-development", element: <MobileAppDevelopment /> },
      { path: "services/e-commerce", element: <Ecommerce /> },
      { path: "services/digital-marketing", element: <DigitalMarketing /> },
      { path: "services/google-seo", element: <GoogleSEO /> },
      { path: "services/social-media-handling", element: <SocialMediaHandling /> },
      { path: "services/meta-ads", element: <MetaAds /> },
      { path: "services/google-ads", element: <GoogleAds /> },
      { path: "services/whatsapp-marketing", element: <WhatsAppMarketing /> },
      { path: "services/email-marketing", element: <EmailMarketing /> },
      { path: "services/video-editing", element: <VideoEditing /> },
      { path: "services/custom-software", element: <CustomSoftware /> },
      { path: "services/ui-ux-design", element: <UIUXDesign /> },
      { path: "services/graphics-design", element: <GraphicsDesign /> },
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
