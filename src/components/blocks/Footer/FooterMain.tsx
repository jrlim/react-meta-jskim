import React, { useState } from 'react';
import { Layout } from 'antd';

import FooterContent from './FooterContent';
import FooterSns from './FooterSns';
import FooterCopyright from './FooterCopyright';

import './FooterMain.scss';

const { Footer } = Layout;

const FooterMain: React.FC = () => {
  return (
    <Footer className="footer">
      <FooterContent />
      <FooterSns />
      <FooterCopyright />
    </Footer>
  );
};

export default FooterMain;
