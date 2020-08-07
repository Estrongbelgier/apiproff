import express, { Request, Response } from "express";
import ClassesController from "./app/controllers/ClassesController";
import ConnectionsController from "./app/controllers/ConnectionsController";

const routes = express.Router();

routes.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .json("Wellcome to proff's Api, it's runnig as expected...");
});
routes.post("/classes", ClassesController.create);
routes.get("/classes", ClassesController.index);

routes.post("/connections", ConnectionsController.create);
routes.get("/connections", ConnectionsController.index);

export default routes;
