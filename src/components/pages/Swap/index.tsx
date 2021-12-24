import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Typography, PageHeader, Tabs, Button, Statistic, Descriptions, Table, Divider } from 'antd';

import './index.scss';

const { Title } = Typography;
const { TabPane } = Tabs;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Association">
      <NavLink to="">421421</NavLink>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="Remarks">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end'
    }}>
    <Statistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
  </div>
);

const Content = ({ children, extra }: any) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

const columns = [
  {
    title: '유형',
    dataIndex: 'txType'
  },
  {
    title: '해시',
    dataIndex: 'txHash'
  },
  {
    title: '상태',
    dataIndex: 'txStatus'
  },
  {
    title: '일자',
    dataIndex: 'txTime'
  }
];
const data = [
  {
    key: '1',
    txType: 'Contract Execution',
    txHash: '0xbad8564f7c8fa6c2a95664b427de0ae92103533d4d511e061ae2633cb301f702',
    txStatus: 'Success',
    txTime: '2021-12-24 12:00:00'
  },
  {
    key: '2',
    txType: 'Contract Execution',
    txHash: '0x6d3ea7022a70c5f266982c66a24ffbb7e1b77c8dc20fcd3befe218a8d0547a57',
    txStatus: 'Success',
    txTime: '2021-12-24 11:00:00'
  },
  {
    key: '3',
    txType: 'Contract Execution',
    txHash: '0x7ee5f6065fde9d09c7fa370b6beb00799b597ccb4192d247b806aa7a10740dc6',
    txStatus: 'Success',
    txTime: '2021-12-24 10:00:00'
  },
  {
    key: '4',
    txType: 'Contract Execution',
    txHash: '0xd2f258e8488ac1c33d04bdedaa8306071450c0e2fd2bf4f58ec30ef5b5253f65',
    txStatus: 'Success',
    txTime: '2021-12-23 23:00:00'
  }
];

const Swap: React.FC = () => {
  return (
    <article className="swap">
      <header>
        <Row>
          <Col span={18}>
            <h1 className="asset-list-header">원하는 자산으로 바로 교환하세요.</h1>
          </Col>
        </Row>
      </header>

      <section className="swap__main">
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>
          ]}
          footer={
            <Tabs defaultActiveKey="1">
              <TabPane tab="Details" key="1" />
              <TabPane tab="Rule" key="2" />
            </Tabs>
          }>
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
      </section>

      <Divider />

      <section className="swap__estimated">
        <Title level={4}>estimated returns</Title>
        <Descriptions title="User Info" layout="vertical">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Address" span={2}>
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
        </Descriptions>
      </section>

      <Divider />

      <section className="swap__transaction">
        <Title level={4}>transaction history</Title>
        <Table columns={columns} dataSource={data} size="small" />
      </section>

      <section className="swap__transaction">
        <Title level={4}>transaction history</Title>
        <Table columns={columns} dataSource={data} size="small" />
      </section>

      <section className="swap__transaction">
        <Title level={4}>transaction history</Title>
        <Table columns={columns} dataSource={data} size="small" />
      </section>
    </article>
  );
};

export default Swap;
