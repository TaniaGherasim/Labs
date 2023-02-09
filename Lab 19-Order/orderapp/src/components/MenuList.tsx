import * as React from 'react';
import { menuData } from '../data/MenuData';
import { Item } from '../model/Item';
import { MenuItem } from './MenuItem';

export function MenuList() {
    const [menuList, setMenuList] = React.useState<Item[]>(menuData);

  return (
    <div className="MenuList">
      { menuList.map((item) => <MenuItem item={item} key={item.id}/>) }
    </div>
  );
}




