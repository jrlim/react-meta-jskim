import React, { useState, useCallback, useEffect } from 'react';
import { Input, List, Modal, Avatar, Skeleton, Divider, Button } from 'antd';

import { getBanners } from 'helper/api';

const TestAuction: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenList, setTokenList] = useState<Array<JSONObject>>([]);

  const [banners, setBanners] = useState<JSONObject>(null);

  async function requestBanners(): Promise<void> {
    const data = await getBanners('main');
    setBanners(data);
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
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   loadMoreData();
  // }, []);

  return (
    <>
      <Button type="primary" onClick={() => loadMoreData()}>
        Asset Mockup Json
      </Button>
      <pre>{JSON.stringify(tokenList)}</pre>
      <Divider />
      <Button type="primary" onClick={() => requestBanners()}>
        NFT Acution API
      </Button>
      <pre>{JSON.stringify(banners)}</pre>
    </>
  );
};

export default TestAuction;
