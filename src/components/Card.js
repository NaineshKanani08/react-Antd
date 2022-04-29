import React from "react";
import { Card } from "antd";
const CardComp = ({ value, backGroundColor }) => {
  let text = "Card Content";
  // const [val, setval] = React.useState([]);
  const val = [];
  for (let i = 0; i < value; i++) {
    val.push({ text });
  }
  return (
    <Card
      title={`${value}` !== "undefined" ? `Card ${value}` : "Card"}
      bordered={false}
      style={{ width: 300, background: backGroundColor }}
    >
      {val.length > 0 ? (
        val.map((v, i) => {
          return <p key={i}>{v.text}</p>;
        })
      ) : (
        <p>{text}</p>
      )}
      {/* </p>
      <p>Card content</p>
      <p>Card content</p> */}
    </Card>
  );
};

export default CardComp;
