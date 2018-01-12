
export interface IPost {
    id: string;
    cafeID: {
        id: string;
        title: string;
    };
    text: string;
    rate: number;
    user: {
        name: string,
        email: string,
        phone: string
    };
    createdAt: Date;

}

export class Post implements IPost {
    id: string;
    cafeID: {
        id: string;
        title: string;
    };
    text: string;
    rate: number;
    user: {
        name: string,
        email: string,
        phone: string,
    };
    createdAt: Date;

    constructor(postInfo?: IPost) {
        Object.assign(this, postInfo);
    }
}
