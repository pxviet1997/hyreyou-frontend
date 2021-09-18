import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import Reset from 'src/pages/Reset';
import Forgot from 'src/pages/Forgot';
import Verify from 'src/pages/Verify';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
import { PaymentInfo, TalentProfile, Activity } from './components/talent';
import BusinessRegister from './pages/BusinessRegister';
import Interview from './pages/Interview';
import Role from './pages/Role';
import ShortList from './pages/ShortList';
import SplashScreen from './pages/SplashScreen';
import TalentRegister from './pages/TalentRegister';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'talent-profile', element: <TalentRegister /> },
      { path: 'business-profile', element: <BusinessRegister /> },
      { path: 'role', element: <Role /> },
      { path: 'short-list', element: <ShortList /> },
      { path: 'interview', element: <Interview /> },
      { path: '/app', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: 'talent',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'profile', element: <TalentProfile /> },
      { path: 'payment-info', element: <PaymentInfo /> },
      { path: 'activity', element: <Activity /> },
      { path: '/', element: <Navigate to="/talent/dashboard" /> },
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
