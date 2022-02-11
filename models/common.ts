export interface ITitleLayout{
    id: string;
    title: string;
}

export interface IRightLayoutProps{
    id?: string;
    hideEditor: () => void;
    data?: ITitleLayout[];
}