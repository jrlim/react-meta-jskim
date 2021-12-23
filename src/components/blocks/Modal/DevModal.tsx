import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const DevModal: React.FC = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  function changeModal1Visible(modal1Visible: boolean) {
    setModal1Visible(modal1Visible);
  }

  function changeModal2Visible(modal2Visible: boolean) {
    setModal2Visible(modal2Visible);
  }
  return (
    <>
      <Button type="primary" onClick={() => changeModal1Visible(true)}>
        Display a modal dialog at 20px to Top
      </Button>
      <Modal
        title="20px to Top"
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => changeModal1Visible(false)}
        onCancel={() => changeModal1Visible(false)}>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <br />
      <br />
      <Button type="primary" onClick={() => changeModal2Visible(true)}>
        Vertically centered modal dialog
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modal2Visible}
        onOk={() => changeModal2Visible(false)}
        onCancel={() => changeModal2Visible(false)}>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default DevModal;
