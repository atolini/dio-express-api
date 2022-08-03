import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

export interface IPost {
  id: string;
  title: string;
  content: string;
  email: string;
  name: string;
  date: number;
}

class CreatePostService {
  async insert({ id, title, content, email, name, date }: IPost) {
    const post = await getRepository(Post)
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values([
        { 
          id,
          title,
          content,
          email,
          name,
          date,
        },
      ])
      .execute();

    return post;
  }
}

export { CreatePostService };
