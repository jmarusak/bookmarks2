# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bookmarks management application with a Node.js/Express backend. The project is in early development stages with scaffolding in place for a three-layer architecture.

## Development Commands

### Server
```bash
cd server
npm install          # Install dependencies
node src/server.js   # Run the development server (port 3000)
```

## Architecture

The backend follows a three-layer MVC architecture:

- **Routes** (`server/src/routes/`): HTTP route definitions and request mapping
- **Controllers** (`server/src/controllers/`): Request/response handling and validation
- **Services** (`server/src/services/`): Business logic and data operations

Entry point: `server/src/server.js`

## Technical Stack

- **Runtime**: Node.js (CommonJS modules)
- **Framework**: Express 5.2.1
- **Main file**: `server/app.js` (defined in package.json)
- **Server entry**: `server/src/server.js` (actual implementation)

## Project Structure

```
server/
├── src/
│   ├── controllers/    # Request handlers
│   ├── routes/         # Route definitions
│   ├── services/       # Business logic
│   └── server.js       # Application entry point
└── package.json
```

Note: The controller, route, and service files exist but are currently empty placeholder files.
