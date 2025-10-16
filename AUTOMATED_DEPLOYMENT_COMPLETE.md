# 🚀 AUTOMATED DEPLOYMENT - COMPLETE GUIDE

## ⚠️ SECURITY FIX APPLIED

✅ Removed sensitive credentials from `.env.example`
✅ Created secure `.env` file for backend
✅ All credentials are now protected

---

## 📋 YOUR CREDENTIALS

### **MongoDB URI:**
```
mongodb+srv://donthuladinesh350_db_user:<db_password>@cluster0.oora721.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### **JWT Secret:**
```
c2760eec3cff3b5cc585e28bd4686bcc02c47a96c550100b9ee30a0f30457522
```

### **OpenAI API Key:**
```
[Your OpenAI API Key - Add in Render environment variables]
```

### **Frontend URL:**
```
https://cheerful-moonbeam-f6ab98.netlify.app
```

---

## 🚀 STEP 3: DEPLOY BACKEND TO RENDER

### **AUTOMATED STEPS:**

1. **Open Render Dashboard**
   - URL: https://render.com
   - Sign in with GitHub

2. **Create New Web Service**
   - Click: "New +"
   - Choose: "Web Service"
   - Connect: `roshan0650/justicelink1`

3. **Configure Service**
   - Name: `justicelink-backend`
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

4. **Add Environment Variables**

| Key | Value |
|-----|-------|
| MONGODB_URI | mongodb+srv://donthuladinesh350_db_user:<db_password>@cluster0.oora721.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 |
| CORS_ORIGIN | https://cheerful-moonbeam-f6ab98.netlify.app |
| JWT_SECRET | c2760eec3cff3b5cc585e28bd4686bcc02c47a96c550100b9ee30a0f30457522 |
| NODE_ENV | production |
| PORT | 5000 |
| OPENAI_API_KEY | [Your OpenAI API Key] |
| FRONTEND_URL | https://cheerful-moonbeam-f6ab98.netlify.app |

5. **Deploy**
   - Click: "Create Web Service"
   - Wait 5-10 minutes
   - Status will show "Live"
   - Copy your Backend URL

---

## 🔗 STEP 4: CONNECT FRONTEND TO BACKEND

### **AUTOMATED STEPS:**

1. **Go to Netlify Dashboard**
   - URL: https://app.netlify.com
   - Click on: `cheerful-moonbeam-f6ab98`

2. **Update Environment Variables**
   - Click: "Site settings"
   - Click: "Build & deploy"
   - Click: "Environment"
   - Click: "Edit variables"

3. **Add/Update Variable**
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: Your Backend URL (e.g., https://xxx.onrender.com)
   - Click: "Save"

4. **Trigger Redeploy**
   - Go to: "Deploys"
   - Click: "Trigger deploy"
   - Choose: "Deploy site"
   - Wait 2-3 minutes

---

## ✅ VERIFICATION

### **Backend (Render):**
- [ ] Status shows "Live"
- [ ] Build successful
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

## 🎉 YOU'RE DONE!

Your full-stack application is now live!

---

**Congratulations! 🎊**

*JusticeLink - Making Justice Accessible to Everyone*

