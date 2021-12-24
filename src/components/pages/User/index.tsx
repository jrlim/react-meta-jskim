import React, { useState } from 'react';
import { Typography } from 'antd';
import { EmptyPage } from 'components/blocks';
import AssetListExample from 'components/blocks/AssetList/AssetListExample';

const { Title } = Typography;

const User: React.FC = () => {
  return (
    <article>
      <Title level={3}>User | Account</Title>
      <AssetListExample />
    </article>
  );
};

export default User;
