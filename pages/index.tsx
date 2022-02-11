import BaseLayout from '@/components/common/BaseLayout';
import ComponentMapper from '@/components/ComponentMapper';
import { IUsersRespone } from '@/models/user.model';
import { useQuery } from '@apollo/client';
import { GET_USERS } from 'graphql/queries/user.query';
import React, { useEffect, useState } from "react";
import { ITitleLayout } from '../models/common';
export default function Index() {
  const [users, setUsers] = useState<ITitleLayout[]>([]);
  const {data} = useQuery<IUsersRespone>(GET_USERS, {variables: {status: 'draft'}});
  useEffect(() => {
    if(data){
      const modifyData: ITitleLayout[] = data?.users?.map(user => { return {title: user.data.phone, id: user.id}})
      setUsers(modifyData);
    }
  }, [data]);
  
  return (
    <BaseLayout>
     <ComponentMapper copomentType='user' data={users} />
    </BaseLayout>
   
  );
}
