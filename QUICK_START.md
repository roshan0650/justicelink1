# JusticeLink - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Node.js
Download and install Node.js 18+ from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Clone/Setup Project
```bash
cd c:\Users\donth\OneDrive\Desktop\justicelink1
```

### Step 3: Setup Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

Start frontend:
```bash
npm run dev
```
✅ Frontend running at `http://localhost:3000`

### Step 4: Setup Backend

In a new terminal:
```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/justicelink
JWT_SECRET=your_secret_key_here
OPENAI_API_KEY=your_openai_key
GOOGLE_MAPS_API_KEY=your_key
```

Start backend:
```bash
npm run dev
```
✅ Backend running at `http://localhost:5000`

### Step 5: Test the Application

1. Open `http://localhost:3000` in your browser
2. Click "Get Help Now" to test the problem input page
3. Click "Join as a Lawyer" to test lawyer signup
4. Click "Login" to test authentication

## 📋 What's Included

### Frontend Pages
- ✅ Landing Page with hero section
- ✅ User/Lawyer Login & Signup
- ✅ Problem Input Form
- ✅ AI Legal Summary Display
- ✅ Lawyer Discovery Map
- ✅ Resources & Templates Hub
- ✅ Lawyer Registration (Multi-step)

### Backend Features
- ✅ Express Server with CORS
- ✅ MongoDB Connection
- ✅ User Authentication (JWT)
- ✅ Database Models (User, Lawyer, Issue)
- ✅ Auth Routes & Controllers

## 🔑 Get API Keys

### MongoDB Atlas (Free)
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Get connection string
5. Add to `.env` as `MONGODB_URI`

### OpenAI API
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up and create API key
3. Add to `.env` as `OPENAI_API_KEY`

### Google Maps API
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create new project
3. Enable Maps API
4. Create API key
5. Add to `.env.local` and `.env`

## 📁 Project Structure

```
justicelink1/
├── frontend/          # React/Next.js app
│   └── src/app/       # All pages here
├── backend/           # Node.js/Express API
│   └── src/           # Server code
├── README.md          # Full documentation
└── DEVELOPMENT_GUIDE.md
```

## 🛠️ Common Commands

### Frontend
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run lint     # Check code quality
```

### Backend
```bash
cd backend
npm run dev      # Start with auto-reload
npm run build    # Compile TypeScript
npm run start    # Run compiled code
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (frontend)
npx kill-port 3000

# Kill process on port 5000 (backend)
npx kill-port 5000
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### MongoDB Connection Error
- Check connection string in `.env`
- Verify IP is whitelisted in MongoDB Atlas
- Ensure database exists

### API Not Responding
- Check backend is running: `http://localhost:5000/api/health`
- Verify CORS is enabled
- Check API endpoint in frontend

## 📚 Next Steps

1. **Test Authentication**
   - Go to `/auth/signup` and create account
   - Go to `/auth/login` and sign in

2. **Test Problem Input**
   - Go to `/problem-input`
   - Submit a legal issue
   - See AI analysis on `/legal-summary`

3. **Explore Lawyer Discovery**
   - Go to `/lawyer-map`
   - Filter by specialization
   - View lawyer profiles

4. **Check Resources**
   - Go to `/resources`
   - Browse templates and blog

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel
```

### Backend (Render)
1. Push code to GitHub
2. Connect to Render
3. Set environment variables
4. Deploy

## 📞 Support

- Check `DEVELOPMENT_GUIDE.md` for detailed info
- Review `README.md` for full documentation
- Check backend logs for API errors
- Check browser console for frontend errors

## ✨ Features to Build Next

- [ ] AI legal analysis integration
- [ ] Real-time chat between users and lawyers
- [ ] Lawyer verification system
- [ ] Payment integration
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced analytics

---

**Happy Coding! 🎉**

For detailed information, see `DEVELOPMENT_GUIDE.md` and `README.md`

