import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'stores';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';

import moment from 'moment';
import * as smoothscroll from 'smoothscroll-polyfill';
// import i18n from './utils/i18n';
import i18n from 'helper/i18n';

import 'styles/index.scss';
import 'antd/dist/antd.css';

import App from './App';

// console.info(i18n);
// console.warn(i18n.language);

dayjs.extend(relativeTime);
dayjs.locale(i18n.language);

moment.locale(i18n.language);

window.dayjs = dayjs;
window.moment = moment;

smoothscroll.polyfill();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
