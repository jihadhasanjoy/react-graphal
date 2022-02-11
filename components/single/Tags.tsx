
import { Tag } from "antd";
import React from "react";
interface ITagsProps{
    tags: string[];
    onRemoveTag: (tagName: string) => void;
}
export default function Tags({tags, onRemoveTag}: ITagsProps) {
  return (
    <div>
      {
        tags.map(tag =>(
          <Tag key={tag} closable onClose={()=>{
            onRemoveTag(tag)
          }}>{tag}</Tag>
        ))
      }
    </div>
  );
}