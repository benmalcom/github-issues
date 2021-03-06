export interface Issue {
    id: number;
    title: string;
    body: string;
    number: number;
    comments: number;
    user: {
        login: string,
        avatar_url: string,
    };
    state: string;
    comments_url: string;
    created_at: string;
}
