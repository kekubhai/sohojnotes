# সহজNotes - সহজPath

A comprehensive note-taking and sharing platform built with modern web technologies.

## 🌟 Features

- **Note Management**: Create, edit, organize, and share notes
- **Social Features**: Explore community notes, connect with peers
- **Deals & Opportunities**: Discover educational deals and opportunities
- **Dashboard**: Personal dashboard with analytics and insights
- **Modern UI**: Built with Next.js 15, TypeScript, and Tailwind CSS v4
- **Responsive Design**: Works seamlessly on all devices

## 🏗️ Monorepo Structure

This project is organized as a monorepo with separate frontend and backend applications:

```
sohojnotes/
├── frontend/          # Next.js 15 + TypeScript + Tailwind CSS
├── backend/           # Node.js + Express + TypeScript
├── package.json       # Root workspace configuration
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kekubhai/sohojnotes
   cd sohojnotes
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development servers**
   ```bash
   npm run dev
   ```

This will start both:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Frontend (Next.js 15)

Located in the `frontend/` directory.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion

### Key Features
- Server-side rendering with Next.js App Router
- Type-safe components with TypeScript
- Modern CSS with Tailwind v4
- Responsive design with mobile-first approach
- Component-based architecture

### Scripts
```bash
cd frontend
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 🔧 Backend (Node.js + Express)

Located in the `backend/` directory.

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **Environment**: dotenv

### API Endpoints
- `GET /` - Server status
- `GET /api/health` - Health check
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create note
- `GET /api/notes/:id` - Get specific note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

### Scripts
```bash
cd backend
npm run dev       # Start development server with hot reload
npm run build     # Compile TypeScript to JavaScript
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 🛠️ Development

### Root Level Commands

```bash
# Start both frontend and backend in development mode
npm run dev

# Build both applications
npm run build

# Install dependencies for all workspaces
npm run install:all

# Run linting for both applications
npm run lint

# Clean all build artifacts and node_modules
npm run clean
```

### Environment Variables

#### Backend (.env)
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## 🏗️ Architecture

### Frontend Structure
```
frontend/src/
├── app/                 # Next.js App Router pages
│   ├── dashboard/       # Dashboard page
│   ├── explore/         # Social explore page
│   ├── deals/           # Deals and opportunities
│   ├── find-notes/      # Note discovery
│   └── requests/        # Note requests
├── components/          # Reusable components
│   ├── layout/          # Layout components (header, footer, sidebar)
│   ├── sections/        # Page sections
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
```

### Backend Structure
```
backend/src/
├── index.ts             # Main server file
├── routes/              # API routes (planned)
├── controllers/         # Route handlers (planned)
├── models/              # Data models (planned)
├── middleware/          # Custom middleware (planned)
└── utils/               # Utility functions (planned)
```

## 🎨 Design System

### Colors
- Primary: Blue variants for main actions
- Secondary: Gray variants for secondary elements
- Accent: Green for success states
- Background: White/Gray for clean interface

### Typography
- Headings: Various sizes with proper hierarchy
- Body text: Readable font sizes
- Bengali support: Proper font rendering for Bengali text (সহজPath)

### Components
- Consistent spacing using Tailwind utilities
- Responsive design patterns
- Accessible form controls
- Interactive elements with hover states

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

### Backend Deployment
The backend can be deployed on:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## ✨ Contributors

#### Thanks to all the wonderful contributors 💖

<a href="https://github.com/kekubhai/sohojnotes/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kekubhai/sohojnotes" />
</a>

#### See full list of contributor contribution [Contribution Graph](https://github.com/kekubhai/sohojnotes/graphs/contributors) 



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ for the education community
