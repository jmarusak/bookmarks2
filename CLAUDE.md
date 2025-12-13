# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bookmarks management application with a React frontend and Express backend. The backend uses Google Cloud Firestore as its database to store bookmark links.

## Architecture

### Monorepo Structure

The project is organized as a monorepo with two main applications:

- **client/**: React + Vite frontend application (ES modules)
- **server/**: Express.js backend API (CommonJS)

Each has its own `package.json` and `node_modules`.

### Backend (server/)

The backend follows a standard three-layer architecture:

1. **Routes** (`src/routes/`): Define API endpoints and map them to controllers
2. **Controllers** (`src/controllers/`): Handle HTTP request/response logic
3. **Services** (`src/services/`): Contain business logic and database operations

**Database**: Uses `@google-cloud/firestore` to connect to Google Cloud Firestore. The service layer initializes Firestore with project and database IDs from environment variables:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_DATABASE_ID`

**API Structure**: All API routes are prefixed with `/api/links`. The server uses CORS middleware to allow cross-origin requests from the frontend.

### Frontend (client/)

The frontend is a React SPA using React Router for navigation. It has three main pages:

- **ListPage**: Displays all bookmarks
- **InsertPage**: Form to create new bookmarks
- **DeletePage**: Interface to delete bookmarks

**API Communication**: The frontend makes requests to `http://localhost:3000/api/links` to interact with the backend.

**Data Model**: Each bookmark has:
- `link_id`: Unique identifier (ISO timestamp string)
- `url`: The bookmark URL
- `image`: URL to an image representing the bookmark
- `title`: Display title
- `category`: One of: blog, book, course, doc, github, medium, news, paper, recipe
- `description`: Text description
- `createdAt`: Timestamp

## Development Commands

### Server

```bash
cd server
npm install                    # Install dependencies
node src/server.js            # Run the server (port 3000)
```

**Environment Setup**: Create `server/.env` with:
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_DATABASE_ID=your-database-id
```

### Client

```bash
cd client
npm install                    # Install dependencies
npm run dev                   # Run dev server with hot reload
npm run build                 # Build for production
npm run lint                  # Run ESLint
npm run preview              # Preview production build locally
```

The dev server typically runs on `http://localhost:5173` (Vite default).

## Important Notes

- The server and client must be run separately in different terminals
- The client is configured to use ES modules (`"type": "module"`)
- The server uses CommonJS (`"type": "commonjs"`)
- Both applications need their dependencies installed independently
- The Firestore collection name is `links`
