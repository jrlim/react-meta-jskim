import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { useCommHook } from 'hooks/comm-hook';

import Svgs from 'components/atom/Svgs';

import './index.scss';

export const { Header, Sider, Content } = Layout;
export const { SubMenu } = Menu;

const WebMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { FetchRouter } = useCommHook();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="layout">
      <Layout className="layout__main">
        <Header className="layout__main__header">
          <div className="icon">
            <Svgs iconName="AccountBookOutlined" />
          </div>
          <div className="title">경영정보</div>
        </Header>
        <Content className="layout__main__content">
          <div style={{ padding: 24, minHeight: 360 }}>Bill is a cat.</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default WebMain;
