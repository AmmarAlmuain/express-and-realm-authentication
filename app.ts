import express from "express";
import "./config/mongoose";
import { realmApp } from "./config/realm";
import { Request, Response, Application } from "express";
import router from "./routes/auth";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
