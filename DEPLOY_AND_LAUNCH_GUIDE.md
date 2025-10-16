# 🚀 DEPLOY AND LAUNCH GUIDE

## ⚠️ IMPORTANT: YOU MUST COMPLETE THESE STEPS FIRST

Your application is ready to deploy, but you need to complete STEP 3 and STEP 4 manually on Render and Netlify.

---

## 🚀 STEP 3: DEPLOY BACKEND TO RENDER (10 minutes)

### **REQUIRED ACTIONS:**

1. **Go to:** https://render.com
2. **Sign in with GitHub**
3. **Click:** "New +"
4. **Choose:** "Web Service"
5. **Connect:** `roshan0650/justicelink1`

### **Configure:**
- **Name:** `justicelink-backend`
- **Root Directory:** `backend`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

### **Environment Variables (Add all 7):**

```
MONGODB_URI=mongodb+srv://donthuladinesh350_db_user:<db_password>@cluster0.oora721.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

CORS_ORIGIN=https://cheerful-moonbeam-f6ab98.netlify.app

JWT_SECRET=c2760eec3cff3b5cc585e28bd4686bcc02c47a96c550100b9ee30a0f30457522

NODE_ENV=production

PORT=5000

OPENAI_API_KEY=[Your OpenAI API key if you have one]

FRONTEND_URL=https://cheerful-moonbeam-f6ab98.netlify.app
```

### **Deploy:**
- Click: "Create Web Service"
- Wait 5-10 minutes
- Status will show "Live"
- **COPY YOUR BACKEND URL** (e.g., https://xxx.onrender.com)

---

## 🔗 STEP 4: CONNECT FRONTEND TO BACKEND (2 minutes)

### **REQUIRED ACTIONS:**

1. **Go to:** https://app.netlify.com
2. **Click on:** `cheerful-moonbeam-f6ab98`
3. **Click:** "Site settings"
4. **Click:** "Build & deploy"
5. **Click:** "Environment"
6. **Click:** "Edit variables"

### **Add/Update Variable:**
- **Key:** `NEXT_PUBLIC_API_URL`
- **Value:** Your Backend URL from STEP 3 (e.g., https://xxx.onrender.com)
- **Click:** "Save"

### **Trigger Redeploy:**
- Go to: "Deploys"
- Click: "Trigger deploy"
- Choose: "Deploy site"
- Wait 2-3 minutes

---

## ✅ AFTER DEPLOYMENT

Once both STEP 3 and STEP 4 are complete:

1. **Share your Backend URL** with me
2. **I will launch the web app** for you
3. **I will verify everything is working**

---

## 📋 CHECKLIST

- [ ] Deployed backend to Render
- [ ] Backend shows "Live" status
- [ ] Copied backend URL
- [ ] Updated Netlify environment variables
- [ ] Triggered Netlify redeploy
- [ ] Frontend redeploy complete

---

## 🎯 YOUR CREDENTIALS

**MongoDB URI:**
```
mongodb+srv://donthuladinesh350_db_user:<db_password>@cluster0.oora721.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

**JWT Secret:**
```
c2760eec3cff3b5cc585e28bd4686bcc02c47a96c550100b9ee30a0f30457522
```

**Frontend URL:**
```
https://cheerful-moonbeam-f6ab98.netlify.app
```

---

## 🎉 NEXT STEPS

1. **Complete STEP 3 and STEP 4** (12 minutes total)
2. **Share your Backend URL** with me
3. **I will launch the app** for you

---

**Let me know once you've completed the deployment! 🚀**

