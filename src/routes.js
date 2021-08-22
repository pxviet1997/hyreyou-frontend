import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import Reset from 'src/pages/Reset';
import Forgot from 'src/pages/Forgot';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';
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
      // { path: 'account', element: <Account /> },
      // { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'reset', element: <Reset /> },
      { path: 'forgot', element: <Forgot /> },
      // { path: 'products', element: <ProductList /> },
      // { path: 'settings', element: <Settings /> },
      { path: 'talent-profile', element: <TalentRegister /> },
      { path: 'business-profile', element: <BusinessRegister /> },
      { path: 'role', element: <Role /> },
      { path: 'short-list', element: <ShortList /> },
      { path: 'interview', element: <Interview /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'reset', element: <Reset /> },
      // { path: 'forgot', element: <Forgot /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      // { path: '/', element: <Navigate to="/app/talent-profile" /> },
      { path: '/', element: <SplashScreen /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
