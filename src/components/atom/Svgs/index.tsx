import React, { useCallback } from 'react';
// Ant-design Icons
import {
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
import { ReactComponent as NavShop } from 'assets/svgs/nav-shop.svg';
import { ReactComponent as SnsWemix } from 'assets/svgs/sns-wemix.svg';
import { ReactComponent as SnsMedium } from 'assets/svgs/sns-medium.svg';
import { ReactComponent as SnsTwitter } from 'assets/svgs/sns-twitter.svg';
import { ReactComponent as SnsTelegram } from 'assets/svgs/sns-telegram.svg';

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
      NavShop: <NavShop className={iconClassName} />,
      SnsWemix: <SnsWemix className={iconClassName} />,
      SnsTwitter: <SnsTwitter className={iconClassName} />,
      SnsMedium: <SnsMedium className={iconClassName} />,
      SnsTelegram: <SnsTelegram className={iconClassName} />
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
