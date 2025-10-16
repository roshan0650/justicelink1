# 🚀 DEPLOYMENT INSTRUCTIONS - Complete Setup

## ✅ Step 1: Git Repository Created Locally

Your code is now committed to Git locally. Next steps:

---

## 📋 STEP 2: Create GitHub Repository (5 minutes)

### 2.1 Create GitHub Account (if you don't have one)
1. Go to: **https://github.com/signup**
2. Sign up with email
3. Verify email
4. Create account

### 2.2 Create New Repository
1. Go to: **https://github.com/new**
2. Repository name: `justicelink`
3. Description: `AI-powered legal assistance platform`
4. Choose: **Public** (for free deployment)
5. Click "Create repository"

### 2.3 Get Your Repository URL
After creating, you'll see:
```
https://github.com/YOUR_USERNAME/justicelink.git
```

**Copy this URL - you'll need it!**

---

## 📤 STEP 3: Push Code to GitHub

Run these commands in PowerShell:

```powershell
cd c:\Users\donth\OneDrive\Desktop\justicelink1

# Add remote (replace YOUR_USERNAME)
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/YOUR_USERNAME/justicelink.git

# Rename branch to main
& "C:\Program Files\Git\bin\git.exe" branch -M main

# Push to GitHub
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

**You'll be prompted for GitHub credentials. Use:**
- Username: Your GitHub username
- Password: Your GitHub personal access token (create at https://github.com/settings/tokens)

---

## 🌐 STEP 4: Deploy Frontend to Netlify (5 minutes)

### 4.1 Create Netlify Account
1. Go to: **https://netlify.com**
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Netlify

### 4.2 Deploy Frontend
1. Click "Add new site" → "Import an existing project"
2. Select your `justicelink` repository
3. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Click "Deploy site"
5. **Wait 3-5 minutes for deployment**

### 4.3 Get Your Frontend URL
Netlify will show your live URL:
```
https://your-site-name.netlify.app
```

**Save this URL!**

---

## 💾 STEP 5: Create MongoDB Database (5 minutes)

### 5.1 Create MongoDB Account
1. Go to: **https://mongodb.com/cloud/atlas**
2. Click "Sign up"
3. Create account
4. Verify email

### 5.2 Create Cluster
1. Click "Create a Deployment"
2. Choose "M0 Sandbox" (free tier)
3. Select your region (closest to you)
4. Click "Create Deployment"
5. **Wait 2-3 minutes for cluster creation**

### 5.3 Get Connection String
1. Click "Drivers"
2. Copy the connection string
3. Replace `<password>` with your database password
4. It should look like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
   ```

**Save this connection string!**

---

## ⚙️ STEP 6: Deploy Backend to Render (10 minutes)

### 6.1 Create Render Account
1. Go to: **https://render.com**
2. Click "Sign up"
3. Choose "Sign up with GitHub"
4. Authorize Render

### 6.2 Create Web Service
1. Click "New +" → "Web Service"
2. Select your `justicelink` repository
3. Configure:
   - **Name**: `justicelink-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install && npm run build`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free
4. Click "Create Web Service"
5. **Wait 3-5 minutes for deployment**

### 6.3 Add Environment Variables
1. Go to "Environment" tab
2. Add these variables:
   ```
   NODE_ENV = production
   PORT = 5000
   MONGODB_URI = [paste your MongoDB connection string]
   JWT_SECRET = justicelink-secret-key-2024
   OPENAI_API_KEY = sk-xxxxx (optional for now)
   GOOGLE_MAPS_API_KEY = AIzaxxxxx (optional for now)
   CORS_ORIGIN = [paste your Netlify Frontend URL]
   ```
3. Click "Save"

### 6.4 Get Your Backend URL
Render will show your live URL:
```
https://justicelink-backend.onrender.com
```

**Save this URL!**

---

## 🔗 STEP 7: Connect Frontend to Backend (2 minutes)

### 7.1 Update Frontend Environment
1. Create file: `frontend/.env.local`
2. Add this line:
   ```
   NEXT_PUBLIC_API_URL=https://justicelink-backend.onrender.com
   ```

### 7.2 Push Changes to GitHub
```powershell
cd c:\Users\donth\OneDrive\Desktop\justicelink1

& "C:\Program Files\Git\bin\git.exe" add .
& "C:\Program Files\Git\bin\git.exe" commit -m "Add backend API URL"
& "C:\Program Files\Git\bin\git.exe" push
```

### 7.3 Netlify Auto-Redeploys
Netlify will automatically redeploy your frontend with the new environment variable!

---

## ✅ STEP 8: Verify Everything Works

### Test Frontend:
1. Visit your Netlify URL
2. Check all pages load
3. Test responsive design

### Test Backend:
1. Visit: `https://justicelink-backend.onrender.com/api/health`
2. Should return: `{"status":"ok"}`

### Test Database:
1. Try user registration on frontend
2. Check MongoDB Atlas for new user

---

## 🎯 Your Live URLs

After all steps:

```
Frontend:  https://your-site-name.netlify.app
Backend:   https://justicelink-backend.onrender.com
Database:  MongoDB Atlas (cloud)
```

---

## 📊 Deployment Checklist

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Frontend deployed to Netlify
- [ ] MongoDB Atlas cluster created
- [ ] Backend deployed to Render
- [ ] Environment variables configured
- [ ] Frontend connected to backend
- [ ] All tests passing

---

## 🆘 Troubleshooting

### Frontend not loading?
- Check Netlify build logs
- Verify base directory is `frontend`
- Check build command

### Backend not responding?
- Check Render logs
- Verify environment variables
- Check MongoDB connection string

### Database connection failed?
- Verify MongoDB URI is correct
- Check IP whitelist in MongoDB Atlas
- Verify username/password

---

## 🎉 Done!

Your full-stack JusticeLink is now live!

**Share your Netlify URL with the world! 🚀**

---

**Next Steps:**
1. Test all features
2. Share with friends/family
3. Get feedback
4. Plan Phase 2 features

---

**Happy Deploying! 🎉**

