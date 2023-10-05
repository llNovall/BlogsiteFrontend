import { Tag } from "./tag";

export interface Blog {
    id : string;
    title: string;
    imageUrl: string;
    tags : Tag[];
    content: string;
    createdAt: Date;
    editedAt: Date;
    isFeatured: boolean;
    views: number;
}
