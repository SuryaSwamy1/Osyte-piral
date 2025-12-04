# Piral Microfrontend Application

A complete microfrontend architecture using Piral with authentication, built with React 18, TypeScript, and Node.js.

## Project Structure

```
project-root/
├── backend/                           # Backend API Server
│   ├── src/
│   │   ├── server.js                 # Express server
│   │   ├── routes/auth.js            # Authentication endpoints
│   │   ├── config/database.js        # SQLite configuration
│   │   └── middleware/auth.js        # JWT middleware
│   └── package.json
│
└── frontend/                          # All Frontend Code
    ├── shell/                         # Main App Shell (Host)
    │   ├── src/
    │   │   ├── index.tsx             # Entry point
    │   │   ├── layout.tsx            # Layout configuration
    │   │   ├── App.tsx               # Home page
    │   │   └── App.css               # Styles
    │   ├── dist/                      # Build output + emulator
    │   └── package.json
    │
    └── pilets/                        # Microfrontends
        └── auth-pilet/                # Authentication Pilet
            ├── src/
            │   ├── index.tsx          # Pilet entry
            │   ├── components/
            │   │   ├── Login.tsx      # Login page
            │   │   └── Signup.tsx     # Signup page
            │   ├── services/
            │   │   └── authService.ts # API integration
            │   └── styles/
            │       └── auth.css       # Auth styles
            ├── dist/                   # Build output
            ├── serve.js               # Development server
            └── package.json
```

## Architecture

### App Shell (Host Application)
- **Location:** `frontend/shell/`
- **Purpose:** Main container that loads and orchestrates pilets
- **Provides:** Routing, shared dependencies, layout
- **Port:** 1234

### Pilets (Microfrontends)
- **Location:** `frontend/pilets/*`
- **Purpose:** Independent feature modules
- **Can be:** Deployed separately, versioned independently
- **Example:** Auth pilet provides `/login` and `/signup` routes

### Backend API
- **Location:** `backend/`
- **Tech:** Node.js + Express + SQLite + JWT
- **Port:** 3001

## Running the Application

### 1. Backend API
```bash
cd backend
npm install
npm start
```
Runs on: `http://localhost:3001`

### 2. App Shell
```bash
cd frontend/shell
npm install
npm start
```
Runs on: `http://localhost:1234`

### 3. Auth Pilet (Development)
```bash
cd frontend/pilets/auth-pilet
npm install
npm run build
npm run serve
```
Serves pilet on: `http://localhost:8080`

### 4. Open Browser
Visit: `http://localhost:1234`

## Routes

- `/` - Home page with login button (Shell)
- `/login` - Login page (Auth Pilet)
- `/signup` - Signup page (Auth Pilet)

## Deployment

### Deploy Shell
```bash
cd frontend/shell
npm run build
# Deploy dist/ folder to static hosting
```

### Deploy Auth Pilet
```bash
cd frontend/pilets/auth-pilet
npm run build
# Deploy dist/ folder to CDN or pilet feed service
```

### Deploy Backend
```bash
cd backend
# Deploy to Node.js hosting (AWS, Azure, Heroku, etc.)
```

## Key Features

✅ Microfrontend architecture with Piral
✅ React 18 with TypeScript
✅ JWT-based authentication
✅ Professional login/signup UI
✅ SQLite database
✅ Independent deployment of pilets
✅ Hot module reloading

## API Endpoints

### POST /api/auth/signup
Register new user
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

### POST /api/auth/login
Login user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### GET /api/auth/verify
Verify JWT token (requires Authorization header)

## Adding New Pilets

1. Create new folder: `frontend/pilets/my-pilet/`
2. Configure `package.json` to reference shell
3. Implement pilet in `src/index.tsx`
4. Build and serve
5. Shell will load it automatically

## Technology Stack

- **Frontend Framework:** React 18
- **Microfrontend:** Piral 0.15
- **Language:** TypeScript
- **Routing:** React Router v5
- **Backend:** Node.js + Express
- **Database:** SQLite
- **Authentication:** JWT
- **HTTP Client:** Axios
