# 🚀 Deploy Full Stack - Quick Reference

## 3 Simple Steps to Deploy Everything

---

## STEP 1: Deploy Frontend to Netlify (5 min)

### Push to GitHub:
```bash
cd c:\Users\donth\OneDrive\Desktop\justicelink1
git init
git add .
git commit -m "JusticeLink"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/justicelink.git
git push -u origin main
```

### Connect to Netlify:
1. Go to: https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

### Result:
```
Frontend URL: https://your-site-name.netlify.app
```

---

## STEP 2: Set Up Database (5 min)

### Create MongoDB Atlas:
1. Go to: https://mongodb.com/cloud/atlas
2. Sign up (free)
3. Create cluster (M0 Sandbox)
4. Get connection string

### Connection String Format:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

---

## STEP 3: Deploy Backend to Render (10 min)

### Create Render Account:
1. Go to: https://render.com
2. Sign up with GitHub
3. Authorize Render

### Create Web Service:
1. Click "New +" → "Web Service"
2. Select your repository
3. Configure:
   - Name: `justicelink-backend`
   - Environment: `Node`
   - Build: `cd backend && npm install && npm run build`
   - Start: `cd backend && npm start`
   - Plan: Free

### Add Environment Variables:
```
NODE_ENV = production
PORT = 5000
MONGODB_URI = mongodb+srv://username:password@...
JWT_SECRET = your-random-secret-key-here
OPENAI_API_KEY = sk-xxxxx
GOOGLE_MAPS_API_KEY = AIzaxxxxx
CORS_ORIGIN = https://your-site-name.netlify.app
```

### Result:
```
Backend URL: https://justicelink-backend.onrender.com
```

---

## STEP 4: Connect Frontend to Backend

### Update Frontend:
1. Create `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=https://justicelink-backend.onrender.com
```

2. Push to GitHub:
```bash
git add .
git commit -m "Add backend URL"
git push
```

3. Netlify auto-redeploys!

---

## ✅ Verification

### Test Frontend:
- Visit: https://your-site-name.netlify.app
- Check all pages load

### Test Backend:
- Visit: https://justicelink-backend.onrender.com/api/health
- Should return: `{"status":"ok"}`

### Test Database:
- Try user registration
- Check MongoDB Atlas

---

## 🔑 API Keys Needed

### OpenAI API Key:
1. Go to: https://platform.openai.com/api-keys
2. Create new key
3. Copy to Render

### Google Maps API Key:
1. Go to: https://console.cloud.google.com
2. Create project
3. Enable Maps API
4. Create API key
5. Copy to Render

---

## 📊 Deployment Summary

| Component | Platform | Time |
|-----------|----------|------|
| Frontend | Netlify | 5 min |
| Backend | Render | 10 min |
| Database | MongoDB | 5 min |
| **Total** | | **20 min** |

---

## 🎯 URLs After Deployment

```
Frontend:  https://your-site-name.netlify.app
Backend:   https://justicelink-backend.onrender.com
Database:  MongoDB Atlas (cloud)
```

---

## 🆘 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Frontend not loading | Check Netlify build logs |
| Backend not responding | Check Render logs |
| Database connection failed | Verify MongoDB URI |
| CORS errors | Check CORS_ORIGIN in backend |

---

## 📞 Documentation

- Full guide: `FULL_STACK_DEPLOYMENT.md`
- Frontend only: `DEPLOY_TO_NETLIFY_NOW.md`
- Step by step: `STEP_BY_STEP_DEPLOY.md`

---

## 🎉 Done!

Your full-stack JusticeLink is now live!

**Share your URL: https://your-site-name.netlify.app**

---

**Happy Deploying! 🚀**

