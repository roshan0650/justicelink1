# 💾 STEP 2: Create MongoDB Database (5 minutes)

## 🎯 Goal
Create a free MongoDB database in the cloud to store your application data.

---

## 📋 Prerequisites
- ✅ Email address
- ✅ MongoDB account (we'll create it)

---

## 🚀 Step-by-Step Instructions

### Step 1: Open MongoDB Atlas
1. Go to: **https://mongodb.com/cloud/atlas**
2. You should see the MongoDB Atlas homepage

---

### Step 2: Sign Up
1. Click: **"Sign up"** button
2. Choose: **"Sign up with email"** or **"Sign up with Google"**
3. Fill in your details:
   - Email
   - Password
   - First name
   - Last name
4. Click: **"Create account"**
5. Verify your email (check your inbox)

---

### Step 3: Create Deployment
1. After signing in, click: **"Create a Deployment"**
2. You'll see deployment options

---

### Step 4: Choose Free Tier
1. Select: **"M0 Sandbox"** (free tier)
2. This is completely free and perfect for development
3. Click: **"Create Deployment"**

---

### Step 5: Select Region
1. Choose your region (closest to you)
2. Examples:
   - **Asia**: Mumbai, Singapore, Tokyo
   - **Europe**: Frankfurt, Ireland, London
   - **Americas**: N. Virginia, Oregon, São Paulo
3. Click: **"Create Deployment"**

---

### Step 6: Wait for Cluster Creation
- MongoDB will create your cluster
- Takes 2-3 minutes
- You'll see a progress indicator
- When done, you'll see: **"Cluster created"**

---

### Step 7: Get Connection String
1. Click: **"Drivers"** button
2. You'll see connection instructions
3. Look for the connection string (starts with `mongodb+srv://`)
4. Click: **"Copy"** button to copy it

---

### Step 8: Replace Password
The connection string looks like:
```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**Replace `<password>` with your actual password:**
```
mongodb+srv://username:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

---

### Step 9: Save Your MongoDB URI
**Copy and save this connection string:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**You'll need this for Step 3!**

---

## ✅ Verification

### Check if Database is Created:
1. Go to: **"Databases"** tab
2. You should see your cluster
3. Status should be: **"Active"**

---

## 🎯 What You Get

After Step 2:
```
MongoDB URI: mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**Save this URI!** You'll need it for Step 3.

---

## 📊 Timeline
- Sign up: 1 min
- Create deployment: 1 min
- Wait for cluster: 2-3 min
- Get connection string: 1 min
- **Total: 5 minutes**

---

## 🎉 Step 2 Complete!

Your database is now created in the cloud!

**Next: STEP 3 - Deploy Backend to Render**

---

## 🆘 Troubleshooting

### Problem: Can't find connection string
**Solution**:
1. Go to "Databases" tab
2. Click on your cluster
3. Click "Connect"
4. Choose "Drivers"
5. Copy the connection string

### Problem: Cluster creation failed
**Solution**:
- Try creating again
- Make sure you selected M0 Sandbox (free)
- Check your email for verification

### Problem: Can't sign up
**Solution**:
- Use a different email
- Try signing up with Google
- Check spam folder for verification email

---

## 📝 Important Notes

- **Free tier**: M0 Sandbox is completely free
- **Storage**: 512 MB (enough for development)
- **No credit card needed**: Truly free
- **Connection string**: Keep it safe and secret!

---

**Ready? Start with Step 2 now! 🚀**

