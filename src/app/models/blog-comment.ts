export interface BlogComment {
    id : string;
    sender: string;
    blogId: string;
    parentCommentId: string | null;
    commentBody: string;
    createdAt: Date;
}
