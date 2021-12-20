import React, { useState } from 'react';
import Svgs from 'components/atom/Svgs';
import './FooterMain.scss';

const FooterSns: React.FC = () => {
  return (
    <div className="footer__sns">
      <div className="" style={{ cursor: 'pointer' }}>
        <Svgs iconName="SnsWemix" />
      </div>
      <div className="" style={{ cursor: 'pointer' }}>
        <Svgs iconName="SnsTwitter" />
      </div>
      <div className="" style={{ cursor: 'pointer' }}>
        <Svgs iconName="SnsMedium" />
      </div>
      <div className="" style={{ cursor: 'pointer' }}>
        <Svgs iconName="SnsTelegram" />
      </div>
    </div>
  );
};

export default FooterSns;
