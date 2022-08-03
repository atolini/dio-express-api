import express, { Request, Response} from "express";
import { router } from "./routes";
import createConnection from "./database"; 
import cors from "cors"; 

createConnection();
const server = express();

server.use(cors());
server.use(express.json());
server.use(router); 

server.listen(5000, () => {
  console.log("Servidor funcionando na porta 5000");
});
