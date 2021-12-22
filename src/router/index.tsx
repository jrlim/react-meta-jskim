import React, { Suspense, ReactElement } from 'react';
import { Result } from 'antd';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, RouteProps } from 'react-router-dom';

// import WebMainPage from 'components/blocks/WebMain';
import Loading from 'components/atom/Loading';
import LayoutMain from 'components/layout/LayoutMain';
import { Dev, NotFound, Landing, MyAsset, Swap, Pool, Staking, Wallet, User } from 'components/pages';

/**
 * route 변경 시, 디버깅 확인
 * @param param
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation();

  if (process.env.NODE_ENV === 'development') {
    console.log(`Route: ${location.pathname}${location.search}, State: ${JSON.stringify(location.state)}`);
  }

  return children;
};

const router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <DebugRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/main/landing" />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="main" element={<LayoutMain />}>
              <Route path="landing" element={<Landing />} />
              <Route path="my-asset" element={<MyAsset />} />
              <Route path="swap" element={<Swap />} />
              <Route path="pool" element={<Pool />} />
              <Route path="staking" element={<Staking />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="user" element={<User />} />
              <Route path="dev" element={<Dev />} />
            </Route>

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </DebugRouter>
      </Router>
    </Suspense>
  );
};

export default router;
