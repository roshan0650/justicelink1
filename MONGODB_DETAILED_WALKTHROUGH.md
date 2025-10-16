# 🗄️ MONGODB DETAILED WALKTHROUGH

## YOUR FRONTEND URL
```
https://cheerful-moonbeam-f6ab98.netlify.app/
```

---

## 📝 DETAILED STEPS

### **STEP 1: Open MongoDB Atlas**

1. Open your browser
2. Go to: **https://www.mongodb.com/cloud/atlas**
3. You'll see the MongoDB homepage

---

### **STEP 2: Sign Up**

1. Click: **"Try Free"** button
2. Choose one:
   - **"Sign up with Google"** (easiest)
   - **"Sign up with Email"**
3. Fill in your details:
   - Email
   - Password (strong password)
   - First Name
   - Last Name
4. Check: **"I agree to the terms"**
5. Click: **"Create account"**
6. Check your email and verify

---

### **STEP 3: Create Organization & Project**

After signing up:

1. **Create Organization:**
   - Organization name: `JusticeLink`
   - Click "Create Organization"

2. **Create Project:**
   - Project name: `justicelink-db`
   - Click "Create Project"

3. You'll be taken to the project dashboard

---

### **STEP 4: Create Cluster (Database)**

1. Click: **"Build a Database"** button
2. Choose: **"M0 Free"** (free tier - perfect for development)
3. Select region:
   - Provider: **AWS**
   - Region: **us-east-1** (or closest to you)
4. Click: **"Create Cluster"**
5. **Wait 2-3 minutes** for cluster to be created
6. You'll see a green checkmark when done

---

### **STEP 5: Create Database User**

1. Go to: **"Database Access"** (left sidebar)
2. Click: **"Add New Database User"** button
3. Fill in:
   - **Username**: `justicelink_user`
   - **Password**: Create a strong password
   - **Confirm Password**: Repeat password
4. **IMPORTANT: Save your password!**
5. Click: **"Add User"**

---

### **STEP 6: Get Connection String**

1. Go to: **"Clusters"** (left sidebar)
2. Click: **"Connect"** button
3. Choose: **"Drivers"**
4. Select:
   - **Driver**: Node.js
   - **Version**: 4.x or later
5. You'll see a connection string like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

---

### **STEP 7: Replace Credentials**

In the connection string, replace:
- `<username>` with: `justicelink_user`
- `<password>` with: Your password from Step 5

**Final URI:**
```
mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

---

## ✅ VERIFICATION

After completing all steps:

- [ ] MongoDB account created
- [ ] Organization created
- [ ] Project created
- [ ] Cluster created (green checkmark)
- [ ] Database user created
- [ ] Connection string copied
- [ ] Password saved

---

## 🎯 SAVE YOUR MONGODB URI

```
mongodb+srv://justicelink_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/justicelink?retryWrites=true&w=majority
```

**You'll need this for STEP 3!**

---

## 🆘 TROUBLESHOOTING

### Cluster creation is slow
- Wait 2-3 minutes
- Refresh the page
- Check email for status updates

### Can't find connection string
- Go to: Clusters → Connect → Drivers
- Make sure you selected Node.js

### Password not working
- Go to: Database Access
- Click the user
- Click "Edit"
- Reset password

### Connection refused
- Make sure IP is whitelisted
- Go to: Network Access
- Add your IP address

---

## 📊 TIMELINE

| Step | Time |
|------|------|
| Sign up | 1 min |
| Create org & project | 1 min |
| Create cluster | 2-3 min |
| Create user | 1 min |
| Get connection string | 1 min |
| **Total** | **6-7 min** |

---

## 🎉 DONE!

You now have:
- ✅ MongoDB Atlas account
- ✅ Database cluster
- ✅ Database user
- ✅ Connection string

**Next: STEP 3 - Deploy Backend to Render**

---

**Let's go! 🚀**

