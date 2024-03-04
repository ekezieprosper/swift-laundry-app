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
import DashBoad from './dashBoardComponent/DashBoard';
import Testimony from './testimonyComponent/Testimony';
import Layout from './layoutComponent/Layout';
import ShopPage from './pagesComponent/ShopPage';
import OfferPage from './pagesComponent/OfferPage';
import OurOffer from './ourOfferComponent/OurOffer';
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
import BusinessDashboardLayout from './businessDashboardLayoutComponent/BusinessDashboardLayout';
import ShopLogin from './ShopLoginComponent/ShopLogin';
import Verification from './VerificationPage/Verify';
import Click from './VerificationsPage/verifys';

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
    path: "/registerLogin",
    element: <ShopLogin />
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
    path: "/verifyEmail",
    element: <Verification />
  },


  {
    path: "/verifyEmails",
    element: <Click />
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
        path: "/subscribe",
        element: <Subscribe />
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
        path: "/businessUser",
        element: <Subscribe />
      },
      {
        path: "/businessSubscribe",
        element: <Subscribe />
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

