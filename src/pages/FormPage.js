import React from "react";
import { Form, Input, Select, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Field } from "rc-field-form";
const { Option } = Select;
const areas = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
  { label: "Surat", value: "Surat" },
];

const sights = {
  Beijing: ["Tiananmen", "Great Wall"],
  Shanghai: ["Oriental Pearl", "The Bund"],
  Surat: ["Varachha", "Pal"],
};
const FormPage = () => {
  const [form] = Form.useForm();
  console.log(form);
  const handleFinish = (values) => {
    console.log("VALUES", values);
  };
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
  return (
    <>
      <Form autoComplete="off" form={form} onFinish={handleFinish}>
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder={`First Name ${key}`} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
        {/* <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item name="confirmPassword" label="Confirm Password">
          <Input.Password placeholder="Enter Confirm password" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select Gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="dob" label="Date of Birth">
          <DatePicker picker="date" placeholder="Choose Date" />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input placeholder="Enter website url" />
        </Form.Item>
        <Form.Item name="agreement" label="Agreement">
          <Checkbox>Agree</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item> */}
      </Form>
      <Form autoComplete="off" form={form} onFinish={handleFinish}></Form>
      <Form autoComplete="off" form={form} onFinish={handleFinish}>
        <Form.Item
          name="area"
          label="Area"
          rules={[{ required: true, message: "Missing area" }]}
        >
          <Select options={areas} onChange={handleChange} />
        </Form.Item>
        <Form.List name="sights">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    // {...field}
                    label="Sight"
                    name={[field.name, "sight"]}
                    rules={[{ required: true, message: "Missing sight" }]}
                  >
                    <Select
                      placeholder={field.name}
                      disabled={!form.getFieldValue("area")}
                      style={{ width: 130 }}
                    >
                      {console.log("call", sights[form.getFieldValue("area")])}
                      {(sights[form.getFieldValue("area")] || []).map(
                        (item) => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        )
                      )}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Price"
                    name={[field.name, "price"]}
                    rules={[{ required: true, message: "Missing price" }]}
                  >
                    <Input />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add sights
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormPage;
