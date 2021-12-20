import React, { useState } from 'react';
import { Layout } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useCommHook } from 'hooks/comm-hook';

import Svgs from 'components/atom/Svgs';

import FooterMain from 'components/blocks/Footer/FooterMain';
import NavMain from 'components/blocks/Nav/NavMain';

import './LayoutMain.scss';

const { Header, Content } = Layout;

const LayoutMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { FetchRouter } = useCommHook();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout className="layout layout__main">
      <Header className="layout__main__header">
        <div className="icon">
          <Svgs iconName="WemixLogo" />
        </div>
        <div className="title">WEMIXswap</div>
        <NavMain />
      </Header>

      <Content className="content">
        <div style={{ padding: 24, minHeight: 360 }}>MAIN CONTENT</div>
      </Content>

      <FooterMain />
    </Layout>
  );
};

export default LayoutMain;
