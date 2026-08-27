#!/usr/bin/env node
import { execSync, spawnSync } from "child_process";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.dirname(__dirname);

async function setupDependencies() {
  console.log("📚 Setting up Scramjet...\n");

  const homeDir = process.env.HOME || process.env.USERPROFILE || "";

  try {
    // Source cargo env and check if tools are installed
    console.log("🔧 Checking Rust/WASM tools...\n");
    
    const cargoEnv = `. "${homeDir}/.cargo/env" 2>/dev/null || true`;
    const checkCmd = `${cargoEnv} && which wasm-bindgen wasm2js > /dev/null 2>&1`;
    
    let toolsInstalled = false;
    try {
      execSync(checkCmd, { stdio: "pipe", shell: "/bin/bash" });
      toolsInstalled = true;
      console.log("✅ Rust/WASM tools already installed\n");
    } catch {
      console.log("📦 Installing WASM tools...\n");
      
      // Install wasm-bindgen-cli
      try {
        const installCmd = `${cargoEnv} && cargo install wasm-bindgen-cli --version 0.2.105 --locked 2>&1`;
        console.log("Installing wasm-bindgen-cli...");
        execSync(installCmd, { stdio: "inherit", shell: "/bin/bash" });
        console.log("✅ wasm-bindgen-cli installed\n");
      } catch (e) {
        console.error("⚠️  Could not install wasm-bindgen-cli");
        console.error("Make sure Rust is installed: https://rustup.rs/\n");
      }
    }

    // Build the core rewriter
    const coreDir = path.join(rootDir, "packages/core");
    if (existsSync(coreDir)) {
      console.log("🏗️  Building core rewriter...\n");
      try {
        const buildCmd = `${cargoEnv} && cd "${coreDir}" && pnpm rewriter:build`;
        execSync(buildCmd, { 
          stdio: "inherit",
          shell: "/bin/bash",
          cwd: rootDir
        });
        console.log("✅ Core rewriter built successfully\n");
      } catch (e) {
        console.error("⚠️  Core rewriter build failed.");
        console.error("Try running: pnpm setup\n");
        process.exit(1);
      }
    }

    // Build the complete project with rspack
    console.log("📦 Building complete project...\n");
    try {
      const buildCmd = `cd "${rootDir}" && ${cargoEnv} && npx rspack build --mode production`;
      execSync(buildCmd, {
        stdio: "inherit",
        shell: "/bin/bash",
        cwd: rootDir
      });
      console.log("✅ Project built successfully\n");
    } catch (e) {
      console.error("⚠️  Project build failed (non-critical)");
      console.error("Dev server will rebuild files on-demand\n");
    }

    console.log("✨ Setup complete!");
    console.log('🚀 Start developing with: pnpm start\n');

  } catch (error) {
    console.error("❌ Setup error:", error.message);
    process.exit(1);
  }
}

setupDependencies();
