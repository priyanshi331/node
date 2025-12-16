import React from "react";
import { Form, Input, Button } from "antd";

const DemoForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>User Form</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        {/* Name */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true },
            { type: "price" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Catagory"
          name="catagory"
          rules={[{ required: true}]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
          <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true}]}
        >
          <Input.Password placeholder="Enter description" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DemoForm;
