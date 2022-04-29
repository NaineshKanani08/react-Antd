import { Button, Row } from "antd";
import React from "react";
import CardComp from "../components/Card";
import DrawerComp from "../components/Drawer";
const Main = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)}> Drawer</Button>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {["pink", "green", "orange", "yellow", "skyblue", "gray"].map(
            (val, i) => {
              return <CardComp key={i} value={i + 1} backGroundColor={val} />;
            }
          )}
        </Row>
      </div>
      <DrawerComp visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

export default Main;
