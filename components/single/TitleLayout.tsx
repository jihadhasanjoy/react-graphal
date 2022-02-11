import { ITitleLayout } from "@/models/common";
import { InsertRowAboveOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import React from "react";

export interface ITileLayoutProps{
    layoutData: ITitleLayout[];
    isFetching: boolean;
    showEditor: (id?: string) => void;
    hideEditor: () => void;
}

export default function TitleLayouts({layoutData, isFetching, showEditor}: ITileLayoutProps) {
  return (
    <Spin spinning={isFetching}>
      <div className="left-layout">
        <Button className="mb-3" type="primary" onClick={() => showEditor()} block>Create New</Button>
        {layoutData.map(layout =>(       
          <h5 onClick={() => showEditor(layout.id)} key={layout.id} className="left-title text-truncate">
          <span className="icon"><InsertRowAboveOutlined /></span>
          {layout.title}
        </h5>  
        ))}
        
      </div>
    </Spin>
  );
}