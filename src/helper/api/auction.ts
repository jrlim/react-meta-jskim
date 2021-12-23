import { NftType } from 'schema';
import request from './request';

async function getBanners(type?: string): Promise<Array<JSONObject>> {
  const { data } = await request.get('/banner', {
    params: { type: type || 'main' }
  });
  return data;
}

const getTopBanner = async () => {
  const { data } = await request.get('/config');
  return data.data;
};

const getNfts = (page: number) => async () => {
  const params = {
    page,
    size: 20
  };
  const { data } = await request.get('/nft/page', { params });
  return {
    data: data.data.data as NftType[],
    hasMoreData: data.data.page * data.data.size < data.data.totalSize
  };
};

const getNft = (nftId: string) => async () => {
  const { data } = await request.get(`/nft/${nftId}`);
  return data.data;
};

const getNftBiddings = (nftId: string) => async () => {
  const { data } = await request.get(`/nft/${nftId}/bid/page`);
  return data.data.data;
};

const getNftTradingHistories = (nftId: string) => async () => {
  const { data } = await request.get(`/nft/${nftId}/tx/page`);
  return data.data.data;
};

export { getBanners, getTopBanner, getNfts, getNft, getNftBiddings, getNftTradingHistories };
