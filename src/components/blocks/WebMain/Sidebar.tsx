import React, { useMemo } from 'react';

import { TreeItem } from 'performant-array-to-tree';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { useCommHook } from 'hooks/comm-hook';
import Svgs from 'components/atom/Svgs';

export const { Header, Sider, Content } = Layout;
export const { SubMenu } = Menu;

interface ISidebar {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<ISidebar> = (props: ISidebar) => {
  const { FetchRouterTree } = useCommHook();

  const { collapsed, setCollapsed } = props;
  const navigate = useNavigate();

  const menuTree = useMemo(() => FetchRouterTree(), [FetchRouterTree]);

  const MenuItem = (props: { tree: TreeItem }) => {
    const { tree } = props;
    if (tree.children.length === 0) {
      return (
        <Menu.Item
          key={tree.data.menuId}
          icon={<Svgs iconName={tree.data.iconName || 'smileOutlined'} />}
          onClick={() => navigate(tree.path)}>
          {tree.data.title}
        </Menu.Item>
      );
    }
    return (
      <SubMenu key={tree.menuId} title={tree.title} icon={<Svgs iconName={tree.iconName || 'smileOutlined'} />}>
        {tree.children.map((tree: TreeItem) => MenuItem({ tree }))}
      </SubMenu>
    );
  };

  return (
    <Sider
      className="layout__sider"
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed: boolean) => setCollapsed(collapsed)}>
      {!collapsed ? <div className="logo">C-SPACE</div> : <div className="logo">C</div>}
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
      <Outlet />
    </Sider>
  );
};

export default Sidebar;
