import { ITitleLayout } from "@/models/common";
import { IPostResponse } from "@/models/post.model";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "graphql/queries/post.query";
import { useEffect, useState } from "react";

export function usePosts(): {data: ITitleLayout[], loading: boolean}{
  const [posts, setPosts] = useState<ITitleLayout[]>([]);
  const {data, loading} = useQuery<IPostResponse>(GET_POSTS);
  useEffect(() => {
    if(data){
      const modifyData: ITitleLayout[] = data?.posts?.map(post => { return {title: post.data.title, id: post.id}})
      setPosts(modifyData);
    }
  }, [data]);
    return {data: posts || [], loading};
}