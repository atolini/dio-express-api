import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";

class UpdatePostController {
  async handle(request: Request, response: Response) {
    const updatePostService = new UpdatePostService();

    const { id, title, content } = request.body;

    if (!title || !id || !content) {
      return response.status(400).json("FAIL");
    }

    await updatePostService.execute({ id, title, content });

    return response.status(204).json();
  }
}

export { UpdatePostController };
