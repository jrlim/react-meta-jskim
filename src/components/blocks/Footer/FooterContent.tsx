import React, { useState } from 'react';
import './FooterMain.scss';

const FooterContent: React.FC = () => {
  return (
    <div className="footer__content">
      {/* TODO: 재작업예정 */}
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
      <div>개인정보처리방침</div>
      <div>문의하기</div>
    </div>
  );
};

export default FooterContent;
