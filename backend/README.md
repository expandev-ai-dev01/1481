# Old Money Barbershop - Backend API

Backend REST API for the Old Money Barbershop Scheduling System.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- In-memory data storage (no database)
- Modular and scalable structure

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Installation

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

Server will start at `http://localhost:3000`

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## Testing

```bash
npm test
```

## API Documentation

API endpoints are available at:
- External (public): `/api/v1/external/*`
- Internal (authenticated): `/api/v1/internal/*`

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
└── server.ts         # Application entry point
```

## License

ISC