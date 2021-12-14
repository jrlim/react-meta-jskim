import { arrayToTree } from 'performant-array-to-tree';
import { MenuInfoSchemaType } from 'schema/menu-info-type';

export const handleRouterTree = (menus: MenuInfoSchemaType[]) => {
  return arrayToTree(menus);
};
