import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

const Account = lazy(() => import('../screens/User/Account'));
const Setting = lazy(() => import('../screens/User/Setting'));
const SignIn = lazy(() => import('../screens/User/SignIn'));
const SignUp = lazy(() => import('../screens/User/SignUp'));
const ForgotPassword = lazy(() => import('../screens/User/ForgotPassword'));
const ResetPassword = lazy(() => import('../screens/User/ResetPassword'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProtectedRoute component={<Account />} />} />
        <Route
          path="/setting/*"
          element={<ProtectedRoute component={<Setting />} />}
        />
        <Route path="/signin" element={<AuthRoute component={<SignIn />} />} />
        <Route path="/signup" element={<AuthRoute component={<SignUp />} />} />
        <Route
          path="/forgot-password"
          element={<AuthRoute component={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password/:token"
          element={<AuthRoute component={<ResetPassword />} />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;