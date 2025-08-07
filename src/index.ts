import express from "express";
import { routerApi } from "./routes";

const app = express();
const PORT = 3000;

app.use(express.json());

routerApi(app);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
