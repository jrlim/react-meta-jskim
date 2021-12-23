import { LanguageType } from './language-type';

export declare type Meta = {
  title: LanguageType;
  desc: LanguageType;
  smallThumbnailMedia: string;
  smallThumbnailMediaMimeType: string;
  thumbnailMedia: string;
  thumbnailMediaMimeType: string;
  originalMedia: string;
  originalMediaMimeType: string;
  backgroundColor: string;
  videos?: string[];
  links?: string[];
};

export declare type NftType = {
  tokenId: string;
  nftId: string;
  meta: Meta;
  owner: string;
  creator: string;
  bidStatus: 'WAIT' | 'BID_START' | 'BID_STOP' | 'END';
  bidAmount: number;
  klayBidAmount: number;
  depositAmount: number;
  bidStartTime: string;
  bidEndTime: string;
  totalBidCount: number;
  maxBidAmount: number;
  klayDepositAmount: number;
  creatorProfile: string | null;
  contractAddress: string;
  isShowVideoIcon: boolean;
  isShowDetail: boolean;
};

export declare type BidType = {
  nftBidId: string;
  userId: string;
  bidStatus: 'BID' | 'SBID';
  bidAmount: number;
  createTime: string;
  address: string;
};

export declare type TradeType = {
  type: 'CREATE' | 'SELL' | 'TRANSFER';
  amount: number;
  quantity: number;
  from: string;
  to: string;
  transferTime: string;
  tx: string;
};
