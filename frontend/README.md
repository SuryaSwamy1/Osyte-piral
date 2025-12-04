# Piral Microfrontend Application

This is the main Piral app shell for a microfrontend application.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm start
```

The application will be available at `http://localhost:1234`

### Build

Build the production bundle:

```bash
npm build
```

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx          # Main application component with login button
│   ├── App.css          # Application styles
│   ├── index.tsx        # Piral instance entry point
│   ├── layout.tsx       # Layout configuration
│   └── index.html       # HTML template
├── package.json
└── tsconfig.json
```

## Adding Microfrontends (Pilets)

This app shell is ready to load microfrontends. You can add pilets by:

1. Creating pilet packages
2. Publishing them to a feed service
3. Updating the `requestPilets()` function in `src/index.tsx` to fetch from your feed

## Current Features

- Centered login button on the main screen
- Ready for microfrontend integration
- TypeScript support
- Modern React 18
