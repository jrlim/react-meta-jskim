import React, { Suspense, ReactElement } from 'react';
import { Result } from 'antd';
import { HashRouter as Router, Routes, Route, Navigate, useLocation, RouteProps } from 'react-router-dom';

import Loading from 'components/atom/Loding';

import LoginPage from 'components/pages/Login';
import WebMainPage from 'components/blocks/WebMain';
import LayoutMain from 'components/layout/LayoutMain';

import DashboardOperation from 'components/pages/DashboardOperation';
import Operation from 'components/pages/Operation';
import MyAsset from 'components/pages/MyAsset';
import Swap from 'components/pages/Swap';
import Pool from 'components/pages/Pool';
import Staking from 'components/pages/Staking';
import Wallet from 'components/pages/Wallet';
import User from 'components/pages/User';

/**
 * route 변경 시, 디버깅 확인
 * @param param
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation();

  if (process.env.NODE_ENV === 'development') {
    console.log(`children ---> `, children);
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
            <Route path="/" element={<Navigate to="/main" />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="main" element={<LayoutMain />}>
              <Route path="dashboard-operation" element={<DashboardOperation />} />
              <Route path="operation" element={<Operation />} />
              <Route path="my-asset" element={<MyAsset />} />
              <Route path="swap" element={<Swap />} />
              <Route path="pool" element={<Pool />} />
              <Route path="staking" element={<Staking />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="user" element={<User />} />
            </Route>

            <Route
              path="/*"
              element={<Result status="warning" title="페이지를 찾을 수 없습니다." style={{ marginTop: '26vh' }} />}
            />
          </Routes>
        </DebugRouter>
      </Router>
    </Suspense>
  );
};

export default router;
