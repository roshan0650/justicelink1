# 🚀 STEP 3: RENDER DEPLOYMENT - QUICK REFERENCE

## ✅ YOUR INFORMATION

| Item | Value |
|------|-------|
| Frontend URL | https://cheerful-moonbeam-f6ab98.netlify.app/ |
| GitHub Repo | roshan0650/justicelink1 |
| Backend Folder | backend |

---

## 🚀 DEPLOY IN 5 STEPS (10 minutes)

### **1. Open Render**
```
https://render.com
```

### **2. Sign Up**
- Click "Get Started"
- Sign up with GitHub
- Authorize Render

### **3. Create Web Service**
- Click "New +"
- Choose "Web Service"
- Connect repository: `roshan0650/justicelink1`

### **4. Configure**

**Name:** `justicelink-backend`

**Root Directory:** `backend`

**Build Command:**
```
npm install && npm run build
```

**Start Command:**
```
npm start
```

**Environment Variables:**

| Key | Value |
|-----|-------|
| MONGODB_URI | mongodb+srv://justicelink_user:PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority |
| CORS_ORIGIN | https://cheerful-moonbeam-f6ab98.netlify.app |
| JWT_SECRET | your_secret_key_123 |
| NODE_ENV | production |
| PORT | 5000 |

### **5. Deploy**
- Click "Create Web Service"
- Wait 5-10 minutes
- Get Backend URL: `https://xxx.onrender.com`

---

## ✅ VERIFICATION

- [ ] Status shows "Live"
- [ ] Build successful
- [ ] No errors in logs

---

## 🎯 YOUR BACKEND URL

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

## 📚 DETAILED GUIDES

- **STEP_3_BACKEND_DEPLOYMENT_GUIDE.md** - Full guide
- **RENDER_DETAILED_WALKTHROUGH.md** - Step-by-step

---

## 🎉 READY!

**Open https://render.com now! 🚀**

---

## 📋 NEXT STEPS

After backend is deployed:

1. **Save your Backend URL**
2. **STEP 4**: Connect Frontend to Backend (2 min)

---

**Let's go! 💪**

