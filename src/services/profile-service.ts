import { ProfileDTO } from "../model/Profile";

export function findAll() : ProfileDTO[] {
    return products;
}

export function findById(id: number) : ProfileDTO | undefined {
    return products.find(x => x.id === id);
}

let products : ProfileDTO[] = [

    {
        "id": 13897257,
        "avatar_url": "https://avatars.githubusercontent.com/u/13897257?v=4",
        "url": "https://api.github.com/users/acenelio",
        "name": "Nelio Alves",
        "location": "Brazil",
        "followers": 8981,
      }

]