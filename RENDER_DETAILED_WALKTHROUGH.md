# 🚀 RENDER DEPLOYMENT - DETAILED WALKTHROUGH

## YOUR INFORMATION

| Item | Value |
|------|-------|
| Frontend URL | https://cheerful-moonbeam-f6ab98.netlify.app/ |
| GitHub Repo | roshan0650/justicelink1 |
| Backend Folder | backend |

---

## 📝 DETAILED STEPS

### **STEP 1: Open Render**

1. Open your browser
2. Go to: **https://render.com**
3. You'll see the Render homepage

---

### **STEP 2: Sign Up**

1. Click: **"Get Started"** button
2. Choose: **"Sign up with GitHub"**
3. Click: **"Authorize render"**
4. GitHub will ask for permission
5. Click: **"Authorize"**
6. Check your email and verify

---

### **STEP 3: Create New Web Service**

1. Click: **"New +"** button (top right)
2. Choose: **"Web Service"**
3. Click: **"Connect a repository"**
4. You'll see your GitHub repositories
5. Find: **`roshan0650/justicelink1`**
6. Click: **"Connect"**

---

### **STEP 4: Configure Service**

Fill in these fields:

**Name:**
```
justicelink-backend
```

**Root Directory:**
```
backend
```

**Runtime:**
- Should auto-detect as Node.js

**Build Command:**
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

---

### **STEP 5: Add Environment Variables**

1. Scroll down to **"Environment"**
2. Click: **"Add Environment Variable"**
3. Add these variables:

**Variable 1:**
- Key: `MONGODB_URI`
- Value: Your MongoDB URI
  ```
  mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
  ```

**Variable 2:**
- Key: `CORS_ORIGIN`
- Value: Your Frontend URL
  ```
  https://cheerful-moonbeam-f6ab98.netlify.app
  ```

**Variable 3:**
- Key: `JWT_SECRET`
- Value: Create a secret
  ```
  your_secret_key_123
  ```

**Variable 4:**
- Key: `NODE_ENV`
- Value: `production`

**Variable 5:**
- Key: `PORT`
- Value: `5000`

---

### **STEP 6: Deploy**

1. Review all settings
2. Click: **"Create Web Service"** button
3. Render will start building
4. You'll see build logs
5. Wait 5-10 minutes
6. When done, you'll see: **"Live"** status
7. You'll get a URL like: **`https://xxx.onrender.com`**

---

## ✅ VERIFICATION

After deployment:

- [ ] Status shows "Live"
- [ ] Build logs show success
- [ ] No errors in logs
- [ ] Can visit the URL

---

## 🎯 YOUR BACKEND URL

After deployment:
```
https://your-backend-name.onrender.com
```

**Save this for STEP 4!**

---

## 📊 TIMELINE

| Step | Time |
|------|------|
| Sign up | 1 min |
| Create service | 1 min |
| Configure | 2 min |
| Add env vars | 1 min |
| Deploy | 5-10 min |
| **Total** | **10-15 min** |

---

## 🆘 TROUBLESHOOTING

### Build failed

**Solution:**
1. Check build logs in Render dashboard
2. Verify build command: `npm install && npm run build`
3. Verify root directory: `backend`
4. Check if backend folder exists

### Service won't start

**Solution:**
1. Check start command: `npm start`
2. Check environment variables
3. Check logs for errors
4. Verify MongoDB URI is correct

### Connection timeout

**Solution:**
1. Wait 5 minutes
2. Check MongoDB URI
3. Check if MongoDB cluster is running
4. Check CORS_ORIGIN is correct

### 502 Bad Gateway

**Solution:**
1. Wait 5 minutes
2. Check logs
3. Verify all environment variables
4. Restart service

---

## 📝 ENVIRONMENT VARIABLES REFERENCE

**MONGODB_URI:**
```
mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**CORS_ORIGIN:**
```
https://cheerful-moonbeam-f6ab98.netlify.app
```

**JWT_SECRET:**
```
your_secret_key_123
```

**NODE_ENV:**
```
production
```

**PORT:**
```
5000
```

---

## 🎉 DONE!

You now have:
- ✅ Backend deployed on Render
- ✅ MongoDB connected
- ✅ Environment variables configured

**Next: STEP 4 - Connect Frontend to Backend**

---

**Let's go! 🚀**

