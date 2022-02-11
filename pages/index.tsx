import BaseLayout from '@/components/common/BaseLayout';
import ComponentMapper from '@/components/ComponentMapper';
import { useUsers } from '@/hooks/useUsers';
import React from "react";
export default function Index() {
  const {data, loading} = useUsers();
  return (
    <BaseLayout selectedKey='1'>
     <ComponentMapper isFetching={loading} copomentType='user' data={data} />
    </BaseLayout> 
  );
}
