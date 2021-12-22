import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import useWemixTranslation from 'hooks/useWemixTranslation';
import Svgs from 'components/atom/Svgs';
import { LanguageComboType } from 'schema/language-type';

import './NavMain.scss';

const { SubMenu } = Menu;

/* TODO: global store로 변경 예정 */
const languages: LanguageComboType[] = [
  { label: 'English', value: 'en' },
  { label: '한국어', value: 'ko' },
  { label: '简体中文', value: 'cn' },
  { label: '繁體中文', value: 'tw' }
];

const NavMain: React.FC = () => {
  const { $t, i18n } = useWemixTranslation();

  return (
    <div className="nav">
      <Menu className="nav__menu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="3">
          <Svgs iconName="NavAsset" />
          <NavLink to="/main/my-asset" className="nav__menu__title">
            {$t('header.key3')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <Svgs iconName="NavSwap" />
          <NavLink to="/main/swap" className="nav__menu__title">
            {$t('header.key4')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <Svgs iconName="NavPool" />
          <NavLink to="/main/pool" className="nav__menu__title">
            {$t('header.key5')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <Svgs iconName="NavStaking" />
          <NavLink to="/main/staking" className="nav__menu__title">
            {$t('header.key6')}
          </NavLink>
        </Menu.Item>
        <Menu.Item key="7">
          <NavLink to="/main/wallet" className="nav__menu__title">
            <Svgs iconName="NavWallet" />
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <Svgs iconName="NavUser" />
          <NavLink to="/main/user" className="nav__menu__title">
            Josh
          </NavLink>
          {/* <Svgs iconName="NavSelect" /> */}
        </Menu.Item>
        {/* TODO: Render 오류 수정 예정 추후 SubMenu scss override 예정 */}
        <Menu.Item key="9">
          <SubMenu key="sub_lang" icon={<Svgs iconName="NavLang" />} title="">
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
