export interface IssueComment {
    id: number;
    title: string;
    body: string;
    number: number;
    user: {
        login: string,
        avatar_url: string,
    };
    state: string;
    comments_url: string;
    created_at: string;
}
