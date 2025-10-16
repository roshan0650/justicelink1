# JusticeLink - Netlify Deployment Guide

## 🚀 Deploy to Netlify in 5 Minutes

### Option 1: Netlify Drop (Easiest - No Git Required)

**Step 1: Build the Frontend**
```bash
cd frontend
npm install
npm run build
```

**Step 2: Deploy to Netlify**
1. Go to: https://app.netlify.com/drop
2. Drag the `.next` folder to Netlify
3. Your site is live! 🎉

**That's it!** Your frontend is now live on Netlify.

---

### Option 2: GitHub + Netlify (Recommended)

**Step 1: Push to GitHub**
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial JusticeLink commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/justicelink.git
git push -u origin main
```

**Step 2: Connect to Netlify**
1. Go to: https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and authorize
5. Choose your `justicelink` repository

**Step 3: Configure Build Settings**
- **Base directory**: `frontend`
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.17.0

**Step 4: Set Environment Variables**
In Netlify dashboard:
1. Go to: Site settings → Build & deploy → Environment
2. Add these variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
   ```

**Step 5: Deploy**
- Click "Deploy site"
- Wait 2-3 minutes
- Your site is live! 🎉

---

## 🔧 Backend Deployment (Render)

### Deploy Backend to Render (Free)

**Step 1: Create Render Account**
1. Go to: https://render.com
2. Sign up with GitHub
3. Authorize Render

**Step 2: Create Web Service**
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `justicelink-backend`
   - **Environment**: `Node`
   - **Build command**: `npm install && npm run build`
   - **Start command**: `npm start`
   - **Plan**: Free

**Step 3: Set Environment Variables**
Add these in Render dashboard:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
GOOGLE_MAPS_API_KEY=your_key
CORS_ORIGIN=https://your-netlify-domain.netlify.app
```

**Step 4: Deploy**
- Click "Create Web Service"
- Wait 5-10 minutes for deployment
- Get your backend URL (e.g., `https://justicelink-backend.onrender.com`)

**Step 5: Update Frontend**
1. Go back to Netlify
2. Update environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://justicelink-backend.onrender.com
   ```
3. Trigger a redeploy

---

## 🗄️ Database Setup (MongoDB Atlas)

**Step 1: Create MongoDB Account**
1. Go to: https://mongodb.com/cloud/atlas
2. Sign up (free tier available)
3. Create a cluster

**Step 2: Get Connection String**
1. Click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password

**Step 3: Add to Render**
- Add `MONGODB_URI` environment variable in Render dashboard

---

## 📊 Full Deployment Architecture

```
┌─────────────────────────────────────────────────┐
│         JusticeLink Production Setup             │
├─────────────────────────────────────────────────┤
│                                                  │
│  Frontend (Netlify)                             │
│  https://justicelink.netlify.app                │
│  ├── Auto-deploys from GitHub                   │
│  ├── CDN distributed                            │
│  └── SSL/TLS included                           │
│           │                                      │
│           │ API Calls                           │
│           ▼                                      │
│  Backend (Render)                               │
│  https://justicelink-backend.onrender.com       │
│  ├── Node.js/Express                            │
│  ├── Auto-deploys from GitHub                   │
│  └── SSL/TLS included                           │
│           │                                      │
│           │ Database Queries                    │
│           ▼                                      │
│  Database (MongoDB Atlas)                       │
│  ├── Free tier (512MB)                          │
│  ├── Automatic backups                          │
│  └── SSL/TLS encryption                         │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## ✅ Deployment Checklist

### Before Deploying
- [ ] All code committed to GitHub
- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster created
- [ ] OpenAI API key obtained
- [ ] Google Maps API key obtained

### Frontend (Netlify)
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Site deployed successfully
- [ ] Frontend loads at https://your-domain.netlify.app

### Backend (Render)
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Environment variables set
- [ ] Service deployed successfully
- [ ] Health check passes: https://your-backend.onrender.com/api/health

### Integration
- [ ] Frontend can reach backend API
- [ ] CORS is configured correctly
- [ ] Database connection works
- [ ] Authentication endpoints respond

---

## 🔗 Useful Links

- **Netlify**: https://netlify.com
- **Render**: https://render.com
- **MongoDB Atlas**: https://mongodb.com/cloud/atlas
- **GitHub**: https://github.com

---

## 🆘 Troubleshooting

### Build Fails on Netlify
- Check Node version: Should be 18+
- Check build command: `npm run build`
- Check publish directory: `.next`
- View build logs in Netlify dashboard

### Backend Not Responding
- Check Render logs
- Verify environment variables
- Test health endpoint: `/api/health`
- Check CORS configuration

### Database Connection Error
- Verify MongoDB URI
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Frontend Can't Reach Backend
- Check `NEXT_PUBLIC_API_URL` environment variable
- Verify backend is running
- Check CORS headers
- Test API endpoint directly

---

## 📈 Monitoring

### Netlify
- View analytics: Site settings → Analytics
- Check build logs: Deploys → Build logs
- Monitor performance: Analytics → Performance

### Render
- View logs: Service → Logs
- Check metrics: Service → Metrics
- Monitor uptime: Service → Status

---

## 🎉 You're Live!

Once deployed:
1. Visit your Netlify domain
2. Test all pages
3. Try authentication
4. Submit a legal issue
5. Explore lawyer discovery

---

**Deployment Status**: Ready for Production ✅
**Estimated Setup Time**: 15-20 minutes
**Cost**: Free tier available for all services

**Happy Deploying! 🚀**

