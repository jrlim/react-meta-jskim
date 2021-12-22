import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterMain.scss';

const FooterCopyright: React.FC = () => {
  return (
    <NavLink to="/main/dev">
      <div className="footer__copyright">Copyright © 2018. WEMADE TREE PTE. LTD. All rights reserved.</div>
    </NavLink>
  );
};

export default FooterCopyright;
