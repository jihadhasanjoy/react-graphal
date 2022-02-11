export interface ICreateComment{
    title: string;
    body: string;
    comment: string;
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
