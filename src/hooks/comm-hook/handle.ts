import { arrayToTree, TreeItem } from 'performant-array-to-tree';
import { MenuInfoSchemaType } from 'schema/menu-info-type';

export const handleRouterTree = (menus: MenuInfoSchemaType[]): TreeItem[] => {
  return arrayToTree(menus);
};
