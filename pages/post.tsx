import BaseLayout from '@/components/common/BaseLayout';
import ComponentMapper from '@/components/ComponentMapper';
import { ITitleLayout } from '@/models/common';
import React from "react";
export default function Posts() {
  return (
    <BaseLayout selectedKey='2'>
     <ComponentMapper copomentType='post' data={defaultData} />
    </BaseLayout>
  );
}

const defaultData: ITitleLayout[] = [
  {
   title: 'Post 1',
   id: '1'
  },
  {
    title: 'Post 2',
    id: '2'
   }
]