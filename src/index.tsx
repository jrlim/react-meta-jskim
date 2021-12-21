/** import global modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as smoothscroll from 'smoothscroll-polyfill';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import moment from 'moment';

/** import application modules */
import { store } from 'stores';
import i18n from 'helper/i18n';

/** import global styles */
import 'styles/index.scss';
import 'antd/dist/antd.css';

/** import main application */
import App from './App';

/** initialize global modules */
smoothscroll.polyfill();
dayjs.extend(relativeTime);
dayjs.locale(i18n.language);
moment.locale(i18n.language);

/** for development */
if (process.env.NODE_ENV === 'development') {
  window.dayjs = dayjs;
  window.moment = moment;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
