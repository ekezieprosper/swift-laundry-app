import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterSignUp from './registerSignupComponent/RegisterSignUp';
// import ShopLogin from './ShopLoginComponent/ShopLogin';

import Signup from './signupComponent/Signup';
import Login from './loginComponents/Login';
import LandingPage from './landingPageComponents/LandingPage';
// import DashBoad from './dashBoardComponent/DashBoard';
// import Testimony from './testimonyComponent/Testimony';
import Layout from './layoutComponent/Layout';
import ShopPage from './pagesComponent/ShopPage';
import OfferPage from './pagesComponent/OfferPage';
// import OurOffer from './ourOfferComponent/OurOffer';
import PlanPage from './pagesComponent/PlanPage';
import AboutPage from './pagesComponent/AboutPage';
import ContactPage from './pagesComponent/ContactPage';
import DashboardLayout from './dashboardLayoutComponent/DashboardLayout';
import Order from './orderComponent/Order';
import Subscribe from './subscribeComponent/Subscribe';
import DashBoard from './dashBoardComponent/DashBoard';
import Plan from './signupComponent/planComponent/Plan';
import BusinessDashBoard from './businessDashBoardComponent/BusinessDashBoard';
import BusinessOrder from './businessOrderComponentss/BusinessOrder';
import BusinessDashboardLayout from './businessDashboardLayoutComponent';
import Verification from './VerificationPage/Verify';
import OrderDetail from './orderDetailComponent/OrderDetail';
import WashPage from './washPageComponent/WashPage';
import BusinessSubscribe from './businessSubscribeComponent/BusinessSubscribe';
import Verifys from './verifyPage/verify';
import VerifyEmail from './VerificationPage/verifyEmail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/shopPage",
        element: <ShopPage />
      },
      {
        path: "/offer",
        element: <OfferPage />
      },
      {
        path: "/plans",
        element: <Plan />
      },
      {
        path: "/aboutPage",
        element: <AboutPage />
      },
      {
        path: "/contactPage",
        element: <ContactPage />
      },
    ]
  },
  {
    path: "/registerSignup",
    element: <RegisterSignUp />
  },





  {
    path: "/signup",
    element: <Signup />
  },


  {
    path: "/login",
    element: <Login />
  },


  {
    path: "/VerifyUser",
    element: <VerifyEmail />
  },


  {
    path: "/emailVerification",
    element: <Verification />
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboards",
        element: <DashBoard />
      },
      {
        path: "/order",
        element: <Order />
      },
      {
        path: "/orderDetail/:id",
        element: <OrderDetail />
      },
      // {
      //   path: "/subscribe",
      //   element: <Subscribe />
      // },
      {
        path: "/washPage/:id",
        element: <WashPage />
      },

    ]
  },



  {
    element: <BusinessDashboardLayout />,
    children: [
      {
        path: "/businessDashboard",
        element: <BusinessDashBoard />
      },
      {
        path: "/businessOrder",
        element: <BusinessOrder />
      },
      {
        path: "/businessSubscribe",
        element: <BusinessSubscribe />
      },

    ]
  },

]);



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

