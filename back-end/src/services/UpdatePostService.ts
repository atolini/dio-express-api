import { getRepository } from "typeorm";
import { Post } from "../entities/Post";

class UpdatePostService {
  async execute({ id, title, content }) {
    const post = await getRepository(Post)
      .createQueryBuilder()
      .update()
      .set({
        title,
        content,
      })
      .where("id = :id", { id })
      .execute();

    return post.raw;
  }
}

export { UpdatePostService };
