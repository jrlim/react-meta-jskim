import React, { useCallback } from 'react';
// Ant-design Icons
import {
  SearchOutlined,
  AccountBookOutlined,
  DownOutlined,
  UpOutlined,
  LeftOutlined,
  RightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  VerticalAlignBottomOutlined,
  RetweetOutlined,
  QuestionCircleOutlined,
  PlusOutlined,
  CloseOutlined,
  CloseCircleOutlined,
  CloseSquareOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  BgColorsOutlined,
  AppstoreOutlined,
  ConsoleSqlOutlined
} from '@ant-design/icons';
// Custom Icons
import { ReactComponent as WemixLogo } from 'assets/svgs/wemix-logo.svg';
import { ReactComponent as NavAsset } from 'assets/svgs/nav-asset.svg';
import { ReactComponent as NavSwap } from 'assets/svgs/nav-swap.svg';
import { ReactComponent as NavPool } from 'assets/svgs/nav-pool.svg';
import { ReactComponent as NavStaking } from 'assets/svgs/nav-staking.svg';
import { ReactComponent as NavWallet } from 'assets/svgs/nav-wallet.svg';
import { ReactComponent as NavUser } from 'assets/svgs/nav-user.svg';
import { ReactComponent as NavSelect } from 'assets/svgs/nav-select.svg';
import { ReactComponent as NavLang } from 'assets/svgs/nav-lang.svg';
import { ReactComponent as NavShop } from 'assets/svgs/nav-shop.svg';
import { ReactComponent as SnsWemix } from 'assets/svgs/sns-wemix.svg';
import { ReactComponent as SnsMedium } from 'assets/svgs/sns-medium.svg';
import { ReactComponent as SnsTwitter } from 'assets/svgs/sns-twitter.svg';
import { ReactComponent as SnsTelegram } from 'assets/svgs/sns-telegram.svg';
import { ReactComponent as PageAttention } from 'assets/svgs/page-attention.svg';
import { ReactComponent as PageSwapSmall } from 'assets/svgs/page-swap-small.svg';
import { ReactComponent as PageSwapBig } from 'assets/svgs/page-swap-big.svg';
import { ReactComponent as TokenDefault } from 'assets/svgs/token-default.svg';
import { ReactComponent as TokenWemix } from 'assets/svgs/token-wemix.svg';
import { ReactComponent as TokenWemixCredit } from 'assets/svgs/token-wemix-credit.svg';

import { IConNameType } from './type';

interface ISvgs {
  iconName: IConNameType;
  iconClassName?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

/**
 * Svgs:
 * @param props
 * @returns JSX.Element
 */
const Svgs: React.FC<ISvgs> = (props: ISvgs) => {
  const { iconName, iconClassName, onClick } = props;

  const getIcon = useCallback((iconName: string, iconClassName?: string): JSX.Element => {
    const antdICons = {
      SearchOutlined: <SearchOutlined />,
      AccountBookOutlined: <AccountBookOutlined />,
      DownOutlined: <DownOutlined />,
      UpOutlined: <UpOutlined />,
      LeftOutlined: <LeftOutlined />,
      RightOutlined: <RightOutlined />,
      CaretUpOutlined: <CaretUpOutlined />,
      CaretDownOutlined: <CaretDownOutlined />,
      CaretLeftOutlined: <CaretLeftOutlined />,
      CaretRightOutlined: <CaretRightOutlined />,
      UpCircleOutlined: <UpCircleOutlined />,
      DownCircleOutlined: <DownCircleOutlined />,
      LeftCircleOutlined: <LeftCircleOutlined />,
      RightCircleOutlined: <RightCircleOutlined />,
      VerticalAlignBottomOutlined: <VerticalAlignBottomOutlined />,
      RetweetOutlined: <RetweetOutlined />,
      QuestionCircleOutlined: <QuestionCircleOutlined />,
      PlusOutlined: <PlusOutlined />,
      CloseOutlined: <CloseOutlined />,
      CloseCircleOutlined: <CloseCircleOutlined />,
      CloseSquareOutlined: <CloseSquareOutlined />,
      CheckOutlined: <CheckOutlined />,
      ClockCircleOutlined: <ClockCircleOutlined />,
      WarningOutlined: <WarningOutlined />,
      BgColorsOutlined: <BgColorsOutlined />,
      AppstoreOutlined: <AppstoreOutlined />,
      ConsoleSqlOutlined: <ConsoleSqlOutlined />
    };

    // Custom Icons
    const svgIcons = {
      WemixLogo: <WemixLogo className={iconClassName} />,
      NavAsset: <NavAsset className={iconClassName} />,
      NavSwap: <NavSwap className={iconClassName} />,
      NavPool: <NavPool className={iconClassName} />,
      NavStaking: <NavStaking className={iconClassName} />,
      NavWallet: <NavWallet className={iconClassName} />,
      NavUser: <NavUser className={iconClassName} />,
      NavSelect: <NavSelect className={iconClassName} />,
      NavLang: <NavLang className={iconClassName} />,
      NavShop: <NavShop className={iconClassName} />,
      SnsWemix: <SnsWemix className={iconClassName} />,
      SnsTwitter: <SnsTwitter className={iconClassName} />,
      SnsMedium: <SnsMedium className={iconClassName} />,
      SnsTelegram: <SnsTelegram className={iconClassName} />,
      PageAttention: <PageAttention className={iconClassName} />,
      PageSwapSmall: <PageSwapSmall className={iconClassName} />,
      PageSwapBig: <PageSwapBig className={iconClassName} />,
      TokenDefault: <TokenDefault className={iconClassName} />,
      TokenWemix: <TokenWemix className={iconClassName} />,
      TokenWemixCredit: <TokenWemixCredit className={iconClassName} />
    };

    const icons = { ...antdICons, ...svgIcons };

    let resultIcon = <DownOutlined />;
    const found = Object.entries(icons).find(([k]) => k.toLowerCase() === iconName.toLowerCase());
    if (found) {
      [, resultIcon] = found;
    }
    return resultIcon;
  }, []);

  return getIcon(iconName);
};

export default Svgs;
