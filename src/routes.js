import { Navigate } from 'react-router-dom';
import Activity from 'src/pages/Activity';
import BusinessRegister from './pages/BusinessRegister';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import DashboardBusiness from 'src/pages/DashboardBusiness';
import DashboardTalent from 'src/pages/DashboardTalent';
import Offers from 'src/components/dashboard/Offers';
import Interviews from 'src/components/dashboard/Interviews';
import ViewedProfile from 'src/components/dashboard/ViewedProfile';
import Matches from 'src/components/dashboard/Matches';
import Reset from 'src/pages/Reset';
import Forgot from 'src/pages/Forgot';
import Interview from './pages/Interview';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import PaymentInfo from 'src/pages/PaymentInfo';
import Register from 'src/pages/Register';
import ShortList from './pages/ShortList';
import Role from './pages/Role';
import SplashScreen from './pages/SplashScreen';
import TalentProfile from 'src/pages/TalentProfile';
import Verify from 'src/pages/Verify';
import CandidateList from './pages/CandidateList';
import TalentProfileBusiness from './pages/TalentProfileBusiness';

const routes = [
  {
    path: 'business',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardBusiness /> },
      { path: 'business-profile', element: <BusinessRegister /> },
      { path: 'role', element: <Role /> },
      { path: 'role/candidate-list', element: <CandidateList /> },
      { path: 'role/candidate-list/candidate', element: <TalentProfileBusiness /> },
      { path: 'short-list', element: <ShortList /> },
      { path: 'interview', element: <Interview /> },
      { path: '/', element: <Navigate to="/business/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'talent',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardTalent /> },
      { path: 'profile', element: <TalentProfile /> },
      { path: 'payment-info', element: <PaymentInfo /> },
      { path: 'activity', element: <Activity /> },
      { path: 'offers', element: <Offers /> },
      { path: 'interviews', element: <Interviews /> },
      { path: 'viewed-profile', element: <ViewedProfile /> },
      { path: 'matches', element: <Matches /> },
      { path: '/', element: <Navigate to="/talent/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },

  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'reset', element: <Reset /> },
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
