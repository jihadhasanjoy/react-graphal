import { ICommentResponse } from "@/models/comment.model";
import { ITitleLayout } from "@/models/common";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "graphql/queries/comment.query";
import { useEffect, useState } from "react";

export function useComments(): {data: ITitleLayout[], loading: boolean}{
    const [comments, setComments] = useState<ITitleLayout[]>([]);
    const {data, loading} = useQuery<ICommentResponse>(GET_COMMENTS);
    useEffect(() => {
      if(data){
        const modifyData: ITitleLayout[] = data?.comments?.map(comment => { return {title: comment.data.body, id: comment.id}})
        setComments(modifyData);
      }
    }, [data]);
    return {data: comments || [], loading};
}