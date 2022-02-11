import { IRightLayoutProps } from "@/models/common";
import { ICreateUser } from "@/models/user.model";
import { useMutation } from "@apollo/client";
import { Col, Form, Input, Modal, Row } from "antd";
import { UPDATE_USER, USER_REGISTER } from "graphql/mutations/user.mutation";
import { GET_USERS } from "graphql/queries/user.query";
import React, { useEffect } from "react";
import FormHeader from "./FormHeader";

export default function UserEditor({id, hideEditor , data}: IRightLayoutProps) {
  const [form] = Form.useForm<ICreateUser>();
  const [userRegister] = useMutation(USER_REGISTER, {
    refetchQueries: [
        GET_USERS, // DocumentNode object parsed with gql
    ],
  });

  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [
        GET_USERS, // DocumentNode object parsed with gql
    ],
  });

  const onUpdateUser = (values: any) => {
      updateUser({variables:{
        id,
        payload: {
          secret: values?.secret,
          phone: values?.phone,
        }
    }}).then(res => {
        Modal.success({content: "User updated successfully"})
        hideEditor()
    }).catch(err=>{
      Modal.error({title: 'User update failed!',content: err.message})
    })
  }

  const onCreateUser = (values: any) => {
    userRegister({variables:{
      ...values
    }}).then(res => {
        Modal.success({content: "User Created successfully"})
        hideEditor()
    }).catch(err=>{
      Modal.error({title: 'User Creation failed!', content: err.message})
    })
  }
  
  const onFormSubmit = (values: any): void => {
    if(id){
      onUpdateUser(values);
      return;
    }
    onCreateUser(values);
  }

  useEffect(() => {
   if(!id) {return}
   const findInfo = data?.find(info => info.id === id);
   findInfo && form.setFieldsValue({phone : findInfo.title})
  }, [id]);


  return (
    <>
     <Form form={form} layout="vertical"
        style={{ height: "100%" }} onFinish={onFormSubmit} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>       
        <FormHeader title="Edit a User" buttonText={id ? 'Update' : 'Create'} />
        <Row className="form-content">
          <Col span={24}>
            <Form.Item name="phone"  label="Phone" rules={[{ required: true, message: 'Please input phone number' }, { message: 'Phone maximum 15 charecters', max: 15 }]}>
                <Input placeholder="phone"  />
            </Form.Item>
          </Col>

         {!id && <Col span={24}>
            <Form.Item name="secret"  label="Secret" >
                <Input  placeholder="secret"  />
            </Form.Item>
          </Col>}
        </Row>
     </Form>
    </>
  );
}