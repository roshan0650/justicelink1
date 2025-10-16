# JusticeLink - System Architecture

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│                    (Web Browser / Mobile)                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    HTTP/HTTPS (REST API)
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                    FRONTEND LAYER                                │
│                    (Next.js 14 + React)                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Pages: Landing, Auth, Issues, Lawyers, Resources       │  │
│  │  Components: Forms, Cards, Maps, Modals                 │  │
│  │  State: Zustand, Context API                            │  │
│  │  Styling: Tailwind CSS, Framer Motion                   │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    HTTP/HTTPS (REST API)
                             │
┌────────────────────────────▼────────────────────────────────────┐
│                    BACKEND LAYER                                 │
│                  (Node.js + Express.js)                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Routes:                                                 │  │
│  │  • /api/auth - Authentication                           │  │
│  │  • /api/users - User management                         │  │
│  │  • /api/lawyers - Lawyer management                     │  │
│  │  • /api/issues - Issue management                       │  │
│  │  • /api/ai - AI analysis                                │  │
│  └──────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Middleware:                                             │  │
│  │  • CORS, JSON parsing                                   │  │
│  │  • JWT authentication                                   │  │
│  │  • Error handling                                       │  │
│  │  • Request validation                                   │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
   ┌─────────┐          ┌─────────┐         ┌──────────┐
   │ MongoDB │          │ OpenAI  │         │ Google   │
   │ Atlas   │          │ API     │         │ Maps API │
   └─────────┘          └─────────┘         └──────────┘
```

---

## 📊 Data Flow Architecture

### User Registration Flow
```
User Input (Frontend)
    ↓
Form Validation (Client-side)
    ↓
POST /api/auth/register
    ↓
Backend Validation
    ↓
Hash Password (bcryptjs)
    ↓
Save to MongoDB
    ↓
Generate JWT Token
    ↓
Return Token + User Data
    ↓
Store Token (localStorage)
    ↓
Redirect to Dashboard
```

### Legal Issue Analysis Flow
```
User Submits Issue (Frontend)
    ↓
POST /api/issues
    ↓
Backend Receives Issue
    ↓
Save to MongoDB
    ↓
Call OpenAI API
    ↓
AI Analysis:
  • Classify issue type
  • Summarize problem
  • Extract relevant laws
  • Generate next steps
    ↓
Save Analysis to DB
    ↓
Return Results to Frontend
    ↓
Display Analysis
```

### Lawyer Discovery Flow
```
User Searches for Lawyers (Frontend)
    ↓
GET /api/lawyers?specialization=labor&location=delhi
    ↓
Backend Query MongoDB
    ↓
Filter by Specialization
    ↓
Filter by Location
    ↓
Sort by Rating
    ↓
Return Lawyer List
    ↓
Display on Map (Google Maps API)
    ↓
Show Lawyer Cards
```

---

## 🗄️ Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  userType: 'user' | 'lawyer',
  location: String,
  bio: String,
  profileImage: String,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Lawyer Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  barCouncilId: String (unique),
  specializations: [String],
  location: String,
  availability: 'online' | 'offline' | 'both',
  proBono: Boolean,
  rating: Number (0-5),
  reviews: Number,
  consultationFee: Number,
  languages: [String],
  experience: Number,
  isVerified: Boolean,
  verificationStatus: 'pending' | 'verified' | 'rejected',
  createdAt: Date,
  updatedAt: Date
}
```

### Issue Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  title: String,
  description: String,
  category: String,
  location: String,
  status: 'open' | 'in-progress' | 'resolved' | 'closed',
  aiAnalysis: {
    issueType: String,
    summary: String,
    relevantLaws: [String],
    nextSteps: [String],
    confidence: Number
  },
  assignedLawyer: ObjectId (ref: Lawyer),
  responses: [{
    lawyerId: ObjectId,
    message: String,
    createdAt: Date
  }],
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Authentication Flow

```
┌─────────────────────────────────────────────────────┐
│              JWT Authentication Flow                 │
└─────────────────────────────────────────────────────┘

1. User Registers/Logs In
   ↓
2. Backend Validates Credentials
   ↓
3. Backend Generates JWT Token
   Token = {
     id: userId,
     userType: 'user' | 'lawyer',
     exp: expirationTime
   }
   ↓
4. Token Sent to Frontend
   ↓
5. Frontend Stores Token (localStorage)
   ↓
6. Frontend Sends Token with Each Request
   Header: Authorization: Bearer <token>
   ↓
7. Backend Verifies Token
   ↓
8. If Valid: Process Request
   If Invalid: Return 401 Unauthorized
   ↓
9. Token Expires After 7 Days
   ↓
10. User Must Login Again
```

