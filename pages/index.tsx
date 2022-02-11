import BaseLayout from '@/components/common/BaseLayout';
import ComponentMapper from '@/components/ComponentMapper';
import React from "react";
import { ITitleLayout } from '../models/common';
export default function Index() {
  return (
    <BaseLayout>
     <ComponentMapper copomentType='user' data={defaultData} />
    </BaseLayout>
   
  );
}

const defaultData: ITitleLayout[] = [
  {
   title: 'Title 1',
   id: '1'
  },
  {
    title: 'Title 2',
    id: '2'
   }
]