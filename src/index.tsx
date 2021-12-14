import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'stores';

import moment from 'moment';
import * as smoothscroll from 'smoothscroll-polyfill';

import 'styles/index.scss';
import 'antd/dist/antd.css';

import App from './App';

moment.locale('ko');

smoothscroll.polyfill();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
