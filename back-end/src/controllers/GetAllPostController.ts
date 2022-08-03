import { Request, Response } from "express";
import { GetAllPostService } from "../services/GetAllPostService";

class GetAllPostController {
  async handle(request: Request, response: Response) {
    const getAllPostService = new GetAllPostService();

    const posts = await getAllPostService.execute();

    return response.status(200).json(posts);
  }
}

export { GetAllPostController };
