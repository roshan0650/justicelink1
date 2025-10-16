# 🗄️ STEP 2: CREATE MONGODB DATABASE (5 minutes)

## ✅ YOUR FRONTEND IS LIVE!

**Frontend URL**: https://cheerful-moonbeam-f6ab98.netlify.app/

Now let's create your MongoDB database!

---

## 🚀 CREATE MONGODB IN 5 STEPS

### **STEP 1: Open MongoDB Atlas**
```
https://www.mongodb.com/cloud/atlas
```

### **STEP 2: Sign Up**
1. Click "Try Free"
2. Choose "Sign up with Google" or "Sign up with Email"
3. Fill in your details
4. Click "Create account"
5. Verify your email

### **STEP 3: Create Organization & Project**
1. Create Organization (name: "JusticeLink")
2. Create Project (name: "justicelink-db")
3. Click "Create Project"

### **STEP 4: Create Cluster**
1. Click "Build a Database"
2. Choose "M0 Free" (free tier)
3. Select region: "AWS" → "us-east-1" (or closest to you)
4. Click "Create Cluster"
5. Wait 2-3 minutes for cluster to be created

### **STEP 5: Create Database User**
1. Go to "Database Access"
2. Click "Add New Database User"
3. **Username**: `justicelink_user`
4. **Password**: Create a strong password (save it!)
5. Click "Add User"

---

## 🔐 GET YOUR CONNECTION STRING

### **STEP 1: Get Connection String**
1. Go to "Clusters"
2. Click "Connect" button
3. Choose "Drivers"
4. Select "Node.js" and version "4.x or later"
5. Copy the connection string

### **STEP 2: Replace Credentials**
Replace `<username>` and `<password>` with:
- **Username**: `justicelink_user`
- **Password**: Your password from Step 5

### **STEP 3: Your MongoDB URI**
It should look like:
```
mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**IMPORTANT: Save this URI!** You'll need it for STEP 3.

---

## ✅ VERIFICATION

After creating database:
- [ ] Cluster created
- [ ] Database user created
- [ ] Connection string copied
- [ ] Password saved

---

## 🎯 YOUR MONGODB URI

```
mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**Save this for STEP 3!**

---

## 📊 TIMELINE

| Step | Time |
|------|------|
| Sign up | 1 min |
| Create project | 1 min |
| Create cluster | 2-3 min |
| Create user | 1 min |
| **Total** | **5-6 min** |

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Cluster creation slow | Wait 2-3 minutes, refresh page |
| Can't find connection string | Go to Clusters → Connect → Drivers |
| Password not working | Reset password in Database Access |

---

## 📋 NEXT STEPS

After MongoDB is created:

1. **Save your MongoDB URI**
2. **STEP 3**: Deploy Backend to Render (10 min)
3. **STEP 4**: Connect Frontend to Backend (2 min)

---

## 🎉 YOU'RE READY!

**Open https://www.mongodb.com/cloud/atlas now! 🚀**

---

**Let's go! 💪**

