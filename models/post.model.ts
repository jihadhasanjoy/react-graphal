
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

