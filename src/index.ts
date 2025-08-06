import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hola desde Express con TypeScript!");
});

app.get("/nueva-ruta", (req: Request, res: Response) => {
  res.send("Esta es una nueva ruta!");
});

app.get("/products", (req: Request, res: Response) => {
  res.json([{ name: "Producto 1", price: 1000 }]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
