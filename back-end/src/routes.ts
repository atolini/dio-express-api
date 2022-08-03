import { Router, Request, Response } from "express";
import { CreatePostController } from "./controllers/CreatePostController";
import { GetAllPostController } from "./controllers/GetAllPostController";
import { UpdatePostController } from "./controllers/UpdatePostController";
import { DeletePostController } from "./controllers/DeletePostController";

const router = Router();
const createPostController = new CreatePostController();
const getAllPostController = new GetAllPostController();
const updatePostController = new UpdatePostController(); 
const deletePostController = new DeletePostController(); 

router.get("/", (request: Request, response: Response) => {
  return response.json({ mensagem: "Bem-vindo a DIO API" });
});

router.post("/posts", createPostController.handle);
router.get("/posts", getAllPostController.handle);
router.patch('/post', updatePostController.handle);
router.delete('/post/:id', deletePostController.handle);

export { router };
