# 🚀 DEPLOY NOW - MAKE YOUR WEBSITE LIVE

## ✅ Step 1: Code is on GitHub!

Your code is now at:
```
https://github.com/roshan0650/justicelink1
```

**Check it:** Visit that URL and you should see all your files! ✅

---

## 📋 NEXT: Deploy to Netlify (Frontend)

### Step 1: Go to Netlify
1. Open: https://netlify.com
2. Click: "Sign up"
3. Choose: "Sign up with GitHub"
4. Click: "Authorize netlify"

### Step 2: Create New Site
1. Click: "Add new site"
2. Choose: "Import an existing project"
3. Select: "GitHub"
4. Find and click: `roshan0650/justicelink1`

### Step 3: Configure Build Settings
1. **Base directory**: `frontend`
2. **Build command**: `npm run build`
3. **Publish directory**: `.next`
4. Click: "Deploy site"

### Step 4: Wait for Deployment
- Netlify will build and deploy
- Takes 3-5 minutes
- You'll see a URL like: `https://xxx.netlify.app`

### Step 5: Save Your Frontend URL
```
Your Frontend URL: https://xxx.netlify.app
```

---

## 💾 NEXT: Create MongoDB Database

### Step 1: Go to MongoDB
1. Open: https://mongodb.com/cloud/atlas
2. Click: "Sign up"
3. Create account (free)

### Step 2: Create Cluster
1. Click: "Create a Deployment"
2. Choose: "M0 Sandbox" (free)
3. Select your region
4. Click: "Create Deployment"
5. Wait 2-3 minutes

### Step 3: Get Connection String
1. Click: "Drivers"
2. Copy the connection string
3. Replace `<password>` with your password
4. It looks like:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
   ```

### Step 4: Save Your MongoDB URI
```
Your MongoDB URI: mongodb+srv://...
```

---

## ⚙️ NEXT: Deploy Backend to Render

### Step 1: Go to Render
1. Open: https://render.com
2. Click: "Sign up"
3. Choose: "Sign up with GitHub"
4. Click: "Authorize render"

### Step 2: Create Web Service
1. Click: "New +"
2. Choose: "Web Service"
3. Select: `roshan0650/justicelink1`

### Step 3: Configure Service
1. **Name**: `justicelink-backend`
2. **Environment**: `Node`
3. **Build Command**: 
   ```
   cd backend && npm install && npm run build
   ```
4. **Start Command**: 
   ```
   cd backend && npm start
   ```
5. **Plan**: Free
6. Click: "Create Web Service"

### Step 4: Add Environment Variables
1. Go to: "Environment" tab
2. Add these variables:
   ```
   NODE_ENV = production
   PORT = 5000
   MONGODB_URI = [paste your MongoDB URI]
   JWT_SECRET = justicelink-secret-2024
   CORS_ORIGIN = [paste your Netlify Frontend URL]
   OPENAI_API_KEY = (optional)
   GOOGLE_MAPS_API_KEY = (optional)
   ```
3. Click: "Save"

### Step 5: Wait for Deployment
- Takes 3-5 minutes
- You'll see a URL like: `https://xxx.onrender.com`

### Step 6: Save Your Backend URL
```
Your Backend URL: https://xxx.onrender.com
```

---

## 🔗 NEXT: Connect Frontend to Backend

### Step 1: Create Environment File
1. Create file: `frontend/.env.local`
2. Add this line:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```

### Step 2: Push to GitHub
```powershell
cd c:\Users\donth\OneDrive\Desktop\justicelink1

& "C:\Program Files\Git\bin\git.exe" add .
& "C:\Program Files\Git\bin\git.exe" commit -m "Add backend API URL"
& "C:\Program Files\Git\bin\git.exe" push
```

### Step 3: Netlify Auto-Redeploys
- Netlify will automatically redeploy
- Takes 2-3 minutes
- Your frontend is now connected to backend!

---

## ✅ VERIFY EVERYTHING WORKS

### Test Frontend:
1. Visit your Netlify URL
2. Check all pages load
3. Test responsive design

### Test Backend:
1. Visit: `https://your-backend-url/api/health`
2. Should return: `{"status":"ok"}`

### Test Database:
1. Try user registration on frontend
2. Check MongoDB Atlas for new user

---

## 🎯 Your Final Live URLs

```
Frontend:  https://your-site-name.netlify.app
Backend:   https://justicelink-backend.onrender.com
Database:  MongoDB Atlas (cloud)
```

---

## 📊 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Frontend deployed to Netlify
- [ ] MongoDB cluster created
- [ ] Backend deployed to Render
- [ ] Environment variables configured
- [ ] Frontend connected to backend
- [ ] All tests passing

---

## 🎉 Done!

Your full-stack JusticeLink is now live!

**Share your Netlify URL with the world! 🚀**

---

**Happy Deploying! 🎉**

