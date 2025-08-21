# 🖥️ Frontend - tasks_client


Aplicación web construida con **React + Vite** y **TypeScript** para la gestión de usuarios, tareas y categorías.  
Este frontend consume la [API de Gestión de Tareas](https://github.com/RocioDure12/Basic_Api).

---

## 🚀 Tecnologías utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) (para llamadas a la API)

---

## ⚙️ Instalación y ejecución local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/RocioDure12/tasks_client.git
   cd tasks_client

2. **Instala dependencias:**
  npm install

3. **Configura la URL de la API en un archivo .env:**
  VITE_API_URL=http://localhost:8000

4. **Inicia el servidor de desarrollo:**
  npm run dev

La aplicación estará disponible en:

Local: http://localhost:5173


🔗 URLs de la aplicación

-Frontend Producción: https://task-planner-wajw.onrender.com

-Frontend Local: http://localhost:5173

-API Producción: https://taskplanner-api.onrender.com

-API Local: http://localhost:8000


🔐 Autenticación y Seguridad

  -Gestión de sesión con cookies HTTPOnly (enviadas por la API).

  -Protección de rutas según rol:

  👤 Usuario → tareas y categorías propias.

  🛠️ Admin → gestión de usuarios y control global.


✨ Notas finales

  -Este frontend está 100% integrado con el backend Task Planner API
  

  -Más allá de un simple CRUD, incluye gestión de sesiones, seguridad y feedback visual al usuario.