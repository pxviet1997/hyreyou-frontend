import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import DashboardBusiness from 'src/pages/DashboardBusiness';
import DashboardTalent from 'src/pages/DashboardTalent';
import Offers from 'src/components/dashboard/Offers';
import Interviews from 'src/components/dashboard/Interviews';
import ViewedProfile from 'src/components/dashboard/ViewedProfile';
import Matches from 'src/components/dashboard/Matches';

import Login from 'src/pages/Login';
import Reset from 'src/pages/Reset';
import Forgot from 'src/pages/Forgot';
import Verify from 'src/pages/Verify';
import NotFound from 'src/pages/NotFound';
// import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Contractor from 'src/components/dashboard/Contractor';
// import Settings from 'src/pages/Settings';
import { PaymentInfo, TalentProfile, Activity } from './components/talent';
import BusinessRegister from './pages/BusinessRegister';
import Interview from './pages/Interview';
import Role from './pages/Role';
import ShortList from './pages/ShortList';

import SplashScreen from './pages/SplashScreen';
// import TalentRegister from './pages/TalentRegister';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboardBusiness', element: <DashboardBusiness /> },
      // { path: 'talent-profile', element: <TalentRegister /> },
      { path: 'business-profile', element: <BusinessRegister /> },
      { path: 'role', element: <Role /> },
      { path: 'short-list', element: <ShortList /> },
      { path: 'interview', element: <Interview /> },
      { path: 'contractor', element: <Contractor /> },
      { path: '/app', element: <Navigate to="/app/dashboardBusiness" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'business',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboardBusiness', element: <DashboardBusiness /> },
      // { path: 'talent-profile', element: <TalentRegister /> },
      { path: 'business-profile', element: <BusinessRegister /> },
      { path: 'role', element: <Role /> },
      { path: 'short-list', element: <ShortList /> },
      { path: 'interview', element: <Interview /> },
      { path: 'contractor', element: <Contractor /> },
      { path: '/', element: <Navigate to="/business/dashboardBusiness" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'talent',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboardTalent', element: <DashboardTalent /> },
      { path: 'profile', element: <TalentProfile /> },
      { path: 'payment-info', element: <PaymentInfo /> },
      { path: 'activity', element: <Activity /> },
      { path: 'offers', element: <Offers /> },
      { path: 'interviews', element: <Interviews /> },
      { path: 'viewed-profile', element: <ViewedProfile /> },
      { path: 'matches', element: <Matches /> },
      { path: '/', element: <Navigate to="/talent/dashboardTalent" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'reset/:userType', element: <Reset /> },
      { path: 'forgot', element: <Forgot /> },
      { path: 'verify', element: <Verify /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <SplashScreen /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
