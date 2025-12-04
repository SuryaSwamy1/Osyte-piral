# Integration Setup Guide

## Architecture

- **Frontend** (`frontend/`) - App Shell (Piral Instance)
- **Auth Pilet** (`pilets/auth-pilet/`) - Authentication Microfrontend
- **Backend** (`backend/`) - Node.js API with JWT

## Running the Full Application

### Step 1: Start Backend Server

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:3001`

### Step 2: Start App Shell

```bash
cd frontend
npm install
npm start
```

App Shell runs on `http://localhost:1234`

### Step 3: Start Auth Pilet (Development Mode)

```bash
cd pilets/auth-pilet
npm install
npm start
```

The pilet will connect to the app shell automatically.

## How It Works

1. **Home Page** (`/`) - Shows the main app with a Login button
2. **Click Login Button** - Navigates to `/login` (served by auth pilet)
3. **Auth Pilet** - Provides `/login` and `/signup` routes
4. **Backend API** - Handles authentication with JWT tokens

## Routes

- `/` - Home page with login button (App Shell)
- `/login` - Login page (Auth Pilet)
- `/signup` - Signup page (Auth Pilet)

## Development Workflow

When running in development mode with `npm start` in the pilet folder, Piral CLI automatically:
- Builds the pilet
- Connects to the app shell
- Hot reloads on changes

## Production Build

To build the auth pilet for production:

```bash
cd pilets/auth-pilet
npm run build
```

This creates a production bundle in `dist/` that can be deployed to a feed service or CDN.
