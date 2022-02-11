import { ISinglePostResponse } from "@/models/post.model";
import { useQuery } from "@apollo/client";
import { GET_POST } from "graphql/queries/post.query";
import { useEffect, useState } from "react";

export interface IPost{
    comments: string[];
    id: string;
    title: string;
    body: string;
}

export function usePostById(id: string): {data?: IPost, loading: boolean}{
  const [post, setPost] = useState<IPost>();
  const {data, loading} = useQuery<ISinglePostResponse>(GET_POST, {
      variables: {id}
  });
  useEffect(() => {
    if(data){
      const comments: string[] = data?.post.comments?.map(post => post.id)
      const id = data.post.id;
      const {title, body} = data.post.data;
      setPost({comments, id, title, body: body.html });
    }
  }, [data]);
    return {data: post, loading};
}