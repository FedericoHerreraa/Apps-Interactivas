# L'Atelier - Aplicación Web del Restaurante

Una aplicación web moderna para mostrar el menú, galería y reseñas del restaurante L'Atelier.

## ¿Cómo correr el frontend?

**Instala las dependencias:**
```bash
npm install
```

**Configura las variables de entorno** (ver sección abajo).

**Inicia la aplicación:**
```bash
npm run dev
```
o para producción:
```bash
npm run build
```



## Dependencias necesarias

- Node.js (v14 o superior recomendado)
- npm (v6 o superior)  
- Backend API corriendo

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto 

Ajusta los valores según tu entorno.

## Estructura del sistema

```
Apps-Interactivas/
│
├── src/
│   ├── components/      # Componentes React
│   │   ├── MenuSection/ # Menú del restaurante
│   │   ├── ProductDetail.jsx
│   │   ├── GalleryHoverZoom.jsx
│   │   └── Review.jsx
│   ├── images/          # Imágenes estáticas
│   └── App.jsx          # Componente principal
├── .env                 # Variables de entorno
├── package.json
└── README.md
```

## Funcionalidades principales

- **Menú interactivo** con categorías y vista detallada de platos
- **Galería de fotos** con efectos hover
- **Reseñas de clientes** con carousel responsive
- **Integración con API** para datos dinámicos
- **Diseño responsive** para móviles y desktop

Podes cambiar las credenciales en el archivo `.env` según

# Licencia

Este proyecto está bajo la licencia MIT.



















