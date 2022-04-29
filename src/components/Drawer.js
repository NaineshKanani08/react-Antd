import React from "react";
import { Drawer } from "antd";
const DrawerComp = ({ onClose, visible }) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrawerComp;
