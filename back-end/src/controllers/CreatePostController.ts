import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";
import { v4 as uuid } from "uuid";

class CreatePostController {
  async handle(request: Request, response: Response) {
    const createPostService = new CreatePostService();
    const title = request.body.title;
    const name = request.body.name;
    const content = request.body.content;
    const email = request.body.email;
    const date = new Date().getTime();
    const id = uuid();

    if (!title || !name || !content || !email) {
      return response.status(400).json("FAIL");
    }

    const post = await createPostService.insert({
      id,
      title,
      name,
      content,
      email,
      date,
    });

    return response.status(201).json(post.identifiers[0]);
  }
}

export { CreatePostController };
