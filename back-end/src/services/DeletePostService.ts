import { getRepository } from 'typeorm';
import { Post } from '../entities/Post';

class DeletePostService {
    async execute({ id }){
        const post = await getRepository(Post)
            .createQueryBuilder()
            .delete()
            .from(Post)
            .where('id = :id', { id })
            .execute();

        return post.raw
    }
}

export { DeletePostService }