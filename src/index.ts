import express from "express";
import { routerApi } from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

routerApi(app);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
