import ReactGA from 'react-ga';

const { REACT_APP_ENABLE_GA } = process.env;

const gaInit = () => {
  if (REACT_APP_ENABLE_GA === 'true') ReactGA.initialize('UA-153783949-7');
};

const gaPageView = () => {
  if (REACT_APP_ENABLE_GA === 'true')
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export { gaInit, gaPageView };
