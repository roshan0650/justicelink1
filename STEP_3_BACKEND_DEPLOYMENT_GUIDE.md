# 🚀 STEP 3: DEPLOY BACKEND TO RENDER (10 minutes)

## ✅ YOUR PROGRESS

| Step | Status |
|------|--------|
| STEP 1: Frontend to Netlify | ✅ DONE |
| STEP 2: MongoDB Database | ✅ DONE |
| STEP 3: Backend to Render | 🔄 **NOW** |
| STEP 4: Connect Frontend to Backend | ⏳ Next |

---

## 📋 WHAT YOU NEED

Before deploying, you need:

1. **MongoDB URI** (from STEP 2)
   ```
   mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
   ```

2. **Frontend URL** (from STEP 1)
   ```
   https://cheerful-moonbeam-f6ab98.netlify.app/
   ```

3. **Render Account** (free)

---

## 🚀 DEPLOY BACKEND IN 5 STEPS

### **STEP 1: Open Render**
```
https://render.com
```

### **STEP 2: Sign Up**
1. Click "Get Started"
2. Choose "Sign up with GitHub"
3. Authorize Render
4. Verify email

### **STEP 3: Create New Service**
1. Click "New +"
2. Choose "Web Service"
3. Click "Connect a repository"
4. Find: `roshan0650/justicelink1`
5. Click "Connect"

### **STEP 4: Configure**

**Name:**
```
justicelink-backend
```

**Root Directory:**
```
backend
```

**Build Command:**
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

**Environment Variables:**
Add these:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB URI |
| `CORS_ORIGIN` | https://cheerful-moonbeam-f6ab98.netlify.app |
| `JWT_SECRET` | your_secret_key_123 |
| `NODE_ENV` | production |
| `PORT` | 5000 |

### **STEP 5: Deploy**
1. Click "Create Web Service"
2. Wait 5-10 minutes
3. You'll get a URL like: `https://xxx.onrender.com`
4. **Save this URL!**

---

## ✅ VERIFICATION

After deployment:
- [ ] Build successful
- [ ] Service running
- [ ] Health check passes
- [ ] No errors in logs

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
| Deploy | 5-10 min |
| **Total** | **9-14 min** |

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Build failed | Check build command, ensure backend folder exists |
| Service won't start | Check environment variables, check logs |
| Connection timeout | Wait 5 minutes, check MongoDB URI |

---

## 📝 ENVIRONMENT VARIABLES

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

---

## 🎉 YOU'RE READY!

**Open https://render.com now and deploy! 🚀**

---

## 📋 NEXT STEPS

After backend is deployed:

1. **Save your Backend URL**
2. **STEP 4**: Connect Frontend to Backend (2 min)

---

**Let's go! 💪**

