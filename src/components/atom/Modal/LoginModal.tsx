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
        className="modal__login"
        title={null}
        centered
        style={{ top: 20 }}
        visible={modalVisible}
        onOk={() => changemodalVisible(false)}
        onCancel={() => changemodalVisible(false)}
        bodyStyle={
          isFullScreen
            ? { width: '100vw', height: '100vh', padding: '0px' }
            : { width: '400px', height: '800px', padding: '0px' }
        }
        footer={null}>
        {isLoading && <Spin className="modal__login__spin" size="large" />}
        <iframe
          onLoad={() => setIsLoading(false)}
          className="modal__login__iframe"
          style={isFullScreen ? { width: '100vw', height: '100vh' } : { width: '400px', height: '800px' }}
          src={`${REACT_APP_WEB_AUTH_URL}/run`}
          frameBorder="0"
          title="web-auth"
        />
      </Modal>
    </>
  );
};

export default LoginModal;
