import React from "react";
import { Table } from "antd";

const TableComp = ({ dataSource, columns, ...props }) => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={props.loading}
        pagination={props.pagination}
        rowSelection={props.rowSelection}
        scroll={props.scroll}
      ></Table>
    </>
  );
};

export default TableComp;
