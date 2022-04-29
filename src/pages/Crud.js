import axios from "axios";
import React, { useState, useEffect } from "react";
import TableComp from "../components/Table";
import { Button, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Input from "antd/lib/input/Input";

const Crud = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [index, setIndex] = useState();

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setStudentData(res.data) || setLoading(false));
    } catch (e) {
      console.log(e);
    }
  }, []);
  const studentColumn = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "id",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "id",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "id",
      title: "Address",
      dataIndex: "address",
      render: (address) => {
        return address.city;
      },
    },
    {
      key: "id",
      title: "Action",
      render: (record, i) => {
        return (
          <>
            <EditOutlined onClick={() => editRecord(record, i)} />
            <DeleteOutlined
              style={{ color: "red", marginLeft: 12 }}
              //   onClick={() => deleteRecord(record)}
              onClick={() => deleteRecord(record)}
            />
          </>
        );
      },
    },
  ];
  const deleteRecord = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      okText: "Yes",
      onOk: () => {
        setStudentData(
          studentData.filter((item) => {
            return item.id !== record.id;
          })
        );
      },
    });
  };
  const editRecord = (record, i) => {
    setIsEditing(true);
    setIndex(i);
    setEditValue(record);
  };
  const addRecord = () => {
    setIsEditing(true);
    setEditValue({
      id: studentData.length + 1,
      name: "",
      email: "",
      address: { city: "" },
    });
  };
  const addRecordDetails = () => {
    setStudentData([...studentData, editValue]);
    setIsEditing(false);
  };
  const inputFields = [
    {
      name: "name",
      value: `${editValue?.name}`,
      placeholder: "Enter Name",
    },
    { name: "email", value: `${editValue?.email}`, placeholder: "Enter Email" },
    {
      name: "address",
      value: `${editValue?.address?.city}`,
      placeholder: "Enter address",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "address"
      ? setEditValue({ ...editValue, address: { city: value } })
      : setEditValue({ ...editValue, [name]: value });
  };
  const updateRecord = () => {
    const temp = [];
    studentData.map((value, i) => {
      if (value.id === editValue.id) {
        return temp.push(editValue);
      } else {
        temp.push(value);
      }
    });
    setStudentData(temp);
    setIsEditing(false);
    setIndex();
  };
  return (
    <>
      <Button onClick={addRecord} type="button">
        Add Record
      </Button>
      <TableComp
        columns={studentColumn}
        dataSource={studentData}
        loading={loading}
      />
      <Modal
        title={!index ? "Add Details" : "Edit Details"}
        visible={isEditing}
        okText={!index ? "Save" : "Update"}
        onCancel={() => setIsEditing(false) || setIndex()}
        onOk={!index ? addRecordDetails : updateRecord}
      >
        {inputFields.map((field, index) => {
          return (
            <Input
              name={field.name}
              value={field.value}
              onChange={(e) => handleChange(e)}
              placeholder={field.placeholder}
            />
          );
        })}
      </Modal>
    </>
  );
};

export default Crud;
