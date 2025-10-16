# ⚡ STEP 3: QUICK GUIDE (Copy & Paste)

## What is Step 3?

**Upload your code from your computer to GitHub**

That's it! 🎉

---

## Before You Start

✅ You have GitHub account (Step 1)  
✅ You have GitHub repository (Step 2)  
✅ You have your GitHub repository URL  

**Your URL looks like:**
```
https://github.com/YOUR_USERNAME/justicelink.git
```

---

## The 4 Commands (Copy & Paste)

### Open PowerShell

Press: `Windows Key + R`  
Type: `powershell`  
Press: `Enter`

---

### Command 1: Go to Your Folder

```powershell
cd c:\Users\donth\OneDrive\Desktop\justicelink1
```

**Just copy and paste this exactly!**

---

### Command 2: Add GitHub URL

```powershell
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/YOUR_USERNAME/justicelink.git
```

**⚠️ IMPORTANT: Replace `YOUR_USERNAME` with your GitHub username!**

Example:
```powershell
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/john123/justicelink.git
```

---

### Command 3: Rename Branch

```powershell
& "C:\Program Files\Git\bin\git.exe" branch -M main
```

**Just copy and paste this exactly!**

---

### Command 4: Upload to GitHub

```powershell
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

**Just copy and paste this exactly!**

---

## What Happens Next

PowerShell will ask:

```
Username for 'https://github.com':
```

**Type your GitHub username and press Enter**

Then it will ask:

```
Password for 'https://github.com/YOUR_USERNAME':
```

**Type your GitHub personal access token and press Enter**

---

## How to Get Your Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click: "Generate new token"
3. Click: "Generate new token (classic)"
4. Name: "JusticeLink"
5. Check: "repo" checkbox
6. Click: "Generate token"
7. **Copy the token** (looks like: `ghp_xxxxx`)
8. **Save it somewhere safe**

---

## Complete Example

Here's what it looks like when you do it:

```powershell
PS C:\Users\donth\OneDrive\Desktop\justicelink1> cd c:\Users\donth\OneDrive\Desktop\justicelink1

PS C:\Users\donth\OneDrive\Desktop\justicelink1> & "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/john123/justicelink.git

PS C:\Users\donth\OneDrive\Desktop\justicelink1> & "C:\Program Files\Git\bin\git.exe" branch -M main

PS C:\Users\donth\OneDrive\Desktop\justicelink1> & "C:\Program Files\Git\bin\git.exe" push -u origin main

Username for 'https://github.com': john123
Password for 'https://github.com/john123': ghp_xxxxxxxxxxxxx

Enumerating objects: 52, done.
Counting objects: 100% (52/52), done.
Delta compression using up to 8 threads
Compressing objects: 100% (45/45), done.
Writing objects: 100% (52/52), 8.34 KiB | 2.78 MiB/s, done.
Total 52 (delta 0), reused 0 (delta 0), reused pack 0 (delta 0)
To https://github.com/john123/justicelink.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**If you see this, you're done! ✅**

---

## What This Means

| Line | Meaning |
|------|---------|
| `Enumerating objects: 52` | Found 52 files |
| `Compressing objects` | Making files smaller |
| `Writing objects` | Uploading files |
| `[new branch] main -> main` | Created main branch |
| `Branch 'main' set up to track` | Ready for next steps |

---

## Verify It Worked

1. Go to: `https://github.com/YOUR_USERNAME/justicelink`
2. You should see all your files!
3. If yes, you're done! ✅

---

## If Something Goes Wrong

### Error: "fatal: not a git repository"
**Solution**: Make sure you're in the right folder
```powershell
cd c:\Users\donth\OneDrive\Desktop\justicelink1
```

### Error: "fatal: remote origin already exists"
**Solution**: Skip the "remote add" command, just run:
```powershell
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

### Error: "Authentication failed"
**Solution**: Use your personal access token, not your password

---

## Summary

**Step 3 = Upload your code to GitHub**

4 commands:
1. Go to folder
2. Add GitHub URL
3. Rename branch to main
4. Upload to GitHub

**That's it! 🎉**

---

## Next Step

**Move to Step 4: Deploy Frontend to Netlify**

---

**You got this! 🚀**

