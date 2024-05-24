import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { studentRoute } from "./app/Modules/Student/student.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

//! application routes
app.use("/api/v1/students", studentRoute);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ message: "server is running 2 !! " });
  } catch (error) {
    next(error);
  }
});

app.all("*", async (req: Request, res: Response) => {
  res.status(400).send({ message: "Cannot get this route !! " });
});

// global error handler
app.use((error: any, req: Request, res: Response) => {
  res.send({ message: "in global error handler !!! " });
});

export default app;
