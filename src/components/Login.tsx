import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Typography } from "antd";

type FieldType = {
  username?: string;
  name?: string;
  password?: string;
};

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 h-screen">
      <div className="max-w-[450px] w-full bg-white p-6 rounded-lg shadow">
        <Typography.Title level={3}>Sign In </Typography.Title>
        <Form
          name="basic"
          form={form}
          //   initialValues={{name: "John", username: "doe", password: "123456"}}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Ismingiz"
            name="name"
            rules={[{ required: true, message: "Username kiriting" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Username kiriting" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label={null}>
            <Button className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