---

## 🔄 Component Architecture

### Frontend Component Hierarchy
```
App (Root)
├── Layout
│   ├── Navigation
│   └── Footer
├── Pages
│   ├── Landing
│   ├── Auth
│   │   ├── Login
│   │   └── Signup
│   ├── Issues
│   │   ├── ProblemInput
│   │   └── LegalSummary
│   ├── Lawyers
│   │   ├── LawyerMap
│   │   └── LawyerSignup
│   └── Resources
│       ├── Templates
│       ├── Blog
│       └── FAQ
└── Components
    ├── Forms
    ├── Cards
    ├── Modals
    ├── Buttons
    └── Loaders
```

---

## 🔌 API Endpoints Structure

### Authentication Endpoints
```
POST   /api/auth/register      - Register user/lawyer
POST   /api/auth/login         - Login user/lawyer
GET    /api/auth/me            - Get current user
POST   /api/auth/logout        - Logout user
POST   /api/auth/refresh       - Refresh token
```

### User Endpoints
```
GET    /api/users/:id          - Get user profile
PUT    /api/users/:id          - Update profile
DELETE /api/users/:id          - Delete account
GET    /api/users/:id/issues   - Get user's issues
```

### Lawyer Endpoints
```
GET    /api/lawyers            - List all lawyers
GET    /api/lawyers/:id        - Get lawyer profile
PUT    /api/lawyers/:id        - Update lawyer profile
POST   /api/lawyers/search     - Search lawyers
GET    /api/lawyers/:id/reviews - Get lawyer reviews
```

### Issue Endpoints
```
GET    /api/issues             - List issues
POST   /api/issues             - Create issue
GET    /api/issues/:id         - Get issue details
PUT    /api/issues/:id         - Update issue
DELETE /api/issues/:id         - Delete issue
POST   /api/issues/:id/respond - Lawyer responds
```

### AI Endpoints
```
POST   /api/ai/analyze         - Analyze legal issue
POST   /api/ai/template        - Generate template
POST   /api/ai/classify        - Classify issue type
```

---

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────────────────┐
│              Production Deployment                   │
└─────────────────────────────────────────────────────┘

Frontend (Vercel)
├── CDN Distribution
├── Automatic Deployments
├── SSL/TLS Encryption
└── Environment Variables

Backend (Render/Railway)
├── Docker Container
├── Auto-scaling
├── SSL/TLS Encryption
└── Environment Variables

Database (MongoDB Atlas)
├── Cluster Replication
├── Automated Backups
├── SSL/TLS Encryption
└── IP Whitelist

External Services
├── OpenAI API
├── Google Maps API
└── Stripe (future)
```

---

## 📈 Scalability Considerations

### Frontend Scaling
- CDN for static assets
- Code splitting by route
- Image optimization
- Caching strategies

### Backend Scaling
- Horizontal scaling with load balancer
- Database indexing
- Query optimization
- Caching layer (Redis)

### Database Scaling
- Sharding for large datasets
- Read replicas
- Backup strategy
- Monitoring and alerts

---

## 🔒 Security Architecture

```
┌─────────────────────────────────────────────────────┐
│           Security Layers                            │
└─────────────────────────────────────────────────────┘

Layer 1: Transport Security
├── HTTPS/TLS Encryption
└── Certificate Management

Layer 2: Authentication
├── JWT Tokens
├── Password Hashing (bcryptjs)
└── Session Management

Layer 3: Authorization
├── Role-Based Access Control
├── Permission Checks
└── Resource Ownership Validation

Layer 4: Data Protection
├── Input Validation
├── SQL Injection Prevention
├── XSS Protection
└── CSRF Protection

Layer 5: Infrastructure
├── Environment Variables
├── Secrets Management
├── Firewall Rules
└── DDoS Protection
```

---

## 📊 Performance Metrics

### Frontend Performance
- Page Load Time: < 2s
- Time to Interactive: < 3s
- Lighthouse Score: > 90
- Bundle Size: < 200KB

### Backend Performance
- API Response Time: < 200ms
- Database Query Time: < 100ms
- Throughput: > 1000 req/s
- Uptime: > 99.9%

---

**Architecture Version**: 1.0
**Last Updated**: October 2024
**Status**: Production Ready

