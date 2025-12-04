# Complete Setup Guide - Piral Microfrontend Application

## Problem Analysis

The issue was **React Router version incompatibility**:
- Piral 0.15.9 requires **React Router v5**
- We had React Router v6 installed (breaking change)
- This caused routing context errors

## What Was Fixed

1. ✅ Downgraded React Router from v6 → v5
2. ✅ Fixed app shell to use proper `renderInstance()` API
3. ✅ Fixed layout to use `useLocation()` from React Router v5
4. ✅ Configured proper Piral feed service integration

## Architecture

```
├── backend/              # Node.js + Express + SQLite + JWT
├── frontend/             # Piral App Shell (Host Application)
└── pilets/
    └── auth-pilet/       # Authentication Microfrontend
```

## Running Instructions

### Terminal 1: Backend API
```bash
cd backend
npm install
npm start
```
✅ Runs on: `http://localhost:3001`

### Terminal 2: App Shell
```bash
cd frontend
npm start
```
✅ Runs on: `http://localhost:1234`

### Terminal 3: Auth Pilet (Development)
```bash
cd pilets/auth-pilet
npm install
npm start
```
✅ Connects to Piral debug feed on port 9000

## How It Works

1. **App Shell** starts on port 1234
2. **Piral Debug Feed** automatically starts on port 9000
3. **Auth Pilet** registers with the feed service
4. **App Shell** fetches pilets from feed and loads them dynamically

## User Flow

1. Visit `http://localhost:1234`
2. See home page with Login button
3. Click **Login** → Navigate to `/login`
4. Auth pilet serves the login page
5. Login form connects to backend API at port 3001

## Routes

- `/` - Home page with login button (App Shell)
- `/login` - Login page (Auth Pilet)
- `/signup` - Signup page (Auth Pilet)

## Key Files

### App Shell
- `frontend/src/index.tsx` - Entry point with `renderInstance()`
- `frontend/src/layout.tsx` - Layout with routing logic
- `frontend/src/App.tsx` - Home page component

### Auth Pilet
- `pilets/auth-pilet/src/index.tsx` - Pilet registration
- `pilets/auth-pilet/src/components/Login.tsx` - Login page
- `pilets/auth-pilet/src/components/Signup.tsx` - Signup page

### Backend
- `backend/src/server.js` - Express server
- `backend/src/routes/auth.js` - Auth endpoints
- `backend/src/config/database.js` - SQLite setup

## Troubleshooting

### If port 1234 is in use:
```bash
taskkill //F //IM node.exe
```

### If pilet doesn't load:
1. Make sure app shell is running first
2. Then start the pilet
3. Check browser console for errors

### If routing doesn't work:
- Verify React Router v5 is installed (not v6)
- Check `frontend/package.json` shows `react-router-dom: ^5.3.4`
