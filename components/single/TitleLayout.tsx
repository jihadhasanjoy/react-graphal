import { ITitleLayout } from "@/models/common";
import { InsertRowAboveOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from "react";

export interface ITileLayoutProps{
    layoutData: ITitleLayout[];
    showEditor: (id?: string) => void;
    hideEditor: () => void;
}

export default function TitleLayouts({layoutData, showEditor, hideEditor}: ITileLayoutProps) {
  return (
    <div className="left-layout">
    <Button className="mb-3" type="primary" onClick={() => showEditor()} block>Create New</Button>
    {layoutData.map(layout =>(       
        <Popconfirm
        title="Are you sure to edit this task?"
        onConfirm={() =>showEditor(layout.id)}
        okText="Yes"
        cancelText="No"
        key={layout.id}
      >
        <h5 onClick={() => hideEditor()} className="left-title text-truncate">
          <span className="icon"><InsertRowAboveOutlined /></span>
          {layout.title}
        </h5>  
      </Popconfirm>   
    ))}
      
    </div>
  );
}