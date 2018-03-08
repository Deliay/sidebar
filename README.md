A exercise implement of react component.

## 需求

1. 点击清空：清空所有选项(所有选项都变成 unchecked)

2. 点击部门左侧 checkbox：toggle 所有子目录下 checkbox 以及部门的 checkbox 

3. 点击单个岗位 checkbox：toggle 点击的 checkbox 

## 设计

1. SideBar Compoenent
    - A container include sub components and title, a button toggle all checkbox.

2. DropDownList
    - A container of the ListHeader and ListItem.

3. ListHeader
    - A component include the class of the item, a main toggle in left of caption, and a counter in right of hole list. And a dropdown-button can expand hole list.

4. ListItem
    - Component of the specify item, the toggle in left, counter in right.