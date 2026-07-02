# Blogging Website

A full-stack blogging platform where users can create, publish, and manage blog posts. Built with modern web technologies and featuring a clean, intuitive interface.

## Live Demo

[https://blogging-website-ten-lime.vercel.app](https://blogging-website-ten-lime.vercel.app)

## Tech Stack

**Frontend:**
- React with TypeScript
- Modern UI/UX
- Responsive Design

**Backend:**
- Node.js/Express
- RESTful API
- JWT Authentication

**Shared:**
- Common package for shared types and utilities
- TypeScript for type safety

## Features

- **User Authentication**: Secure signup and login
- **Create & Edit Posts**: Rich text editor for creating blog content
- **Publish & Draft**: Save posts as drafts or publish them
- **Categories & Tags**: Organize content efficiently
- **Comment System**: Engage with readers through comments
- **User Profiles**: Manage your profile and view your posts
- **Search**: Find posts by title, content, or author
- **Responsive Design**: Optimized for all screen sizes

## Project Structure

```
blogging-website/
├── backend/             # Express backend server
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── models/     # Database models
│   │   ├── routes/     # API routes
│   │   ├── middleware/ # Auth & validation
│   │   └── utils/      # Helper functions
│   └── package.json
├── frontend/           # React frontend
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Application pages
│   │   ├── hooks/      # Custom React hooks
│   │   ├── services/   # API integration
│   │   └── utils/      # Helper functions
│   └── package.json
└── common/             # Shared types and utilities
    └── src/
        └── types/      # TypeScript definitions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB or PostgreSQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pandey-prince/blogging-website.git
cd blogging-website
```

2. Install dependencies for all packages:

Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd ../frontend
npm install
```

Common:
```bash
cd ../common
npm install
```

3. Set up environment variables:

Backend `.env`:
```env
DATABASE_URL="your_database_connection_string"
JWT_SECRET="your_jwt_secret"
PORT=5000
```

Frontend `.env`:
```env
VITE_API_URL="http://localhost:5000"
```

4. Run database migrations (if using Prisma):
```bash
cd backend
npx prisma migrate dev
```

5. Start the development servers:

Backend (from backend directory):
```bash
npm run dev
```

Frontend (from frontend directory):
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post (authenticated)
- `PUT /api/posts/:id` - Update post (authenticated)
- `DELETE /api/posts/:id` - Delete post (authenticated)

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile (authenticated)

## Deployment

**Backend**: Deploy to platforms like Railway, Render, or Heroku
**Frontend**: Deploy to Vercel, Netlify, or Cloudflare Pages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
