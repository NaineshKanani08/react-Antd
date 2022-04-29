export const TableData = [
  {
    key: 1,
    name: "foo",
    city: "dallas",
    age: 10,
  },
  {
    key: 2,
    name: "bar",
    city: "dallas",
    age: 20,
  },
  {
    key: 3,
    name: "jim",
    city: "san francisco",
    age: 30,
  },
  {
    key: 4,
    name: "jane",
    city: "denver",
    age: 40,
  },
];
export const column1 = [
  {
    key: "id",
    title: "Name",
    dataIndex: "name",
    render: (name) => {
      return (
        <a
          key="name"
          onClick={() => {
            alert(`Hello ${name}`);
          }}
        >
          {name}
        </a>
      );
    },
  },
  { key: "id", title: "City", dataIndex: "city" },
  {
    key: "id",
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    key: "id",
    title: "Graduated?",
    render: (payload) => {
      return <p key="true">{payload.age > 20 ? "True" : "False"}</p>;
    },
  },
];

// export const studentColumn = [
//   {
//     key: "id",
//     title: "ID",
//     dataIndex: "id",
//   },
//   {
//     key: "id",
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     key: "id",
//     title: "Email",
//     dataIndex: "email",
//   },
//   {
//     key: "id",
//     title: "Address",
//     dataIndex: "address",
//     render: (address) => {
//       return address.city;
//     },
//   },
//   {
//     key: "id",
//     title: "Action",
//     render: (record) => {
//       return (
//         <>
//           <EditOutlined />
//           <DeleteOutlined style={{ color: "red", marginLeft: 12 }} onClick={() =>}/>
//         </>
//       );
//     },
//   },
// ];
