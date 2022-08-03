import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

class DeletePostController {
  async handle(request: Request, response: Response) {
    const deletePostService = new DeletePostService();

    const { id } = request.params;

    await deletePostService.execute({ id });

    return response.status(204).json();
  }
}

export { DeletePostController };
