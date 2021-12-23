import React, { useState, useEffect } from 'react';
import { List, Modal, Avatar, Skeleton, Divider, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import { InputSearch } from 'components/atom';

const TokenListModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function changeModalVisible(modal1Visible: boolean) {
    setModalVisible(modal1Visible);
  }

  const loadMoreData = () => {
    if (loading) {
      return;
    }

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
    <>
      <Button type="primary" onClick={() => changeModalVisible(true)}>
        토큰 목록
      </Button>

      <Modal
        title="토큰을 선택해 주세요."
        centered
        visible={modalVisible}
        footer={null}
        onOk={() => changeModalVisible(false)}
        onCancel={() => changeModalVisible(false)}>
        <InputSearch />
        <section id="scrollable-area-token-list-modal" className="">
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain> It is all, nothing more 🤐 </Divider>}
            scrollableTarget="scrollable-area-token-list-modal">
            <List
              dataSource={data}
              renderItem={item => (
                <List.Item key={item.id} style={{ cursor: 'grab' }} onClick={() => changeModalVisible(false)}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={item.name}
                    description={`${item.symbol}`}
                  />
                  <div className="">{`${item.volume}`}</div>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </section>
      </Modal>
    </>
  );
};

export default TokenListModal;
