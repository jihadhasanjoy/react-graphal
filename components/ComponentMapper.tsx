import DesignerComponent from "@/lib/componentType";
import { ITitleLayout } from "@/models/common";
import { Col, Row } from "antd";
import React, { useState } from "react";
import TitleLayout from "./single/TitleLayout";
interface IComponentMapperProps {
  copomentType: 'user' | 'post' | 'comment';
  data: ITitleLayout[]
}
export default function ComponentMapper({copomentType, data}: IComponentMapperProps) {
  const [editorInfo, setSditorInfo] = useState<{isShow: boolean, id?: string}>();
  const Component = DesignerComponent[copomentType];

  const onEditorShow = (id: string): void => {
    setSditorInfo({isShow: true, id})
  }
  const onEditorHide =() => {
    setSditorInfo({isShow: false, id: undefined})
  }
  return (
    <Row style={{width: '100%', height: '100%'}}>
      <Col style={{width: '100%', height: '100%'}} span={6}>
       <TitleLayout showEditor={onEditorShow} layoutData={data} />
      </Col>
      { editorInfo?.isShow && 
        <Col style={{width: '100%', height: '100%'}} span={18} className="right-layout">
          <Component id={editorInfo?.id} hideEditor={onEditorHide}/>
       </Col>
      }
    </Row>
  );
}