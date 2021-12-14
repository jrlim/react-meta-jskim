import React, { Suspense } from 'react';
import { Result } from 'antd';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Loading from 'components/atom/Loding';

import WebMainPage from 'components/blocks/WebMain';

import LoginPage from 'components/pages/Login';
import DashboardOperation from 'components/pages/DashboardOperation';
import Operation from 'components/pages/Operation';

const router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<WebMainPage />}>
            <Route path="dashboard-operation" element={<DashboardOperation />} />
            <Route path="operation" element={<Operation />} />
          </Route>

          <Route
            path="/*"
            element={<Result status="warning" title="페이지를 찾을 수 없습니다." style={{ marginTop: '26vh' }} />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default router;
