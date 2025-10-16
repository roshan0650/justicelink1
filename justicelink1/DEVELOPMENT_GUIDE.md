# JusticeLink Development Guide

## Project Structure Overview

```
justicelink1/
├── frontend/                 # Next.js React application
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              # Landing page
│   │   │   ├── globals.css
│   │   │   ├── auth/
│   │   │   │   ├── login/page.tsx
│   │   │   │   └── signup/page.tsx
│   │   │   ├── problem-input/page.tsx # Issue submission
│   │   │   ├── legal-summary/page.tsx # AI analysis results
│   │   │   ├── lawyer-map/page.tsx    # Lawyer discovery
│   │   │   ├── resources/page.tsx     # Templates & blog
│   │   │   └── lawyer-signup/page.tsx # Lawyer registration
│   │   ├── components/               # Reusable components (to be created)
│   │   ├── lib/                      # Utilities & helpers (to be created)
│   │   └── types/                    # TypeScript types (to be created)
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── next.config.js
│   └── postcss.config.js
│
├── backend/                  # Node.js Express application
│   ├── src/
│   │   ├── server.ts                 # Main server file
│   │   ├── models/
│   │   │   ├── User.ts               # User schema
│   │   │   ├── Lawyer.ts             # Lawyer schema
│   │   │   └── Issue.ts              # Issue schema
│   │   ├── controllers/
│   │   │   └── authController.ts     # Auth logic
│   │   ├── routes/
│   │   │   └── auth.ts               # Auth routes
│   │   ├── middleware/
│   │   │   └── auth.ts               # JWT middleware
│   │   └── utils/                    # Helper functions (to be created)
│   ├── package.json
│   └── tsconfig.json
│
├── README.md                 # Project overview
├── DEVELOPMENT_GUIDE.md      # This file
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account (free tier available)
- OpenAI API key
- Google Maps API key

### Installation Steps

#### 1. Frontend Setup
```bash
cd frontend
npm install

# Create .env.local
cp .env.local.example .env.local

# Add your configuration
# NEXT_PUBLIC_API_URL=http://localhost:5000
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key

# Start development server
npm run dev
```
Frontend runs on `http://localhost:3000`

#### 2. Backend Setup
```bash
cd backend
npm install

# Create .env
cp .env.example .env

# Add your configuration
# MONGODB_URI=your_mongodb_connection_string
# OPENAI_API_KEY=your_key
# JWT_SECRET=your_secret_key

# Start development server
npm run dev
```
Backend runs on `http://localhost:5000`

## Completed Components

### Frontend Pages
✅ **Landing Page** (`/`) - Hero section, features, CTA
✅ **Login** (`/auth/login`) - User/Lawyer login
✅ **Signup** (`/auth/signup`) - User/Lawyer registration
✅ **Problem Input** (`/problem-input`) - Issue submission form
✅ **Legal Summary** (`/legal-summary`) - AI analysis results
✅ **Lawyer Map** (`/lawyer-map`) - Lawyer discovery with filters
✅ **Resources** (`/resources`) - Templates, blog, FAQ
✅ **Lawyer Signup** (`/lawyer-signup`) - Multi-step lawyer registration

### Backend Components
✅ **Server Setup** - Express with CORS, middleware
✅ **Database Models** - User, Lawyer, Issue schemas
✅ **Authentication** - JWT middleware, auth controller
✅ **Auth Routes** - Register, login, getMe endpoints

## Next Steps (Remaining Tasks)

### 3. Frontend - Problem Input & AI Analysis
- [ ] Create API service layer for AI analysis
- [ ] Integrate OpenAI API calls
- [ ] Add loading states and error handling
- [ ] Implement form validation
- [ ] Add toast notifications

### 4. Frontend - Legal Summary & Resources
- [ ] Connect to backend for issue data
- [ ] Implement PDF download functionality
- [ ] Add blog post fetching
- [ ] Create template download system

### 5. Frontend - Lawyer Map & Discovery
- [ ] Integrate Google Maps API
- [ ] Implement lawyer search/filtering
- [ ] Add lawyer profile modals
- [ ] Create booking/messaging interface

### 6. Backend - Authentication & User Management
- [ ] Implement user profile endpoints
- [ ] Add profile update functionality
- [ ] Create password reset flow
- [ ] Add email verification

### 7. Backend - Database Schema & Models
- [ ] Create Response model for lawyer responses
- [ ] Add Review/Rating model
- [ ] Create Chat/Message model
- [ ] Add Notification model

### 8. Backend - AI Integration & API Routes
- [ ] Create AI analysis service
- [ ] Implement template generation
- [ ] Add issue classification logic
- [ ] Create lawyer matching algorithm

### 9. Backend - Lawyer Discovery & Matching
- [ ] Implement lawyer search endpoints
- [ ] Add filtering and sorting
- [ ] Create recommendation engine
- [ ] Add location-based search

### 10. Integration & Testing
- [ ] Connect frontend to backend APIs
- [ ] Implement error handling
- [ ] Add unit tests
- [ ] Create integration tests
- [ ] Test real-time notifications

### 11. Deployment & Documentation
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render/Railway
- [ ] Set up MongoDB Atlas
- [ ] Create API documentation
- [ ] Write deployment guide

## Key Features to Implement

### AI Analysis Engine
- Text classification for legal categories
- Issue summarization
- Relevant law extraction
- Next steps recommendation

### Lawyer Matching
- Location-based search
- Specialization filtering
- Availability matching
- Pro bono filtering

### Real-time Features
- Chat between users and lawyers
- Notifications for new responses
- Live status updates

### Security
- JWT authentication
- Password hashing with bcryptjs
- CORS configuration
- Input validation

## API Endpoints (To Be Implemented)

### Authentication
- `POST /api/auth/register` - Register user/lawyer
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update profile
- `POST /api/users/issues` - Create issue
- `GET /api/users/issues` - Get user's issues

### Lawyers
- `GET /api/lawyers` - List lawyers
- `GET /api/lawyers/:id` - Get lawyer details
- `PUT /api/lawyers/:id` - Update lawyer profile
- `POST /api/lawyers/register` - Register lawyer

### Issues
- `GET /api/issues` - List issues
- `POST /api/issues` - Create issue
- `GET /api/issues/:id` - Get issue details
- `PUT /api/issues/:id` - Update issue

### AI
- `POST /api/ai/analyze` - Analyze legal issue
- `POST /api/ai/generate-template` - Generate template

## Development Tips

1. **Use TypeScript** - Leverage type safety throughout
2. **Component Reusability** - Create reusable UI components
3. **Error Handling** - Implement proper error boundaries
4. **Loading States** - Show loading indicators for async operations
5. **Validation** - Validate on both frontend and backend
6. **Testing** - Write tests as you develop
7. **Documentation** - Keep code well-documented

## Useful Commands

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start dev server with nodemon
npm run build    # Compile TypeScript
npm run start    # Start production server
npm run test     # Run tests
```

## Troubleshooting

### MongoDB Connection Issues
- Verify connection string in .env
- Check IP whitelist in MongoDB Atlas
- Ensure database name is correct

### API Not Responding
- Check backend is running on port 5000
- Verify CORS configuration
- Check API endpoint paths

### Frontend Build Issues
- Clear .next folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node version: `node --version`

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [OpenAI API Reference](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Last Updated**: October 2024
**Status**: MVP Development Phase

