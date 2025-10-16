# ⚙️ STEP 3: Deploy Backend to Render (10 minutes)

## 🎯 Goal
Deploy your Node.js backend API to Render so it's accessible on the internet.

---

## 📋 Prerequisites
- ✅ GitHub account
- ✅ Code pushed to GitHub: https://github.com/roshan0650/justicelink1
- ✅ Render account (we'll create it)
- ✅ MongoDB URI from Step 2
- ✅ Netlify Frontend URL from Step 1

---

## 🚀 Step-by-Step Instructions

### Step 1: Open Render
1. Go to: **https://render.com**
2. You should see the Render homepage

---

### Step 2: Sign Up with GitHub
1. Click: **"Sign up"** button
2. Choose: **"Sign up with GitHub"**
3. Click: **"Authorize render"**
4. GitHub will ask for permission - click: **"Authorize"**
5. You'll be redirected to Render

---

### Step 3: Create Web Service
1. Click: **"New +"** button (top right)
2. Choose: **"Web Service"**
3. You'll see your GitHub repositories

---

### Step 4: Select Your Repository
1. Find: **`roshan0650/justicelink1`**
2. Click: **"Connect"** button next to it
3. Render will show configuration options

---

### Step 5: Configure Service
Fill in these fields:

**Name**:
- Type: `justicelink-backend`

**Environment**:
- Select: `Node`

**Build Command**:
- Type: `cd backend && npm install && npm run build`

**Start Command**:
- Type: `cd backend && npm start`

**Plan**:
- Select: `Free`

---

### Step 6: Create Web Service
1. Click: **"Create Web Service"** button
2. Render will start building your backend
3. You'll see build logs

---

### Step 7: Wait for Initial Build
- Building takes 3-5 minutes
- You'll see logs showing progress
- When done, you'll see: **"Service is live"**

---

### Step 8: Add Environment Variables
This is important! Your backend needs these variables.

1. Go to: **"Environment"** tab
2. Click: **"Add Environment Variable"** button
3. Add these variables one by one:

**Variable 1:**
- Key: `NODE_ENV`
- Value: `production`
- Click: "Add"

**Variable 2:**
- Key: `PORT`
- Value: `5000`
- Click: "Add"

**Variable 3:**
- Key: `MONGODB_URI`
- Value: `[paste your MongoDB URI from Step 2]`
- Click: "Add"

**Variable 4:**
- Key: `JWT_SECRET`
- Value: `justicelink-secret-2024`
- Click: "Add"

**Variable 5:**
- Key: `CORS_ORIGIN`
- Value: `[paste your Netlify Frontend URL from Step 1]`
- Click: "Add"

**Optional Variables:**
- `OPENAI_API_KEY` (optional)
- `GOOGLE_MAPS_API_KEY` (optional)

---

### Step 9: Save Environment Variables
1. After adding all variables, click: **"Save"** button
2. Render will redeploy with the new variables
3. Takes 2-3 minutes

---

### Step 10: Get Your Backend URL
1. Look at the top of the page
2. You'll see a URL like: `https://justicelink-backend.onrender.com`
3. **Save this URL** - you'll need it for Step 4!

---

## ✅ Verification

### Check if Backend is Live:
1. Visit: `https://your-backend-url/api/health`
2. You should see: `{"status":"ok"}`
3. If you see this, your backend is working!

---

## 🎯 What You Get

After Step 3:
```
Backend URL: https://justicelink-backend.onrender.com
```

**Save this URL!** You'll need it for Step 4.

---

## 📊 Timeline
- Sign up: 1 min
- Create service: 1 min
- Configure: 2 min
- Build: 3-5 min
- Add variables: 2 min
- **Total: 10 minutes**

---

## 🎉 Step 3 Complete!

Your backend is now live on the internet!

**Next: STEP 4 - Connect Frontend to Backend**

---

## 🆘 Troubleshooting

### Problem: Build failed
**Solution**: Check the build logs
- Make sure build command is correct
- Make sure start command is correct
- Check for errors in logs

### Problem: Backend not responding
**Solution**:
- Check environment variables are set
- Check MongoDB URI is correct
- Check CORS_ORIGIN is set to your Netlify URL

### Problem: Can't find repository
**Solution**:
- Make sure you're signed in with GitHub
- Make sure code is pushed to GitHub
- Try disconnecting and reconnecting GitHub

### Problem: Health check returns error
**Solution**:
- Check MongoDB connection
- Check environment variables
- Check backend logs for errors

---

## 📝 Important Notes

- **Free tier**: Render free tier is perfect for development
- **Auto-sleep**: Free tier sleeps after 15 minutes of inactivity
- **Environment variables**: Keep them secret!
- **MongoDB URI**: Must be correct with password

---

**Ready? Start with Step 3 now! 🚀**

