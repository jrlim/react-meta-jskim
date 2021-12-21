import ReactGA from 'react-ga';

const { REACT_APP_ENABLE_GA } = process.env;
// const { REACT_APP_GA_TRACKING_CODE } = process.env;

const gaInit = (): void => {
  if (REACT_APP_ENABLE_GA === 'true') {
    ReactGA.initialize('UA-153783949-7');
  }
};

const gaPageView = (): void => {
  if (REACT_APP_ENABLE_GA === 'true') {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};

export { gaInit, gaPageView };
