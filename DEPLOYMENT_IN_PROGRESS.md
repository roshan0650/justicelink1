# 🚀 DEPLOYMENT IN PROGRESS

## ⏱️ Timeline Started

**Start Time**: Now  
**Expected Completion**: 22 minutes

---

## 📋 STEP 1: Deploy Frontend to Netlify (5 min)

### What You Need to Do:

1. **Open**: https://netlify.com
2. **Sign up** with GitHub (if you don't have account)
3. **Click**: "Add new site" → "Import an existing project"
4. **Select**: `roshan0650/justicelink1`
5. **Configure**:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Click**: "Deploy site"
7. **Wait**: 3-5 minutes for deployment

### What You'll Get:
```
Frontend URL: https://xxx.netlify.app
```

**⏱️ Time: 5 minutes**

---

## 💾 STEP 2: Create MongoDB Database (5 min)

### What You Need to Do:

1. **Open**: https://mongodb.com/cloud/atlas
2. **Sign up** (free account)
3. **Create account** and verify email
4. **Click**: "Create a Deployment"
5. **Choose**: "M0 Sandbox" (free tier)
6. **Select**: Your region (closest to you)
7. **Click**: "Create Deployment"
8. **Wait**: 2-3 minutes
9. **Click**: "Drivers"
10. **Copy** the connection string
11. **Replace** `<password>` with your database password

### What You'll Get:
```
MongoDB URI: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**⏱️ Time: 5 minutes**

---

## ⚙️ STEP 3: Deploy Backend to Render (10 min)

### What You Need to Do:

1. **Open**: https://render.com
2. **Sign up** with GitHub
3. **Click**: "New +" → "Web Service"
4. **Select**: `roshan0650/justicelink1`
5. **Configure**:
   - Name: `justicelink-backend`
   - Environment: `Node`
   - Build Command: `cd backend && npm install && npm run build`
   - Start Command: `cd backend && npm start`
   - Plan: Free
6. **Click**: "Create Web Service"
7. **Wait**: 1-2 minutes for initial setup
8. **Go to**: "Environment" tab
9. **Add** these variables:
   ```
   NODE_ENV = production
   PORT = 5000
   MONGODB_URI = [paste your MongoDB URI from Step 2]
   JWT_SECRET = justicelink-secret-2024
   CORS_ORIGIN = [paste your Netlify Frontend URL from Step 1]
   ```
10. **Click**: "Save"
11. **Wait**: 3-5 minutes for deployment

### What You'll Get:
```
Backend URL: https://xxx.onrender.com
```

**⏱️ Time: 10 minutes**

---

## 🔗 STEP 4: Connect Frontend to Backend (2 min)

### What You Need to Do:

1. **Create** file: `frontend/.env.local`
2. **Add** this line:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```
3. **Run** in PowerShell:
   ```powershell
   cd c:\Users\donth\OneDrive\Desktop\justicelink1
   & "C:\Program Files\Git\bin\git.exe" add .
   & "C:\Program Files\Git\bin\git.exe" commit -m "Add backend API URL"
   & "C:\Program Files\Git\bin\git.exe" push
   ```
4. **Wait**: 2-3 minutes for Netlify to auto-redeploy

**⏱️ Time: 2 minutes**

---

## ✅ VERIFICATION

After all steps:

### Test Frontend:
- [ ] Visit your Netlify URL
- [ ] All pages load
- [ ] Responsive design works

### Test Backend:
- [ ] Visit: `https://your-backend-url/api/health`
- [ ] Returns: `{"status":"ok"}`

### Test Database:
- [ ] Try user registration
- [ ] Check MongoDB for new user

---

## 🎯 YOUR FINAL URLS

```
Frontend:  https://your-site-name.netlify.app
Backend:   https://justicelink-backend.onrender.com
Database:  MongoDB Atlas (cloud)
```

---

## 📊 Progress Tracker

- [ ] STEP 1: Frontend deployed to Netlify
- [ ] STEP 2: MongoDB database created
- [ ] STEP 3: Backend deployed to Render
- [ ] STEP 4: Frontend connected to backend
- [ ] ✅ FULL STACK LIVE!

---

## 🎉 READY?

**Start with STEP 1 now!**

Follow each step carefully and your website will be LIVE in 22 minutes!

---

**Let's Go! 🚀**

