import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Spin, Modal, Button } from 'antd';
import { Loading } from 'components/atom';

import './LoginModal.scss';

const { REACT_APP_WEB_AUTH_URL } = process.env;

const LoginModal: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [modalVisible, setmodalVisible] = useState(false);
  const isFullScreen = useMediaQuery({ query: '(max-width:600px)' });

  console.warn(`REACT_APP_WEB_AUTH_URL --->`, REACT_APP_WEB_AUTH_URL);

  function changemodalVisible(modalVisible: boolean) {
    setmodalVisible(modalVisible);
  }

  function onLoaded(): void {
    console.debug('onLoaded');
  }

  return (
    <>
      <Button type="primary" onClick={() => changemodalVisible(true)}>
        로그인
      </Button>
      <Modal
        className="modal-login"
        title={null}
        centered
        style={{ top: 20 }}
        visible={modalVisible}
        onOk={() => changemodalVisible(false)}
        onCancel={() => changemodalVisible(false)}
        bodyStyle={
          isFullScreen
            ? { width: '100%', height: '100%', padding: '0px' }
            : { width: '400px', height: '800px', padding: '0px' }
        }
        footer={null}>
        {isLoading && <Spin />}
        <iframe
          onLoad={() => setIsLoading(false)}
          style={isFullScreen ? { height: '100%', width: '100%' } : { width: 400, height: 800 }}
          src={`${REACT_APP_WEB_AUTH_URL}/run`}
          frameBorder="0"
          title="web-auth"
        />
      </Modal>
    </>
  );
};

export default LoginModal;
