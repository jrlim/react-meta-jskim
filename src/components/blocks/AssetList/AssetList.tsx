import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import './AssetList.scss';

const AssetList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }

    const url = 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo';
    const mock = './mock/asset.json';

    setLoading(true);
    fetch(mock)
      .then(res => {
        console.info(res);
        return res.json();
      })
      .then(body => {
        console.info(body);
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <section id="scrollableDiv" className="asset-list">
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv">
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={`${item.volume} / $${item.amount}`}
              />
              <div className="asset-list__button-group ">
                <Button type="primary" size="small">
                  전환
                </Button>
                <Button size="small">입금</Button>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </section>
  );
};

export default AssetList;
