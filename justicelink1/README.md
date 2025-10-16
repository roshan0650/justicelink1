# JusticeLink - AI-Powered Legal Assistance Platform

An innovative web-based platform that democratizes access to justice by combining AI-powered legal analysis with verified lawyer connections.

## 🚀 Project Overview

JusticeLink bridges the gap between citizens facing legal issues and professional legal experts. Users describe their problems in plain language, AI analyzes and classifies the issue, and they're connected with relevant lawyers.

### Key Features
- **AI Legal Analysis**: Instant classification and summarization of legal issues
- **Lawyer Discovery**: Find verified lawyers based on location and specialization
- **Legal Templates**: Download ready-to-use legal documents
- **Real-time Chat**: Direct communication with lawyers
- **Resource Hub**: Free legal education and awareness content

## 📋 Tech Stack

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Google Maps API
- **State Management**: Zustand
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: MongoDB
- **Authentication**: JWT
- **AI Integration**: OpenAI API
- **Validation**: Express Validator

### Deployment
- **Frontend**: Vercel
- **Backend**: Render/Railway
- **Database**: MongoDB Atlas

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account
- OpenAI API key
- Google Maps API key

### Frontend Setup

```bash
cd frontend
npm install
# or
yarn install

# Create .env.local from .env.local.example
cp .env.local.example .env.local

# Add your API keys to .env.local
# NEXT_PUBLIC_API_URL=http://localhost:5000
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# Run development server
npm run dev
# or
yarn dev
```

Frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
# or
yarn install

# Create .env from .env.example
cp .env.example .env

# Add your configuration to .env
# MONGODB_URI=your_mongodb_connection_string
# OPENAI_API_KEY=your_openai_key
# JWT_SECRET=your_jwt_secret

# Run development server
npm run dev
# or
yarn dev
```

Backend will be available at `http://localhost:5000`

## 📁 Project Structure

```
justicelink1/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.js
│
├── backend/
│   ├── src/
│   │   ├── server.ts
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## 🔑 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
OPENAI_API_KEY=your_key
GOOGLE_MAPS_API_KEY=your_key
```

## 📚 API Endpoints (To Be Implemented)

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `POST /api/users/issues` - Create legal issue

### Lawyers
- `GET /api/lawyers` - List lawyers
- `GET /api/lawyers/:id` - Get lawyer details
- `POST /api/lawyers/register` - Lawyer registration

### Issues
- `GET /api/issues` - List issues
- `POST /api/issues` - Create issue
- `GET /api/issues/:id` - Get issue details

### AI
- `POST /api/ai/analyze` - Analyze legal issue
- `POST /api/ai/generate-template` - Generate legal template

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test
```

## 📦 Building for Production

### Frontend
```bash
cd frontend
npm run build
npm start
```

### Backend
```bash
cd backend
npm run build
npm start
```

## 🚀 Deployment

### Deploy Frontend to Vercel
```bash
cd frontend
vercel deploy
```

### Deploy Backend to Render/Railway
Follow platform-specific deployment guides.

## 📖 Documentation

- [Frontend Architecture](./frontend/README.md) - To be created
- [Backend Architecture](./backend/README.md) - To be created
- [API Documentation](./docs/API.md) - To be created

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 📞 Support

For support, email support@justicelink.com or open an issue on GitHub.

## 🎯 Roadmap

- [ ] Core platform MVP
- [ ] AI legal analysis engine
- [ ] Lawyer verification system
- [ ] Real-time chat functionality
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Pro bono matching system

---

**Made with ❤️ to democratize access to justice**

