import {
  Button,
  Typography,
  Popconfirm,
  Modal,
  Form,
  Input,
  Radio,
  DatePicker,
  Card,
} from "antd";
import { memo, useEffect, useState } from "react";
import type { FormProps } from "antd";
import { api } from "../api";
import dayjs from "dayjs";

interface DataType {
  fname: string;
  lname: string;
  phone: number;
  birth_date: string;
  gender: string;
  id: string;
}

type FieldType = {
  fname: string;
  lname: string;
  phone: number;
  birth_date: string;
  gender: string;
};

const Student = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [reload, setReload] = useState(false);
  const [form] = Form.useForm();
  const [editingItem, setEditingItem] = useState<DataType | null>(null);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      if (editingItem) {
        await api.put(`/students/${editingItem.id}`, values);
      } else {
        await api.post("/students", values);
      }
      handleCancel();
      form.resetFields();
      setReload((p) => !p);
    } catch (error) {
      console.log(error);
    }
    console.log("Success:", values);
    form.resetFields();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/students");
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [reload]);

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/students/${id}`);
      setReload((p) => !p);
    } catch (err) {}
  };

  const handleUpdate = (item: DataType) => {
    setEditingItem(item);

    form.setFieldsValue({
      ...item,
      birth_date: dayjs(item.birth_date),
    });
    showModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    form.resetFields();
  };

  return (
    <div className="container mx-auto py-6">
      <div className="bg-slate-100 p-4 rounded-lg flex justify-between">
        <Typography.Title level={3}>
          {editingItem ? "Update Student" : "Create Student"}
        </Typography.Title>
        <Button onClick={showModal} type="primary">
          +
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-10 mx-auto">
        {data?.map((item) => (
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <div key={item.id}>
              <p>
                <b>Full Name: </b>
                {item.fname}
              </p>
              <p>
                <b>Last Name: </b>
                {item.lname}
              </p>
              <p>
                <b>Gender: </b>
                {item.gender}
              </p>
              <p>
                <b>Birth Date: </b>
                {item.birth_date}
              </p>
              <p>
                <b>Phone: </b>
                {item.phone}
              </p>
              <hr className="mt-5" />
              <div className="mt-4 flex justify-center gap-5">
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => handleDelete(item.id)}
                  onCancel={handleCancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button>Delete</Button>
                </Popconfirm>
                <Button onClick={() => handleUpdate(item)}>Update</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Typography.Title level={3}>Create Student</Typography.Title>
        <Form
          name="basic"
          form={form}
          initialValues={{ isMarried: false }}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Full name"
            name="fname"
            rules={[{ required: true, message: "First Name kiriting" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Last name"
            name="lname"
            rules={[{ required: true, message: "Last Name kiriting" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Phone kiriting!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Birth Date"
            name="birth_date"
            rules={[{ required: true, message: "Date kiriting!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item<FieldType> label="Gender" name="gender">
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              {editingItem ? "Update" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default memo(Student);
