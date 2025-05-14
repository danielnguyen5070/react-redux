export type User = {
    id: number;
    name: string;
    age: number;
};

export async function GetUser(): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    "id": 1,
                    "name": "Nguyen Hoang Viet",
                    "age": 12
                },
                {
                    "id": 2,
                    "name": "Nguyen Vu Duy",
                    "age": 15
                }
            ]);
        }, 1000);
    });
}

