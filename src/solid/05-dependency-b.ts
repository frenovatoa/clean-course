import { JsonDatabaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}

export class PostService {

    private posts: Post[] = [];

    constructor(
        private postProvider: JsonDatabaseService
    ) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // const jsonDB = new JsonDatabaseService();
        // this.posts = await jsonDB.getFakePosts();
        // this.posts = await jsonDB.getPots();
        this.posts = await this.postProvider.getPots();

        return this.posts;
    }
}