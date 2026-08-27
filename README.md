<p align="center">
  <img src="https://raw.githubusercontent.com/Frazpuchino17/Mantis/3900da4f958627cdad65ba2f23e9d011a876aa5e/Screenshot%202026-08-27%201.10.47%20AM.png" alt="Mantis" width="530">


**Mantis** is an interception-based web proxy engine based on **Scramjet v2**, focused on simplifying setup, improving compatibility, and providing a foundation for further development.

Mantis is developed as part of the **SkyFlare** ecosystem.

## Features

* Interception-based web proxy
* Web content rewriting
* Browser-based sandboxing
* WASM-powered rewriting
* Automated setup
* Automatic dependency detection
* Simple development workflow
* Designed for modern web applications

## Supported Sites

Mantis is designed to work with a wide range of modern websites.

Compatibility may vary depending on the website and its implementation.

Some tested sites include:

* Google
* YouTube
* Instagram
* ChatGPT
* Reddit
* Discord
* Spotify
* GeForce NOW
* now.gg

## Installation

Mantis includes an automated setup system that handles the project's required Rust and WASM tooling for you.

### Requirements

* Recent version of `Node.js`
* `pnpm`

### Setup

Clone the repository:

```bash
git clone --recursive https://github.com/Frazpuchino17/Mantis
cd Mantis
```

Install dependencies:

```bash
pnpm install
```

The setup process runs automatically after installation and handles the required tools and builds.

### Running Mantis

Start the development server:

```bash
pnpm start
```

The Mantis demo will be available at:

```text
http://localhost:4141
```

That's it.

## Manual Setup

If you need to run the setup process again:

```bash
pnpm setup
```

The setup script automatically checks for required dependencies and installs or builds anything that is missing.

## Development

Mantis is currently under active development.

Development includes:

* Improving website compatibility
* Improving proxy performance
* Improving rewriting
* Improving interception
* Better support for modern web applications
* Simplifying development and setup
* Integration with other SkyFlare projects

## Credits

Mantis is based on **Scramjet v2** by Mercury Workshop.

Mantis is an independent project and is not affiliated with Mercury Workshop.

## Documentation

* [Quick Start](./QUICKSTART.md)
* [Simplified Setup](./SETUP-SIMPLIFICADO.md)
* [Setup Changes](./RESUMEN-CAMBIOS.md)

## Project

**Mantis** is developed by **SkyFlare**.
