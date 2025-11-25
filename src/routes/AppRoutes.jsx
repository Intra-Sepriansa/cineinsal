import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import AdminLayout from '../layouts/AdminLayout';
import MinimalLayout from '../layouts/MinimalLayout';
import ErrorLayout from '../layouts/ErrorLayout';
import LoadingOverlay from '../components/common/LoadingOverlay';
import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute';
import RoleBasedRoute from './RoleBasedRoute';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const Explore = lazy(() => import('../pages/Explore'));
const Detail = lazy(() => import('../pages/Detail'));
const Player = lazy(() => import('../pages/Player'));
const Profile = lazy(() => import('../pages/Profile'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const VerifyEmail = lazy(() => import('../pages/VerifyEmail'));
const Search = lazy(() => import('../pages/Search'));
const Notifications = lazy(() => import('../pages/Notifications'));
const Subscription = lazy(() => import('../pages/Subscription'));
const BillingHistory = lazy(() => import('../pages/BillingHistory'));
const Settings = lazy(() => import('../pages/Settings'));
const Help = lazy(() => import('../pages/Help'));
const FAQ = lazy(() => import('../pages/FAQ'));
const About = lazy(() => import('../pages/About'));
const ContactSupport = lazy(() => import('../pages/ContactSupport'));
const NotFound = lazy(() => import('../pages/NotFound'));
const AdminDashboard = lazy(() => import('../pages/admin/Dashboard'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingOverlay open={true} />}>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/watch/:id" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactSupport />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<GuestRoute><AuthLayout /></GuestRoute>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/billing" element={<BillingHistory />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Player Route (Minimal Layout) */}
        <Route element={<ProtectedRoute><MinimalLayout /></ProtectedRoute>}>
          <Route path="/play/:id" element={<Player />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<RoleBasedRoute role="admin"><AdminLayout /></RoleBasedRoute>}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* Add other admin routes here */}
        </Route>

        {/* Error Routes */}
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
