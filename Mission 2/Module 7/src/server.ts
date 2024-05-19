import { Server } from "http";
import app from "./app";
const port = 5000;

let server: Server;

async function bootStrap() {
  server = app.listen(port, () => {
    console.log(`lisening from port ${port}`);
  });
}

bootStrap();
