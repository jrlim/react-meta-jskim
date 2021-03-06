import React, { useCallback } from 'react';
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

import { IConNameType } from './type';

interface ISvgs {
  iconName: IConNameType;
}

const Svgs: React.FC<ISvgs> = (props: ISvgs) => {
  const { iconName } = props;

  const getIcon = useCallback((iconName: string) => {
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

    const svgIcons = {};

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
