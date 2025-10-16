# 🚀 Full Stack Deployment Guide - JusticeLink

## Complete Setup: Frontend + Backend + Database

This guide will help you deploy the entire JusticeLink application to production.

---

## 📋 Prerequisites

Before starting, you need:
- ✅ GitHub account (free at github.com)
- ✅ Netlify account (free at netlify.com)
- ✅ Render account (free at render.com)
- ✅ MongoDB Atlas account (free at mongodb.com/cloud/atlas)

---

## 🎯 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Your Users                               │
└────────────────────────┬────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
   ┌─────────┐      ┌─────────┐      ┌──────────┐
   │ Netlify │      │ Render  │      │ MongoDB  │
   │Frontend │◄────►│Backend  │◄────►│  Atlas   │
   │(React)  │      │(Node.js)│      │(Database)│
   └─────────┘      └─────────┘      └──────────┘
```

---

## ⏱️ Time Required

- **Frontend**: 5 minutes
- **Backend**: 10 minutes
- **Database**: 5 minutes
- **Total**: ~20 minutes

---

## STEP 1: Deploy Frontend to Netlify (5 minutes)

### 1.1 Push Frontend to GitHub

```bash
cd c:\Users\donth\OneDrive\Desktop\justicelink1
git init
git add .
git commit -m "JusticeLink - Full Stack"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/justicelink.git
git push -u origin main
```

### 1.2 Connect to Netlify

1. Go to: https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your `justicelink` repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

### 1.3 Get Your Frontend URL

Netlify will give you a URL like:
```
https://your-site-name.netlify.app
```

**Save this URL - you'll need it for the backend!**

---

## STEP 2: Set Up MongoDB Atlas (5 minutes)

### 2.1 Create MongoDB Account

1. Go to: https://mongodb.com/cloud/atlas
2. Sign up (free)
3. Create a new project

### 2.2 Create a Cluster

1. Click "Create a Deployment"
2. Choose "M0 Sandbox" (free tier)
3. Select your region (closest to you)
4. Click "Create Deployment"

### 2.3 Get Connection String

1. Click "Drivers"
2. Copy the connection string
3. Replace `<password>` with your database password
4. It should look like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
   ```

**Save this - you'll need it for the backend!**

---

## STEP 3: Deploy Backend to Render (10 minutes)

### 3.1 Push Backend to GitHub

The backend is already in your repository, so it's ready!

### 3.2 Create Render Account

1. Go to: https://render.com
2. Sign up with GitHub
3. Authorize Render

### 3.3 Create New Web Service

1. Click "New +" → "Web Service"
2. Select your `justicelink` repository
3. Configure:
   - **Name**: `justicelink-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install && npm run build`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

### 3.4 Add Environment Variables

Click "Environment" and add:

```
NODE_ENV = production
PORT = 5000
MONGODB_URI = mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
JWT_SECRET = your-secret-key-here-make-it-long-and-random
OPENAI_API_KEY = sk-xxxxx (get from openai.com)
GOOGLE_MAPS_API_KEY = AIzaxxxxx (get from google cloud)
CORS_ORIGIN = https://your-site-name.netlify.app
```

### 3.5 Deploy

1. Click "Create Web Service"
2. Render will automatically deploy
3. Wait 2-3 minutes for deployment
4. You'll get a URL like: `https://justicelink-backend.onrender.com`

**Save this URL - you'll need it for the frontend!**

---

## STEP 4: Connect Frontend to Backend

### 4.1 Update Frontend Environment

1. Go to your project
2. Create `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=https://justicelink-backend.onrender.com
```

### 4.2 Update Backend CORS

The backend is already configured to accept requests from your Netlify URL!

### 4.3 Redeploy Frontend

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Add backend API URL"
   git push
   ```

2. Netlify will automatically redeploy

---

## ✅ Verification Checklist

- [ ] Frontend deployed to Netlify
- [ ] Backend deployed to Render
- [ ] MongoDB Atlas cluster created
- [ ] Environment variables configured
- [ ] Frontend can reach backend API
- [ ] All pages load correctly
- [ ] Authentication works
- [ ] Database connections work

---

## 🧪 Test Your Deployment

### Test Frontend:
1. Visit your Netlify URL
2. Check all pages load
3. Test responsive design

### Test Backend:
1. Visit: `https://your-backend-url/api/health`
2. Should return: `{"status":"ok"}`

### Test Database:
1. Try user registration
2. Check MongoDB Atlas for new user

---

## 🔑 API Keys You Need

### OpenAI API Key
1. Go to: https://platform.openai.com/api-keys
2. Create new API key
3. Copy and save

### Google Maps API Key
1. Go to: https://console.cloud.google.com
2. Create new project
3. Enable Maps API
4. Create API key
5. Copy and save

---

## 📊 Deployment Status

| Component | Platform | Status |
|-----------|----------|--------|
| Frontend | Netlify | ✅ Ready |
| Backend | Render | ✅ Ready |
| Database | MongoDB Atlas | ✅ Ready |

---

## 🆘 Troubleshooting

### Frontend not loading:
- Check Netlify build logs
- Verify environment variables
- Check CORS settings

### Backend not responding:
- Check Render logs
- Verify environment variables
- Check MongoDB connection

### Database connection failed:
- Verify MongoDB URI
- Check IP whitelist in MongoDB Atlas
- Verify credentials

---

## 📞 Support

- **Netlify**: https://docs.netlify.com
- **Render**: https://render.com/docs
- **MongoDB**: https://docs.mongodb.com/atlas

---

## 🎉 You're Done!

Your full-stack JusticeLink application is now live!

**Share your Netlify URL with the world! 🚀**

---

**Next Steps:**
1. Test all features
2. Get user feedback
3. Plan Phase 2 features
4. Monitor performance

---

**Happy Deploying! 🎉**

