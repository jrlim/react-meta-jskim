import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { useCommHook } from 'hooks/comm-hook';

import Svgs from 'components/atom/Svgs';

import FooterMain from 'components/blocks/Footer/FooterMain';
import NavMain from 'components/blocks/Nav/NavMain';

import './LayoutMain.scss';

const { Header, Content } = Layout;

const LayoutMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { FetchRouter } = useCommHook();

  const onCollapse = (collapsed: boolean): void => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="layout">
      <Header className="layout__header">
        <div className="icon">
          <Svgs iconName="WemixLogo" />
        </div>
        <div className="title">WEMIXswap</div>
        <NavMain />
      </Header>

      <Content className="layout__content">
        <Outlet />
      </Content>

      <FooterMain />
    </Layout>
  );
};

export default LayoutMain;
