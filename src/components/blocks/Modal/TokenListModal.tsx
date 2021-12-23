import React, { useState, useCallback, useEffect } from 'react';
import { Input, List, Modal, Avatar, Skeleton, Divider, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InfiniteScroll from 'react-infinite-scroll-component';
import { isString, size, chain, toUpper, includes, cloneDeep } from 'lodash';

import { InputSearch } from 'components/atom';
import { name } from '../../../stores/comm-store/initial';

const TokenListModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [originList, setOriginList] = useState<Array<JSONObject>>([]);
  const [tokenList, setTokenList] = useState<Array<JSONObject>>([]);
  const [keyword, setKeyword] = useState<string>('');

  function changeModalVisible(modal1Visible: boolean): void {
    setModalVisible(modal1Visible);
  }

  function filteredData(key: string): void {
    if (isString(key) && size(key) >= 2) {
      const copyOriginList = cloneDeep(originList);
      const filterList = copyOriginList.filter(item => {
        let isContains = false;
        const { symbol, name, address } = item;
        if (address === key) {
          isContains = true;
        }
        if (chain(symbol).toUpper().includes(key.toUpperCase()).value()) {
          isContains = true;
        }
        if (chain(name).toUpper().includes(key.toUpperCase()).value()) {
          isContains = true;
        }
        if (isContains) return item;
        return undefined;
      });
      setTokenList([...filterList]);
    } else {
      setTokenList(cloneDeep(originList));
    }
  }

  function onChangeKeyword(value: string): void {
    // console.info(value);
    setKeyword(keyword);
    filteredData(value);
  }

  const loadMoreData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);

    fetch('./mock/asset.json')
      .then(res => {
        console.info(res);
        return res.json();
      })
      .then(body => {
        console.info(body);
        setTokenList([...tokenList, ...body.results]);
        setOriginList([...tokenList, ...body.results]);
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
        <article>
          <header>
            <Input
              size="large"
              placeholder="코인명,심볼,토큰주소 검색"
              prefix={<SearchOutlined />}
              onChange={e => onChangeKeyword(e?.target?.value)}
            />
          </header>

          <section id="scrollable-token-list-modal" className="">
            <InfiniteScroll
              dataLength={tokenList.length}
              next={loadMoreData}
              hasMore={tokenList.length < 50}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain> It is all, nothing more 🤐 </Divider>}
              scrollableTarget="scrollable-token-list-modal">
              <List
                dataSource={tokenList}
                renderItem={(item, index) => (
                  <List.Item key={index} style={{ cursor: 'grab' }} onClick={() => changeModalVisible(false)}>
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
        </article>
      </Modal>
    </>
  );
};

export default TokenListModal;
