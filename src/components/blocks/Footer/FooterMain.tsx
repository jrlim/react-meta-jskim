import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import { Layout } from 'antd';

import './FooterMain.scss';

const { Footer } = Layout;

const FooterMain: React.FC = () => {
  return (
    <Footer className="layout__footer" style={{ textAlign: 'center' }}>
      {/* TODO: 재작업 예정. 임시 처리 */}
      <div className="layout__footer__content">
        <div>서비스소개</div>
        <div>고객지원</div>
        <div>파트너</div>
        <div>언어</div>
        <div>위메이드트리</div>
        <div>옥션 이용 가이드</div>
        <div>제휴 문의</div>
        <div>한국어</div>
        <div>이용 약관</div>
        <div>자주 묻는 질문</div>
        <div>작가 지원</div>
      </div>
      <div
        className=""
        style={{
          width: '213px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 42px)',
          gap: '15px'
        }}>
        <div className="MuiBox-root jss28" style={{ cursor: 'pointer' }}>
          <img src="./static/media/footer-wemix.5e158687.svg" alt="" width="42px" height="42px" />
        </div>
        <div className="MuiBox-root jss29" style={{ cursor: 'pointer' }}>
          <img src="./static/media/footer-tweeter.dc6b07de.svg" alt="" width="42px" height="42px" />
        </div>
        <div className="MuiBox-root jss30" style={{ cursor: 'pointer' }}>
          <img src="./static/media/footer-medium.4e6776c0.svg" alt="" width="42px" height="42px" />
        </div>
        <div className="MuiBox-root jss31" style={{ cursor: 'pointer' }}>
          <img src="./static/media/footer-telegram.dd985f70.svg" alt="" width="42px" height="42px" />
        </div>
      </div>
      <div className="layout__footer__copyright">Copyright © 2018. WEMADE TREE PTE. LTD. All rights reserved.</div>
    </Footer>
  );
};

export default FooterMain;
