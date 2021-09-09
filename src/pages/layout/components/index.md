---
title: Ant Design Pro
sidemenu: false
---

# Ant Design Pro

这里列举了 Pro 中所有用到的组件，这些组件不适合作为组件库，但是在业务中却真实需要。所以我们准备了这个文档，来指导大家是否需要使用这个组件。

## Footer 页脚组件

这个组件自带了一些 Pro 的配置的，你一般都需要改掉它的信息。

```tsx
/**
 * background: '#f0f2f5'
 */
import React from 'react';
import Footer from '@/components/Footer';

export default () => <Footer />;
```

## HeaderDropdown 头部下拉列表

HeaderDropdown 是 antd Dropdown 的封装，但是增加了移动端的特殊处理，用法也是相同的。

```tsx
/**
 * background: '#f0f2f5'
 */
import { Button, Menu } from 'antd';
import React from 'react';
import HeaderDropdown from '@/components/HeaderDropdown';

export default () => {
  const menuHeaderDropdown = (
    <Menu selectedKeys={[]}>
      <Menu.Item key="center">个人中心</Menu.Item>
      <Menu.Item key="settings">个人设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <Button>hover 展示菜单</Button>
    </HeaderDropdown>
  );
};
```


### API

| 参数            | 说明                               | 类型                         | 默认值 |
| --------------- | ---------------------------------- | ---------------------------- | ------ |
| value           | 输入框的值                         | `string`                     | -      |
| onChange        | 值修改后触发                       | `(value?: string) => void`   | -      |
| onSearch        | 查询后触发                         | `(value?: string) => void`   | -      |
| options         | 选项菜单的的列表                   | `{label,value}[]`            | -      |
| defaultVisible  | 输入框默认是否显示，只有第一次生效 | `boolean`                    | -      |
| visible         | 输入框是否显示                     | `boolean`                    | -      |
| onVisibleChange | 输入框显示隐藏的回调函数           | `(visible: boolean) => void` | -      |




