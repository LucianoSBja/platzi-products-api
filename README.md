# 🛍️ Platzi Products API

API REST desarrollada con **Express** y **TypeScript** como parte de mi proceso de aprendizaje de backend en [Platzi](https://platzi.com/).  
El objetivo es gestionar un catálogo de productos con operaciones CRUD básicas.

---

## 🚀 Tecnologías usadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon) (para desarrollo)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) (opcional)

---

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/platzi-products-api.git
cd platzi-products-api
yarn install
```

---

## 🔧 Scripts disponibles

```bash
yarn dev       # Ejecuta el servidor en modo desarrollo con ts-node-dev
yarn build     # Compila el proyecto a JavaScript
yarn start     # Ejecuta el código compilado desde dist/
```

---

## 📁 Estructura del proyecto

```
platzi-products-api/
├── src/
│   ├── index.ts          # Punto de entrada de la API
│   ├── routes/           # Rutas de la API
│   └── controllers/      # Lógica de negocio
├── dist/                 # Código compilado
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✨ Endpoints esperados (CRUD)

| Método | Ruta          | Descripción                 |
| ------ | ------------- | --------------------------- |
| GET    | /products     | Obtener todos los productos |
| GET    | /products/:id | Obtener un producto por ID  |
| POST   | /products     | Crear un nuevo producto     |
| PUT    | /products/:id | Actualizar un producto      |
| DELETE | /products/:id | Eliminar un producto        |

---

## 📚 En desarrollo

Este proyecto crecerá a medida que avance en el curso. Posibles mejoras futuras:

- Conexión con base de datos (PostgreSQL, MongoDB, etc.)
- Validación con Zod o Joi
- Middleware de autenticación
- Documentación con Swagger

---

## 🧑‍💻 Autor

Desarrollado por [Tu Nombre] como parte del curso de backend en Platzi.

---

## 📜 Licencia

MIT
