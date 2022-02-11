import { IRightLayoutProps } from "@/models/common";
import React from "react";
export interface IUserEditorProps{
  id: string;
  hideEditor: () => void;
}
export default function UserEditor({id, hideEditor}: IRightLayoutProps) {
  return (
    <div>User Editor</div>
  );
}