# 📤 STEP 1: Deploy Frontend to Netlify (5 minutes)

## 🎯 Goal
Deploy your Next.js frontend to Netlify so it's accessible on the internet.

---

## 📋 Prerequisites
- ✅ GitHub account
- ✅ Code pushed to GitHub: https://github.com/roshan0650/justicelink1
- ✅ Netlify account (we'll create it)

---

## 🚀 Step-by-Step Instructions

### Step 1: Open Netlify
1. Go to: **https://netlify.com**
2. You should see the Netlify homepage

---

### Step 2: Sign Up with GitHub
1. Click: **"Sign up"** button (top right)
2. Choose: **"Sign up with GitHub"**
3. Click: **"Authorize netlify"**
4. GitHub will ask for permission - click: **"Authorize netlify"**
5. You'll be redirected to Netlify

---

### Step 3: Create New Site
1. Click: **"Add new site"** button
2. Choose: **"Import an existing project"**
3. Select: **"GitHub"**
4. You'll see a list of your repositories

---

### Step 4: Select Your Repository
1. Find: **`roshan0650/justicelink1`**
2. Click on it to select it
3. Netlify will show configuration options

---

### Step 5: Configure Build Settings
This is the most important part!

**Base directory**: 
- Click the field
- Type: `frontend`

**Build command**:
- Click the field
- Type: `npm run build`

**Publish directory**:
- Click the field
- Type: `.next`

**Environment variables** (optional for now):
- Leave empty for now

---

### Step 6: Deploy
1. Click: **"Deploy site"** button
2. Netlify will start building your site
3. You'll see a progress bar

---

### Step 7: Wait for Deployment
- Building takes 3-5 minutes
- You'll see logs showing the build progress
- When done, you'll see: **"Site is live"**

---

### Step 8: Get Your Frontend URL
1. Look for the site name (something like: `xxx-yyy-123.netlify.app`)
2. Click on it to visit your site
3. **Save this URL** - you'll need it for Step 3!

Example:
```
https://justicelink-frontend.netlify.app
```

---

## ✅ Verification

### Check if Frontend is Live:
1. Visit your Netlify URL
2. You should see the JusticeLink landing page
3. Try clicking on different pages
4. Check if it's responsive (resize browser)

### If Something Goes Wrong:
1. Click: **"Deploys"** tab
2. Look at the build logs
3. Check for errors
4. Common issues:
   - Wrong base directory (should be `frontend`)
   - Wrong build command (should be `npm run build`)
   - Wrong publish directory (should be `.next`)

---

## 🎯 What You Get

After Step 1:
```
Frontend URL: https://your-site-name.netlify.app
```

**Save this URL!** You'll need it for Step 3.

---

## 📊 Timeline
- Sign up: 1 min
- Configure: 1 min
- Deploy: 3-5 min
- **Total: 5 minutes**

---

## 🎉 Step 1 Complete!

Your frontend is now live on the internet!

**Next: STEP 2 - Create MongoDB Database**

---

## 🆘 Troubleshooting

### Problem: Build failed
**Solution**: Check the build logs. Common issues:
- Wrong base directory
- Wrong build command
- Missing dependencies

### Problem: Site shows 404
**Solution**: 
- Check publish directory is `.next`
- Redeploy the site

### Problem: Can't find repository
**Solution**:
- Make sure you're signed in with GitHub
- Make sure code is pushed to GitHub

---

**Ready? Start with Step 1 now! 🚀**

