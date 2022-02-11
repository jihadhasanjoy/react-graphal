import { IRightLayoutProps } from "@/models/common";
import { ICreatePost } from "@/models/post.model";
import { Col, Form, Input, Row } from "antd";
import React from "react";
import FormHeader from "./FormHeader";

export default function PostEditor({id, hideEditor}: IRightLayoutProps) {
  const [form] = Form.useForm<ICreatePost>();
  const onFormSubmit = (): void => {
    hideEditor()
  }
  return (
    <>
     <Form form={form} layout="vertical"
        style={{ height: "100%" }} onFinish={onFormSubmit} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>       
        <FormHeader title="Edit a Post" buttonText={id ? 'Update' : 'Create'} />
        <Row className="form-content">
          <Col span={24}>
            <Form.Item name="name"  label="Name" rules={[{ required: true, message: 'Please input name' }, { message: 'Name maximum 66 charecters', max: 66 }]}>
                <Input autoFocus={true} placeholder="Name"  />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="address"  label="Address" >
                <Input autoFocus={true} placeholder="Address"  />
            </Form.Item>
          </Col>
        </Row>
     </Form>
    </>
  );
}