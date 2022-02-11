import { useComments } from "@/hooks/useComments";
import { usePostById } from "@/hooks/usePostById";
import { IRightLayoutProps } from "@/models/common";
import { ICreatePost } from "@/models/post.model";
import { useMutation } from "@apollo/client";
import { Col, Form, Input, Modal, Row, Select, Spin } from "antd";
import { CREATE_POST, UPDATE_POST } from "graphql/mutations/post.mutation";
import { GET_POSTS } from "graphql/queries/post.query";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import 'suneditor/dist/css/suneditor.min.css';
import FormHeader from "./FormHeader";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function PostEditor({id, hideEditor}: IRightLayoutProps) {
  const [form] = Form.useForm<ICreatePost>();
  const [content, setContent] = useState<string>();
  const [pageLoading, setPageLoading] = useState(false);
  const {data: comments} = useComments();
  const {data, loading} = id ? usePostById(id) : {data: undefined, loading: false};
  
  const onFormSubmit = (values: any): void => {
    if(id){
      onUpdatePost(values)
      return;
    }
    onCreatePost(values);
  }
  const [createPostMutation] = useMutation(CREATE_POST, {
    refetchQueries: [
        GET_POSTS
    ],
  });

  const [updatePostMutation] = useMutation(UPDATE_POST, {
        refetchQueries: [
            GET_POSTS
        ],
    }
  );

  const onCreatePost = (values: any): void => {
    setPageLoading(true);
    createPostMutation({variables:{
      payload: {
          title: values.title,
          body: {html: values.body}
      }
      }}).then(res => {
          setPageLoading(false);
          Modal.success({content: 'Post created successfully',
              onOk: () => { hideEditor() }})
      }).catch(err=>{
        setPageLoading(false);
        Modal.error({title: 'Post created failed!',
            content: err.message})
      })
  }

  const onUpdatePost = (values: any): void =>{
    setPageLoading(true);
    updatePostMutation({variables:{
      id,
      payload: {
          title: values.title,
          body: {html: values.body}
      }
      }}).then(res => {
         setPageLoading(false);
          Modal.success({content: 'Post updated successfully'})
          hideEditor();
    }).catch(err=>{
      setPageLoading(false);
      Modal.error({title: 'Post Update failed!',
          content: err.message})
    })
  }


  useEffect(() => {
    if(!data) {return}
    const comments = data.comments || [];
    setContent(data?.body)
    form.setFieldsValue({comments, title: data?.title  })
  }, [data]);
  
  return (
    <Spin spinning={loading || pageLoading}>
     <Form form={form} layout="vertical"
        style={{ height: "100%" }} onFinish={onFormSubmit} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>       
        <FormHeader title={ (id ? 'Edit' : 'Create') + ' a Post'} buttonText={id ? 'Update' : 'Create'} />
        <Row className="form-content">
          <Col span={24}>
            <Form.Item name="title"  label="Title" rules={[{ required: true, message: 'Please input title' }, { message: 'Name maximum 66 charecters', max: 66 }]}>
                <Input autoFocus={true} placeholder="title"  />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="body" label="Body">
              <SunEditor setContents={content} onChange={(val) => {setContent(val)}} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="comments" label="Comments">
              <Select
                  mode="multiple"
                  allowClear
                  style={{width: '100%'}}
                  placeholder="Please select"
              >
                  {comments && comments.map(comment => 
                  <Select.Option
                      key={comment.id}>{comment.title}
                  </Select.Option>)}
                </Select>
              </Form.Item>
          </Col>
        </Row>
     </Form>
    </Spin>
  );
}