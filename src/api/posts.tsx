type User = {
    id: number;
    title: string;
    author: Author;
};

type Author = {
    id: number;
    name: string;
}

export async function GetPost(): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    "id": 1,
                    "title": "Post 1",
                    "author": { "id": 1, "name": "Alice" }
                },
                {
                    "id": 2,
                    "title": "Post 2",
                    "author": { "id": 2, "name": "Bob" }
                }
            ]);
        }, 1000);
    });
}

