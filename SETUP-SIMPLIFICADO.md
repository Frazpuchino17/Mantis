# 🎯 Setup Simplificado

## Quick Start

Ahora el setup es **mucho más simple**:

```bash
pnpm install    # Instalaciones y builds automáticos (1-2 min primera vez)
pnpm start      # Inicia dev server → http://localhost:4141/
```

¡Eso es todo! 🚀

## ¿Qué sucede automáticamente?

Cuando ejecutas `pnpm install`, el script `postinstall` hace:

1. ✅ Instala todas las dependencias npm
2. 🦀 Verifica/instala Rust (si es necesario)
3. 🛠️ Instala herramientas WASM:
   - `wasm-bindgen-cli`
   - `binaryen`
   - `wasm-snip`
4. 🏗️ Compila el rewriter WASM (`pnpm rewriter:build`)
5. 📦 Compila el proyecto completo con rspack

## Comandos disponibles

```bash
pnpm install       # Setup completo (primera vez)
pnpm start         # Inicia dev server
pnpm dev           # Igual que start
pnpm dev:debug     # Dev server con debug output
pnpm setup         # Re-ejecuta setup manual
pnpm test:package  # Valida los packages
```

## URLs de desarrollo

- **Demo**: http://localhost:4141/
- **WISP Proxy**: ws://localhost:4142/

## Troubleshooting

### Error: "Command failed: cargo install"
Instala Rust manualmente:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
pnpm setup
```

### Error: "Core rewriter build failed"
Intenta de nuevo:
```bash
pnpm setup
```

### Resetear todo
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Archivos de setup

- `scripts/setup.mjs` - Orquestrador principal (ejecutado por postinstall)
- `scripts/setup-rust.sh` - Instalador de Rust/WASM (fallback)
- `package.json` - Contiene scripts `postinstall` y `setup`

## 🎉 Resultado

Antes era complicado con muchos pasos manuales. Ahora con `pnpm install && pnpm start` está todo listo.
