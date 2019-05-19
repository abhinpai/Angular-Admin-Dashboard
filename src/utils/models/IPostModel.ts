export interface IPost {
    sectionTitle: string;
    sectionDescription: string;
    posts: IPostContent[];
}

interface IPostContent{
    postID: string;
    description: string;
    category: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    tags: string[];
    imgUrl: string;
    createdBy: string;
    creatorId: string;
}