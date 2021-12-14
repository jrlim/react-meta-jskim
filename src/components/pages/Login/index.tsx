import React, { useState } from 'react';

import Loading from 'components/atom/Loding';

import './index.scss';

const Login: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="login">
      Login
      {collapsed && (
        <div className="pixed-loading">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Login;
