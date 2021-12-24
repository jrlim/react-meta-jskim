import React, { useState } from 'react';
import { Layout, Grid } from 'antd';

import FooterContent from './FooterContent';
import FooterSns from './FooterSns';
import FooterCopyright from './FooterCopyright';

import './FooterMain.scss';

const { Footer } = Layout;
const { useBreakpoint } = Grid;

const FooterMain: React.FC = () => {
  const screens = useBreakpoint();

  return (
    <Footer
      className="footer"
      style={{
        flexDirection: screens.xs ? 'column' : 'row'
      }}>
      <FooterContent />
      <FooterSns />
      <FooterCopyright />
    </Footer>
  );
};

export default FooterMain;
