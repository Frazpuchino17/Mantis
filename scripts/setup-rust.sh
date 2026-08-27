#!/bin/bash
set -euxo pipefail

echo "🦀 Setting up Rust and WASM tools..."

# Check if Rust is already installed
if ! command -v rustc &> /dev/null; then
    echo "📦 Installing Rust..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source "$HOME/.cargo/env"
else
    echo "✅ Rust already installed"
fi

# Install wasm-bindgen-cli
if ! command -v wasm-bindgen &> /dev/null; then
    echo "📦 Installing wasm-bindgen-cli..."
    cargo install wasm-bindgen-cli --version 0.2.105 --quiet
else
    echo "✅ wasm-bindgen-cli already installed"
fi

# Install/Update binaryen
if ! command -v wasm2js &> /dev/null; then
    echo "📦 Installing Binaryen..."
    VER=$(curl --silent -qI https://github.com/WebAssembly/binaryen/releases/latest | awk -F '/' '/^location/ {print  substr($NF, 1, length($NF)-1)}')
    curl -LO https://github.com/WebAssembly/binaryen/releases/download/$VER/binaryen-${VER}-x86_64-linux.tar.gz
    tar xvf binaryen-${VER}-x86_64-linux.tar.gz
    rm -rf binaryen-${VER}-x86_64-linux.tar.gz
    mkdir -p ~/.local/bin ~/.local/lib
    mv binaryen-${VER}/bin/* ~/.local/bin/ 2>/dev/null || true
    mv binaryen-${VER}/lib/* ~/.local/lib/ 2>/dev/null || true
    rm -rf binaryen-${VER}
else
    echo "✅ Binaryen already installed"
fi

# Install wasm-snip
if ! command -v wasm-snip &> /dev/null; then
    echo "📦 Installing wasm-snip..."
    cargo install --git https://github.com/r58playz/wasm-snip --quiet
else
    echo "✅ wasm-snip already installed"
fi

echo "✨ Rust setup complete!"
