import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
import { useCommHook } from 'hooks/comm-hook';

import Svgs from 'components/atom/Svgs';

import FooterMain from 'components/blocks/Footer/FooterMain';

import './LayoutMain.scss';

export const { Header, Content } = Layout;

const LayoutMain: React.FC = () => {
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
            <Svgs iconName="WemixLogo" />
          </div>
          <div className="title">WEMIX DEX</div>

          {/* <div className="layout__main__nav">
            <div className="">
              <Svgs iconName="NavShop" />
            </div>
            <div className="">SCOPE</div>
          </div> */}
        </Header>

        <Content className="layout__main__content">
          <div style={{ padding: 24, minHeight: 360 }}>MAIN CONTENT</div>
        </Content>

        <FooterMain />
      </Layout>
    </Layout>
  );
};

export default LayoutMain;
