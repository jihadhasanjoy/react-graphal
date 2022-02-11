import BaseLayout from "@/components/common/BaseLayout";
import ComponentMapper from "@/components/ComponentMapper";
import { ITitleLayout } from "@/models/common";
import React from "react";
export default function Comments() {
  return (
    <BaseLayout selectedKey='3'>
    <ComponentMapper copomentType='comment' data={defaultData} />
   </BaseLayout>
  );
}

const defaultData: ITitleLayout[] = [
  {
   title: 'comment 1',
   id: '1'
  },
  {
    title: 'comment 2',
    id: '2'
   }
]