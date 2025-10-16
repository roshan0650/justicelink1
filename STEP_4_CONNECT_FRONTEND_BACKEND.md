# 🔗 STEP 4: Connect Frontend to Backend (2 minutes)

## 🎯 Goal
Connect your frontend to your backend so they can communicate with each other.

---

## 📋 Prerequisites
- ✅ Frontend deployed to Netlify (from Step 1)
- ✅ Backend deployed to Render (from Step 3)
- ✅ Frontend URL: `https://xxx.netlify.app`
- ✅ Backend URL: `https://xxx.onrender.com`

---

## 🚀 Step-by-Step Instructions

### Step 1: Create Environment File
1. Open your code editor (VS Code)
2. Navigate to: `frontend` folder
3. Create a new file: `.env.local`
4. **Note**: The file name starts with a dot (.)

---

### Step 2: Add Backend URL
1. Open the `.env.local` file
2. Add this line:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
   ```

**Replace `your-backend-url` with your actual Render URL**

Example:
```
NEXT_PUBLIC_API_URL=https://justicelink-backend.onrender.com
```

---

### Step 3: Save the File
1. Press: `Ctrl + S` to save
2. File should be saved

---

### Step 4: Push to GitHub
Open PowerShell and run these commands:

```powershell
cd c:\Users\donth\OneDrive\Desktop\justicelink1

& "C:\Program Files\Git\bin\git.exe" add .

& "C:\Program Files\Git\bin\git.exe" commit -m "Add backend API URL to frontend"

& "C:\Program Files\Git\bin\git.exe" push
```

---

### Step 5: Wait for Netlify to Redeploy
1. Go to: **https://netlify.com**
2. Click on your site
3. Go to: **"Deploys"** tab
4. You should see a new deploy starting
5. Wait 2-3 minutes for it to complete
6. When done, you'll see: **"Published"**

---

### Step 6: Verify Connection
1. Visit your Netlify Frontend URL
2. Try to register a new user
3. If it works, your frontend and backend are connected!

---

## ✅ Verification

### Test the Connection:
1. **Visit frontend**: `https://your-netlify-url`
2. **Try registration**: Fill in user details and submit
3. **Check backend**: Visit `https://your-backend-url/api/health`
4. **Check database**: Go to MongoDB Atlas and look for new user

If all these work, you're done! 🎉

---

## 🎯 What You Get

After Step 4:
```
✅ Frontend connected to Backend
✅ Frontend can send requests to Backend
✅ Backend can access Database
✅ Full stack is working!
```

---

## 📊 Timeline
- Create file: 1 min
- Add URL: 1 min
- Push to GitHub: 1 min
- Netlify redeploy: 2-3 min
- **Total: 2 minutes** (plus waiting for redeploy)

---

## 🎉 Step 4 Complete!

Your full-stack application is now LIVE and CONNECTED!

---

## ✨ What's Now Working

✅ Frontend on Netlify  
✅ Backend on Render  
✅ Database on MongoDB  
✅ Frontend ↔ Backend communication  
✅ User registration  
✅ User login  
✅ All features!  

---

## 🆘 Troubleshooting

### Problem: Frontend still shows old version
**Solution**:
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache
- Wait 5 minutes for Netlify to fully deploy

### Problem: Backend URL not working
**Solution**:
- Check the URL is correct
- Check backend is deployed on Render
- Check environment variables on Render

### Problem: User registration fails
**Solution**:
- Check backend logs on Render
- Check MongoDB connection
- Check CORS_ORIGIN is set correctly

### Problem: Can't find `.env.local` file
**Solution**:
- Make sure you're in the `frontend` folder
- File name must start with a dot (.)
- File name is exactly: `.env.local`

---

## 📝 Important Notes

- **Environment variables**: Frontend variables start with `NEXT_PUBLIC_`
- **Backend URL**: Must be your Render URL
- **Auto-redeploy**: Netlify automatically redeploys when you push
- **Cache**: Browser might cache old version, use hard refresh

---

## 🎊 CONGRATULATIONS!

Your full-stack JusticeLink application is now LIVE on the internet!

**Share your Netlify URL with the world! 🚀**

---

## 📊 Your Final URLs

```
Frontend:  https://your-site-name.netlify.app
Backend:   https://justicelink-backend.onrender.com
Database:  MongoDB Atlas (cloud)
```

---

**You did it! 🎉**

*JusticeLink - Making Justice Accessible to Everyone*

