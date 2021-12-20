import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useCommHook } from 'hooks/comm-hook';

import Svgs from 'components/atom/Svgs';

import FooterMain from 'components/blocks/Footer/FooterMain';

import './LayoutMain.scss';

const { Header, Content } = Layout;
const { SubMenu } = Menu;

const LayoutMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { FetchRouter } = useCommHook();

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    /*     <Layout className="layout"> */
    <Layout className="layout layout__main">
      <Header className="layout__main__header">
        <div className="icon">
          <Svgs iconName="WemixLogo" />
        </div>
        <div className="title">WEMIXswap</div>

        <div className="nav">
          <Menu className="nav__menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Svgs iconName="NavAsset" />
              내자산
            </Menu.Item>
            <Menu.Item key="2">
              <Svgs iconName="NavSwap" />
              스왑
            </Menu.Item>
            <Menu.Item key="3">
              <Svgs iconName="NavPool" />
              풀예치
            </Menu.Item>
            <Menu.Item key="4">
              <Svgs iconName="NavStaking" />
              스테이킹
            </Menu.Item>
            <Menu.Item key="5">
              <Svgs iconName="NavWallet" />
            </Menu.Item>
            <Menu.Item key="6">
              <Svgs iconName="NavUser" />
              Josh
              <Svgs iconName="NavSelect" />
            </Menu.Item>
            <Menu.Item key="7">
              {/* <Svgs iconName="NavLang" /> */}
              <SubMenu key="sub1" icon={<GlobalOutlined />} title="">
                <Menu.Item key="kr">KR</Menu.Item>
                <Menu.Item key="en">EN</Menu.Item>
                <Menu.Item key="cn">CN</Menu.Item>
                <Menu.Item key="jp">JP</Menu.Item>
              </SubMenu>
            </Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content className="content">
        <div style={{ padding: 24, minHeight: 360 }}>MAIN CONTENT</div>
      </Content>

      <FooterMain />
    </Layout>
    /*     </Layout> */
  );
};

export default LayoutMain;
