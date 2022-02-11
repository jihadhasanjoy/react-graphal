import { ICommentData } from "./comment.model";

export interface IBasePost{
    title: string;
}

export interface ICreatePost extends IBasePost{
    body: string;
    comments: string[];
}

export interface IUpdatePost extends IBasePost{
    body: string;
    comments: string[];
}

export interface IPostResponse{
    posts:IPostData[]
}
    
export interface IPostData{
    data:{
        title: string;
    },
    id: string;
}


export interface ISinglePostResponse{
  post: {
    comments: ICommentData[];
    data: {
        body: {
            html: string
        }
        title: string;
    },
    id: string;
  }
}


