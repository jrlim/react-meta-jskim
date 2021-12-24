/* Dev components */
import EmptyPage from './Empty/EmptyPage';

import AssetList from './AssetList/AssetList';
import AssetListExample from './AssetList/AssetListExample';

/* Real components */
import FooterMain from './Footer/FooterMain';
import NavMain from './Nav/NavMain';

export * from './Modal';

const dev = {
  EmptyPage,
  AssetList,
  AssetListExample
};

const prod = {
  FooterMain,
  NavMain
};

export { EmptyPage, AssetList, AssetListExample, FooterMain, NavMain };
