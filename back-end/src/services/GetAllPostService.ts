import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

class GetAllPostService {
  async execute() {
    const posts = await getRepository(Post)
      .createQueryBuilder("posts")
      .select()
      .getMany();

    return posts;
  }
}

export { GetAllPostService };
