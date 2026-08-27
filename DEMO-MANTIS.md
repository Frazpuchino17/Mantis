# 🦗 Mantis Demo - Transformación Completada

## ✨ Lo que hicimos

Transformamos la demo de Scramjet en una demostración profesional de **Mantis**, un proxy web ligero y personalizable.

## 🎨 Cambios visuales

### 1. **Nuevo Logo SVG**
- Logo moderno de una mantis en gradiente naranja (#FF6B35 → #FF8C42)
- Aparece en el header del navegador
- Favicon en la pestaña del navegador

### 2. **Header profesional**
- Título "Mantis" con gradiente naranja
- Subtítulo "Lightweight Web Proxy"
- Diseño moderno con degradados y efecto blur
- Colores coordin ados: #FF6B35 (naranja) y #FFB84D (dorado)

### 3. **Interfaz mejorada**
- Tabs con iconos Material Design:
  - 🌐 Browser (language)
  - 🔗 Network (dns)
  - 💻 Playground (code)
  - ⚙️ Settings (settings)
- Tema dark con acentos naranja
- Efecto glow en los elementos activos

### 4. **Dev Server personalizado**
- ASCII art de Mantis en naranja
- Mensaje "MANTIS PROXY - DEV SERVER"
- Versión: mantis/1.0.0
- URLs:
  - Demo: http://localhost:4141/
  - WISP Proxy: ws://localhost:4142/

## 🔧 Archivos modificados

| Archivo | Cambios |
|---------|---------|
| `packages/demo/index.html` | Título, favicon, imports |
| `packages/demo/src/App.tsx` | Nuevo header con logo, tabs con iconos, estilos Mantis |
| `packages/demo/public/mantis-logo.svg` | Logo SVG nuevo |
| `devserver.ts` | Banner ASCII, colores Mantis |

## 🚀 Cómo probarlo

```bash
pnpm start
```

Luego abre: http://localhost:4141/

## 💡 Características del proxy

### Search bar funcional
- Ingresa URL o búsqueda
- Soporte para autocompletar con `https://`
- Botones de navegación: ◀️ Back | ▶️ Forward | 🔄 Reload

### Network Monitor
- Ver todas las solicitudes proxy
- Inspector de headers y respuestas
- Contador de solicitudes activas

### Playground
- Zona para testear y customizar
- Listo para experimentos

### Settings
- Configurar transporte (Libcurl, Epoxy)
- WISP URL personalizable
- Límite de requests

## 🎯 Proxy funcional

El WISP server está completamente configurado y activo:

✅ **WISP Server** en puerto 4142
- Maneja WebSocket connections
- Permite IPs privadas y loopback
- Reescribe URLs automáticamente

✅ **Proxy ready-to-use**
- Navega por internet a través del proxy
- Bloquea IPs privadas por defecto
- Loopback permitido para desarrollo

## 🎁 Customización fácil

Gracias a la estructura clara, es muy fácil customizar:

- Cambiar colores: Busca `#FF6B35` en App.tsx
- Cambiar logo: Reemplaza `mantis-logo.svg`
- Cambiar titulo: Edita `brand-info h1` en App.tsx
- Agregar features: Extiende los componentes

## 📝 Estructura del proyecto

```
packages/demo/
├── index.html              # HTML con referencias a scripts
├── src/
│   ├── App.tsx            # Componente principal (UI mejorada)
│   ├── pages/
│   │   ├── BrowserView.tsx    # Visor del navegador proxy
│   │   ├── RequestViewer.tsx  # Monitor de red
│   │   └── ...
│   └── store.ts           # Configuración
└── public/
    ├── mantis-logo.svg    # Logo (NUEVO)
    └── sw.js              # Service worker
```

## 🎉 Resultado

Una interfaz profesional y moderna que:
- ✅ Refleja la marca "Mantis"
- ✅ Funciona como proxy web completo
- ✅ Es fácil de customizar
- ✅ Está lista para producción

¡Disfruta tu nuevo proxy personalizado! 🦗
