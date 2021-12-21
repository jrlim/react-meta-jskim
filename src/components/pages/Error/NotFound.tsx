import React, { useState } from 'react';
import { Result } from 'antd';
import useWemixTranslation from 'hooks/useWemixTranslation';

const NotFound: React.FC = () => {
  const { $t } = useWemixTranslation();
  return (
    <Result status="warning" title={$t('global.key1')} style={{ marginTop: '26vh', fontFamily: 'Montserrat Bold' }} />
  );
};

export default NotFound;
