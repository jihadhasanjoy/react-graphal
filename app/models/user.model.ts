export interface ICreateUser{
    phone: string;
    secret: string;
}

export interface IUsersRespone{
    users:IUserData[]
}
    
export interface IUserData{
    data:{
        first_name: string;
        email: string;
        phone:string;
    },
    id: string;
}