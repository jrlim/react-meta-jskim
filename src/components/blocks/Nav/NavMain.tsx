import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import useWemixTranslation from 'hooks/useWemixTranslation';
import Svgs from 'components/atom/Svgs';
import { LanguageComboType } from 'schema/language-type';

import './NavMain.scss';

const { SubMenu } = Menu;

const languages: LanguageComboType[] = [
  { label: 'English', value: 'en' },
  { label: '한국어', value: 'ko' },
  { label: '中文', value: 'cn' }
];

const NavMain: React.FC = () => {
  const { $t, i18n } = useWemixTranslation();

  return (
    <div className="nav">
      <Menu className="nav__menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="3">
          <Svgs iconName="NavAsset" />
          <NavLink to="/main/my-asset">
            <em className="nav__menu__title">{$t('header.key3')}</em>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <Svgs iconName="NavSwap" />
          <Link to="/main/swap">{$t('header.key4')}</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Svgs iconName="NavPool" />
          <Link to="/main/pool">{$t('header.key5')}</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Svgs iconName="NavStaking" />
          <Link to="/main/staking">{$t('header.key6')}</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to="/main/wallet">
            <Svgs iconName="NavWallet" />
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Svgs iconName="NavUser" />
          <Link to="/main/user">Josh</Link>
          {/* <Svgs iconName="NavSelect" /> */}
        </Menu.Item>
        {/* TODO: Render 오류 수정 예정 추후 SubMenu scss override 예정 */}
        <Menu.Item key="9">
          <SubMenu key="sub_lang" icon={<GlobalOutlined />} title="language">
            {languages.map((language: LanguageComboType) => {
              return (
                <Menu.Item
                  key={language.value}
                  onClick={() => {
                    i18n.changeLanguage(language.value);
                  }}>
                  {language.label}
                </Menu.Item>
              );
            })}
          </SubMenu>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavMain;
