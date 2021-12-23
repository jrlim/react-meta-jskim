import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const InputSearch: React.FC = () => {
  return <Input size="large" placeholder="코인명,심볼,토큰주소 검색" prefix={<SearchOutlined />} />;
};

export default InputSearch;
