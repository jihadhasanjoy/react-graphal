import { CopyOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
export interface IFormHeaderProps{
 title: string;
 buttonText: string;
}
export default function FormHeader({title, buttonText}: IFormHeaderProps) {
  return (
    <div className="right-header d-flex justify-content-between">
      <div className="title">{title}</div>
      <div className="title">
        <Button icon={<CopyOutlined />} type="default" size="middle" htmlType="submit">
        {buttonText}
      </Button>
      </div>
    </div>
  );
}