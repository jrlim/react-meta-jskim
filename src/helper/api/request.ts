/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
// import { set } from 'lodash';

declare module 'axios' {
  export interface AxiosResponse<T = any, D = any> extends Promise<T> {
    data: T;
    status: number;
    statusText: string;
    headers: AxiosResponseHeaders;
    errors: any;
    config: AxiosRequestConfig<D>;
    request?: any;
  }
}

const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
  timeout: 60000
});

request.interceptors.request.use(
  config => {
    // if (sessionStorage.getItem('token') && sessionStorage.getItem('token') !== '') {
    //   set(config.headers, 'Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    // }
    return config;
  },
  error => {
    Promise.reject(error);
    return { error };
  }
);

request.interceptors.response.use(
  async response => {
    const { data, config } = response;
    if (data.errors) {
      console.error(data.errors);
    }
    return data;
  },
  error => {
    return { data: null, errors: error?.response?.data?.errors };
  }
);

export default request;
