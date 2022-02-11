import BaseLayout from '@/components/common/BaseLayout';
import ComponentMapper from '@/components/ComponentMapper';
import { usePosts } from '@/hooks/userPosts';
import React from "react";
export default function Posts() {
  const {data, loading} = usePosts();
  return (
    <BaseLayout selectedKey='2'>
     <ComponentMapper isFetching={loading} copomentType='post' data={data} />
    </BaseLayout>
  );
}