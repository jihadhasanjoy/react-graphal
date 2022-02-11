import { useCommentById } from "@/hooks/useCommentById";
import { usePosts } from "@/hooks/userPosts";
import { ICreateComment } from "@/models/comment.model";
import { IRightLayoutProps } from "@/models/common";
import { useMutation } from "@apollo/client";
import { Col, Form, Modal, Row, Select, Spin } from "antd";
import { CREATE_COMMENT, UPDATE_COMMENT } from "graphql/mutations/comment.mutation";
import { GET_COMMENTS } from "graphql/queries/comment.query";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import 'suneditor/dist/css/suneditor.min.css';
import FormHeader from "./FormHeader";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false
});

export default function CommentEditor({id, hideEditor}: IRightLayoutProps) {
  const [form] = Form.useForm<ICreateComment>();
  const [content, setContent] = useState<string>();
  const [pageLoading, setPageLoading] = useState(false);
  const {data: posts} = usePosts();
  const {data, loading} = id ? useCommentById(id) : {data: undefined, loading: false};

  const [updateCommentMutation] = useMutation(UPDATE_COMMENT,{
    refetchQueries: [
        GET_COMMENTS
  ]})
    
  const [createComment] = useMutation(CREATE_COMMENT,{
    refetchQueries: [
        GET_COMMENTS
  ]})

  const onCreateComment = (values: any): void =>{
    setPageLoading(true);
    createComment({variables: {
      payload: {body: values.body},
      connect: {post_id: values.post},
      status: "published"
      }}).then(res => {
        setPageLoading(false);
        Modal.success({
            content: 'Successfully Created Comment',
            onOk: () => {
              hideEditor()
            }
        });
    }).catch(err => {
      setPageLoading(true);
      Modal.error({
          title: 'Comment Create failed!',
          content: err.message
      })
    })
  }

  const onUpdateComment = (values: any): void =>{
    setPageLoading(true);
    updateCommentMutation({variables: {
      id,
      payload: {body: values.body},
      connect: {post_id: values.post},
      status: "published"
      }}).then(res => {
      hideEditor()
      setPageLoading(false);
      Modal.success({
          content: 'Successfully updated Comment.',
      });
    }).catch(err => {
      setPageLoading(false);
      Modal.error({
          title: 'Comment Update failed!',
          content: err.message
      })
    })
  }
  
  useEffect(() => {
    console.log(data);
    if(!data) {return}
    setContent(data?.body)
    form.setFieldsValue({posts: data?.post, body: data?.body  })
  }, [data]);
  
  const onFormSubmit = (values: any): void => {
    if(id){
      onUpdateComment(values)
      return;
    }
    onCreateComment(values);
  }
  return (
    <Spin spinning={loading || pageLoading}>
     <Form form={form} layout="vertical"
        style={{ height: "100%" }} onFinish={onFormSubmit} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>       
        <FormHeader title={ (id ? 'Edit' : 'Create') + ' a Comment'} buttonText={id ? 'Update' : 'Create'} />
        <Row className="form-content">
          <Col span={24}>
            <Form.Item name="body"  label="Body">
                <SunEditor setContents={content} onChange={(val) => {setContent(val)}} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name="post" label="Post">
              <Select
                  allowClear
                  style={{width: '100%'}}
                  placeholder="Please select post"
              >
                  {posts && posts.map(post => 
                  <Select.Option
                      key={post.id}>{post.title}
                  </Select.Option>)}
                </Select>
              </Form.Item>
          </Col>
        </Row>
     </Form>
    </Spin>
  );
}