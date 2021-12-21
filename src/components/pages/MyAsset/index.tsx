import React, { useState } from 'react';
import { Row, Col } from 'antd';

import AssetList from 'components/blocks/AssetList/AssetList';

import './index.scss';

const MyAsset: React.FC = () => {
  return (
    <article>
      <header>
        <Row>
          <Col span={18}>
            <h1 className="asset-list-header">거래소 ↔ 내 지갑 간 간편하게 입출금 하세요.</h1>
          </Col>
        </Row>
      </header>
      <AssetList />
    </article>
  );
};

export default MyAsset;
