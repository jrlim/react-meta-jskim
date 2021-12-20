import React, { useState } from 'react';
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
          {$t('header.key3')}
        </Menu.Item>
        <Menu.Item key="4">
          <Svgs iconName="NavSwap" />
          {$t('header.key4')}
        </Menu.Item>
        <Menu.Item key="5">
          <Svgs iconName="NavPool" />
          {$t('header.key5')}
        </Menu.Item>
        <Menu.Item key="6">
          <Svgs iconName="NavStaking" />
          {$t('header.key6')}
        </Menu.Item>
        <Menu.Item key="7">
          <Svgs iconName="NavWallet" />
        </Menu.Item>
        <Menu.Item key="8">
          <Svgs iconName="NavUser" />
          Josh
          <Svgs iconName="NavSelect" />
        </Menu.Item>
        <Menu.Item key="9">
          <SubMenu key="sub_lang" icon={<GlobalOutlined />} title="">
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
