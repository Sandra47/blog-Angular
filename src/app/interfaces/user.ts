export interface User{
    id: number;
    name:string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}