import { InsertRowAboveOutlined } from '@ant-design/icons';
import React from "react";
import { ITitleLayout } from "@/models/common";

export interface ITileLayoutProps{
    layoutData: ITitleLayout[];
    showEditor: (id: string) => void;
}

export default function TitleLayouts({layoutData, showEditor}: ITileLayoutProps) {
  return (
    <div className="left-layout">
    {layoutData.map(layout =>(
        <h5 className="left-title text-truncate" onClick={() =>showEditor(layout.id)} key={layout.id}>
          <span className="icon"><InsertRowAboveOutlined /></span>
          {layout.title}
        </h5>
    ))}
    </div>
  );
}