# Authentication Backend API

Node.js + Express + SQLite backend with JWT authentication.

## Features

- User registration (signup)
- User login with JWT tokens
- Token verification
- Password hashing with bcrypt
- SQLite database

## Setup

```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file:

```
PORT=3001
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRES_IN=24h
DATABASE_PATH=./database.sqlite
```

## Run

```bash
npm start
```

Server runs on `http://localhost:3001`

## API Endpoints

### POST /api/auth/signup
Register a new user.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

### POST /api/auth/login
Login user.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### GET /api/auth/verify
Verify JWT token.

**Headers:**
```
Authorization: Bearer <token>
```

### GET /health
Health check endpoint.
