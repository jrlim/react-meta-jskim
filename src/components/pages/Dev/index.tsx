import React, { useState } from 'react';
import { Tabs, Row, Col } from 'antd';

import { DevModal, LoginModal, TokenListModal } from 'components/blocks';
import TestAuction from './Example/API/TestAuction';

const { TabPane } = Tabs;

function callback(key: string) {
  console.log(key);
}

const Dev: React.FC = () => {
  return (
    <section style={{ height: '71vh;' }}>
      <Row>
        <Col span={24}>Dev</Col>
      </Row>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Modal" key="1">
          <br />
          <br />
          <DevModal />
          <br />
          <br />
          <LoginModal />
          <br />
          <br />
          <TokenListModal />
        </TabPane>
        <TabPane tab="API" key="2">
          Content of Tab Pane 2
          <br />
          <br />
          <TestAuction />
        </TabPane>
        <TabPane tab="Else" key="3">
          Content of Tab Pane 3
          <br />
          <br />
        </TabPane>
      </Tabs>
    </section>
  );
};

export default Dev;
