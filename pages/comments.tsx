import BaseLayout from "@/components/common/BaseLayout";
import ComponentMapper from "@/components/ComponentMapper";
import { useComments } from "@/hooks/useComments";
import React from "react";
export default function Comments() {
  const {data, loading} = useComments();
  return (
    <BaseLayout selectedKey='3'>
    <ComponentMapper isFetching={loading} copomentType='comment' data={data} />
   </BaseLayout>
  );
}
