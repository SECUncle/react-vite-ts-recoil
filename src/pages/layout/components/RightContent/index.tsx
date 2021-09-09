import {  Space } from "antd";
import React from "react";

import classes from "./index.module.less";

import SelectLang from "./SelectLang";


const GlobalHeaderRight: React.FC = () => {

  let className = classes.right;

  return (
    <Space className={className}>
      <SelectLang className={classes.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
