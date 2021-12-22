import React, { useState } from 'react';

import { DevModal } from 'components/atom';
import { Row, Col } from 'antd';

const Dev: React.FC = () => {
  return (
    <div>
      <Row>
        <Col span={24}>Dev</Col>
      </Row>

      <DevModal />
    </div>
  );
};

export default Dev;
