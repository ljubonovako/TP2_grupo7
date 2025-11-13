# 🍕 DelivR API – TP Final Taller de Programación II

## 🧭 Descripción general

**DelivR** es una API RESTful desarrollada en **Node.js** con **Express** y **Sequelize**, que simula un sistema de gestión de pedidos de comida tipo “delivery”.

El proyecto incluye autenticación con **JWT**, roles de usuario (admin, restaurant, courier, customer), relaciones relacionales en base de datos **PostgreSQL**, exportación de datos a CSV, asincronismo con `async/await`, y una estructura modular bajo el patrón **MVC**.

## 📦 Tecnologías y dependencias

| Tecnología | Uso principal |
|-------------|----------------|
| **Node.js + Express** | Servidor HTTP y manejo de rutas |
| **Sequelize** | ORM para PostgreSQL |
| **PostgreSQL** | Base de datos relacional |
| **JWT (jsonwebtoken)** | Autenticación de usuarios |
| **bcryptjs** | Encriptación de contraseñas |
| **dotenv** | Variables de entorno |
| **morgan + cors** | Logging y CORS |
| **csv-writer** | Exportación de datos a CSV |
| **Jest + Supertest** | Pruebas automáticas |

## 🗂️ Estructura del proyecto (MVC)
Esta organización implementa **MVC (Model–View–Controller)** y separa responsabilidades.

📦 delivr-api/
├── 📄 package.json
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 README.md
│
├── 📁 src/
│ ├── 📄 app.js
│ ├── 📄 server.js
│ │
│ ├── 📁 config/
│ │ ├── 📄 database.cjs # Configuración de Sequelize (CommonJS)
│ │
│ ├── 📁 controllers/
│ │ ├── 📄 auth.controller.js
│ │ ├── 📄 restaurants.controller.js
│ │ ├── 📄 products.controller.js
│ │ ├── 📄 orders.controller.js
│ │ └── 📄 assignments.controller.js
│ │
│ ├── 📁 routes/
│ │ ├── 📄 auth.routes.js
│ │ ├── 📄 restaurants.routes.js
│ │ ├── 📄 products.routes.js
│ │ ├── 📄 orders.routes.js
│ │ └── 📄 index.routes.js # Une todas las rutas
│ │
│ ├── 📁 middlewares/
│ │ ├── 📄 authJwt.js # Middleware JWT + roles
│ │ ├── 📄 validateRequest.js # Validaciones
│ │ └── 📄 errorHandler.js # Manejo global de errores
│ │
│ ├── 📁 db/
│ │ └── 📁 models/
│ │ ├── 📄 index.js # Configura Sequelize y relaciones
│ │ ├── 📄 user.js
│ │ ├── 📄 restaurant.js
│ │ ├── 📄 product.js
│ │ ├── 📄 order.js
│ │ ├── 📄 orderItem.js
│ │ └── 📄 assignment.js
│ │
│ ├── 📁 scripts/
│ │ ├── 📄 db-sync.js # Sincroniza modelos con DB
│ │ └── 📄 test-db.js # Prueba conexión a PostgreSQL
│ │
│ ├── 📁 utils/
│ │ └── 📄 csv.js # Exportación de datos a CSV
│
└── 📁 tests/
└── 📄 health.test.js # Test de /api/health

## ⚙️ Instalación y configuración

### 1️⃣ Requisitos
- Node.js 18+
- PostgreSQL 14+
- npm o yarn

### 2️⃣ Instalación

git clone https://github.com/ljubonovako/TP2_grupo7.git
cd delivr-api
npm install

### 3️⃣ Configuración del entorno
cp .env.example .env

Configurar las variables del archivo .env con tus credenciales locales.
### 4️⃣ Crear base de datos
CREATE DATABASE delivr;

### 5️⃣ Sincronizar modelos
npm run db:sync

### 6️⃣ Ejecutar el servidor
npm run dev

Salida esperada:
DB connected
API listening on 3000

### 🚀 Endpoints principales

🧪 Pruebas con Bruno / Postman

POST /api/auth/register → crear usuarios.
POST /api/auth/login → guardar token JWT.
POST /api/restaurants → crear restaurante (admin).
POST /api/products → crear producto (restaurant).
POST /api/orders → crear pedido (customer).
PUT /api/orders/:id/status → cambiar estado (restaurant/admin).


⚡ Autor: Ljubo Novakovich
