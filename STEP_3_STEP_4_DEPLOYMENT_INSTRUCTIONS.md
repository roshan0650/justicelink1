# 🚀 STEP 3 & 4: COMPLETE DEPLOYMENT INSTRUCTIONS

## ✅ YOUR PROGRESS

| Step | Status | URL |
|------|--------|-----|
| STEP 1: Frontend | ✅ DONE | https://cheerful-moonbeam-f6ab98.netlify.app/ |
| STEP 2: MongoDB | ✅ DONE | mongodb+srv://... |
| STEP 3: Backend | 🔄 **NOW** | Coming soon |
| STEP 4: Connect | ⏳ AFTER STEP 3 | - |

---

## 🚀 STEP 3: DEPLOY BACKEND TO RENDER (10 minutes)

### **1. Open Render Dashboard**
- Go to: https://render.com
- Sign in with GitHub

### **2. Create New Web Service**
- Click: "New +"
- Choose: "Web Service"
- Connect repository: `roshan0650/justicelink1`

### **3. Configure Service**
- **Name:** `justicelink-backend`
- **Root Directory:** `backend`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

### **4. Add Environment Variables**

Add these variables in Render:

| Key | Value |
|-----|-------|
| MONGODB_URI | Your MongoDB connection string |
| CORS_ORIGIN | https://cheerful-moonbeam-f6ab98.netlify.app |
| JWT_SECRET | Your generated JWT secret |
| NODE_ENV | production |
| PORT | 5000 |
| OPENAI_API_KEY | Your OpenAI API key (optional) |
| FRONTEND_URL | https://cheerful-moonbeam-f6ab98.netlify.app |

### **5. Deploy**
- Click: "Create Web Service"
- Wait 5-10 minutes
- Status will show "Live"
- **Copy your Backend URL** (e.g., https://xxx.onrender.com)

---

## 🔗 STEP 4: CONNECT FRONTEND TO BACKEND (2 minutes)

### **1. Go to Netlify Dashboard**
- URL: https://app.netlify.com
- Click on: `cheerful-moonbeam-f6ab98`

### **2. Update Environment Variables**
- Click: "Site settings"
- Click: "Build & deploy"
- Click: "Environment"
- Click: "Edit variables"

### **3. Add/Update Variable**
- **Key:** `NEXT_PUBLIC_API_URL`
- **Value:** Your Backend URL (from STEP 3)
- Click: "Save"

### **4. Trigger Redeploy**
- Go to: "Deploys"
- Click: "Trigger deploy"
- Choose: "Deploy site"
- Wait 2-3 minutes

---

## ✅ VERIFICATION CHECKLIST

### **Backend (Render):**
- [ ] Status shows "Live"
- [ ] Build logs show success
- [ ] No errors in logs
- [ ] Can visit backend URL

### **Frontend (Netlify):**
- [ ] Redeploy successful
- [ ] Can visit frontend URL
- [ ] API calls working
- [ ] No console errors

### **Full Stack:**
- [ ] Frontend loads
- [ ] Backend responds
- [ ] MongoDB connected
- [ ] Authentication working

---

## 🎯 YOUR FINAL URLS

| Component | URL |
|-----------|-----|
| Frontend | https://cheerful-moonbeam-f6ab98.netlify.app/ |
| Backend | https://your-backend-name.onrender.com |
| Database | MongoDB Atlas |

---

## 📊 TIMELINE

| Step | Time |
|------|------|
| Deploy Backend | 10 min |
| Connect Frontend | 2 min |
| **Total** | **12 min** |

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Backend build fails | Check logs, verify env vars |
| Frontend won't connect | Check NEXT_PUBLIC_API_URL |
| API calls failing | Check CORS_ORIGIN |
| MongoDB error | Check MONGODB_URI |

---

## 🎉 YOU'RE DONE!

Your full-stack application is now live!

---

**Congratulations! 🎊**

*JusticeLink - Making Justice Accessible to Everyone*

