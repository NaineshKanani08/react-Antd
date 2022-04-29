import React, { useState, useEffect } from "react";
import TableComp from "../components/Table";
import axios from "axios";
import { Table } from "antd";
import { TableData, column1 } from "../components/Constant";
const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(10);
  const [alreadySelectedRows, setAlreadySelectedRows] = useState([2, 4]);
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => setData(res.data) || setLoading(false));
    } catch (e) {
      console.log(e);
    }
  }, []);
  const column = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User Id",
      dataIndex: "userId",
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Done" : "In Progress"}</p>;
      },
      filters: [
        { text: "Done", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  const rowSelect = {
    type: "checkbox",
    selectedRowKeys: alreadySelectedRows,
    onChange: (key) => {
      setAlreadySelectedRows(key);
    },
    // onSelect: (record) => {},
    getCheckboxProps: (record) => ({
      disabled: record.age < 18,
    }),
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          const newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            return index % 2 !== 0;
          });
          setAlreadySelectedRows(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          const newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            return index % 2 === 0;
          });
          setAlreadySelectedRows(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <TableComp
        rowSelection={rowSelect}
        dataSource={TableData}
        columns={column1}
      />
      <TableComp
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
        scroll={{ y: 240 }}
        loading={loading}
        dataSource={data}
        columns={column}
      />
    </>
  );
};

export default Users;
