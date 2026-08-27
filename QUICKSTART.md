# 🚀 Quick Start

## Setup (One-time)

```bash
pnpm install
```

That's it! The installer will:
- ✅ Install Node.js dependencies
- 🦀 Set up Rust & WASM tools
- 🏗️ Build the core rewriter
- 📦 Prepare everything for development

## Start Development

```bash
pnpm start
```

This will start the dev server on `http://localhost:8080`

---

## Available Commands

| Command | What it does |
|---------|-------------|
| `pnpm start` | Start dev server |
| `pnpm dev` | Same as start |
| `pnpm dev:debug` | Start with debug output |
| `pnpm setup` | Manual setup (re-install Rust/WASM tools) |
| `pnpm test:package` | Run package validation tests |

---

## Troubleshooting

### "Rust setup failed"
If the automatic Rust setup fails, install it manually:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
pnpm setup
```

### "Building rewriter failed"
Try running setup again:
```bash
pnpm setup
```

### Clear everything and start fresh
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

That's all! Enjoy 🎉
