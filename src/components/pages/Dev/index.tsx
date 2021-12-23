import React, { useState } from 'react';

import { DevModal, LoginModal, TokenListModal } from 'components/blocks';
import { Row, Col } from 'antd';

const Dev: React.FC = () => {
  return (
    <div>
      <Row>
        <Col span={24}>Dev</Col>
      </Row>

      <DevModal />

      <br />
      <br />

      <LoginModal />

      <br />
      <br />

      <TokenListModal />
    </div>
  );
};

export default Dev;
