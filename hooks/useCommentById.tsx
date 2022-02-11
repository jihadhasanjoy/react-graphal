import { ISingleCommentResponse } from "@/models/comment.model";
import { useQuery } from "@apollo/client";
import { GET_COMMENT } from "graphql/queries/comment.query";
import { useEffect, useState } from "react";

export interface IComment{
    post: string;
    id: string;
    body: string;
}

export function useCommentById(id: string): {data?: IComment, loading: boolean}{
  const [coment, setComment] = useState<IComment>();
  const {data, loading} = useQuery<ISingleCommentResponse>(GET_COMMENT, {
      variables: {id}
  });
  useEffect(() => {
    if(data){
      
      const post = data?.comment?.post?.id;
      const id = data?.comment?.id;
      const body = data.comment.data.body;
      setComment({post, id, body: body });
    }
  }, [data]);
    return {data: coment, loading};
}