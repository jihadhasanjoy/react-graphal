import { ITitleLayout } from "@/models/common";
import { IUsersRespone } from "@/models/user.model";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "graphql/queries/user.query";
import { useEffect, useState } from "react";

export function useUsers(): {data: ITitleLayout[], loading: boolean}{
    const [users, setUsers] = useState<ITitleLayout[]>([]);
    const {data, loading} = useQuery<IUsersRespone>(GET_USERS, {variables: {status: 'draft'}});
    useEffect(() => {
      if(data){
        const modifyData: ITitleLayout[] = data?.users?.map(user => { return {title: user.data.phone, id: user.id}})
        setUsers(modifyData);
      }
    }, [data]);
    
    return {data: users || [], loading};
}