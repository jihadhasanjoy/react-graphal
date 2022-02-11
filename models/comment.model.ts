export interface ICreateComment{
    id?: string;
    body: string;
    posts: string;
}

export interface ICommentResponse{
    comments:ICommentData[]
}
    
export interface ICommentData{
    data:{
        body: string;
    },
    id: string;
}


export interface ISingleCommentResponse{
    comment: {
      post: {
          id: string;
      };
      data: {
        body: string
      },
      id: string;
    }
  }