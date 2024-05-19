import express, { NextFunction, Request, Response } from "express";

// export const app = express();
const app = express();

// parsers
app.use(express.json());

// middlewiwres
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  next();
};

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    // res.send({ message: "Hello world !!" });

    try {
      res.send(something);
    } catch (error) {
      // res.status(400).json({ message: "error fouund !! " });
      next(error);
    }
  }
);

app.post("/post", logger, async (req: Request, res: Response) => {
  res.json(req.body);
});

app.all("*", (req: Request, res: Response) => {
  res.send({ success: false, message: "Route not found !!! " });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.send({ message: "in global error handler !!! " });
});

export default app;
