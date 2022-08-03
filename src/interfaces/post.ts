export interface IPost {
    id: number,
    author: {
        name: string,
        avatarUrl: string
    },
    title: string,
    text: string,
    date: string
}