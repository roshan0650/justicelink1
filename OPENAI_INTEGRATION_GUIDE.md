# 🤖 OpenAI Integration Guide - JusticeLink

## Overview

JusticeLink now has full OpenAI integration for AI-powered legal assistance. The integration uses GPT-4o-mini for fast, accurate legal analysis.

---

## ✨ Features Implemented

### 1. **Legal Summary Generation**
- Analyzes legal problems and provides concise summaries
- Identifies key points and potential legal issues
- Endpoint: `POST /api/ai/legal-summary`

### 2. **Legal Advice Generation**
- Provides practical legal advice based on problem description
- Recommends next steps and actions
- Endpoint: `POST /api/ai/legal-advice`

### 3. **Relevant Laws Identification**
- Identifies applicable Indian laws and acts
- Returns structured list of relevant legal provisions
- Endpoint: `POST /api/ai/identify-laws`

### 4. **Document Template Generation**
- Generates professional legal document templates
- Customizable based on context
- Endpoint: `POST /api/ai/document-template`

### 5. **AI Chat Assistant**
- Multi-turn conversation with legal AI
- Maintains conversation context
- Endpoint: `POST /api/ai/chat`

---

## 🔧 Backend Setup

### Files Created

1. **`backend/src/services/openaiService.ts`**
   - Core OpenAI integration service
   - All AI functions centralized
   - Error handling and logging

2. **`backend/src/routes/ai.ts`**
   - API endpoints for AI features
   - Request validation
   - Authentication middleware

### Environment Variables

Add to `backend/.env`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

**Note**: Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

---

## 🎨 Frontend Setup

### Files Created

1. **`frontend/src/lib/aiApi.ts`**
   - Frontend API client for AI features
   - Type-safe API calls
   - Error handling

2. **`frontend/src/app/ai-assistant/page.tsx`**
   - Full-featured AI assistant UI
   - Tabbed interface for different features
   - Real-time results display

### Updated Files

- **`frontend/src/app/page.tsx`** - Added AI Assistant button to home page

---

## 📡 API Endpoints

### 1. Generate Legal Summary
```bash
POST /api/ai/legal-summary
Authorization: Bearer {token}
Content-Type: application/json

{
  "problemDescription": "I was injured in a car accident..."
}

Response:
{
  "success": true,
  "summary": "Based on your description, this appears to be a motor vehicle accident case..."
}
```

### 2. Generate Legal Advice
```bash
POST /api/ai/legal-advice
Authorization: Bearer {token}
Content-Type: application/json

{
  "problemDescription": "I was injured in a car accident..."
}

Response:
{
  "success": true,
  "advice": "Here are the recommended steps you should take..."
}
```

### 3. Identify Relevant Laws
```bash
POST /api/ai/identify-laws
Authorization: Bearer {token}
Content-Type: application/json

{
  "problemDescription": "I was injured in a car accident..."
}

Response:
{
  "success": true,
  "laws": [
    "Motor Vehicles Act, 1988",
    "Indian Penal Code Section 337-338",
    "Bharatiya Nyaya Sanhita, 2023"
  ]
}
```

### 4. Generate Document Template
```bash
POST /api/ai/document-template
Authorization: Bearer {token}
Content-Type: application/json

{
  "documentType": "Complaint Letter",
  "context": "Motor vehicle accident claim"
}

Response:
{
  "success": true,
  "template": "[Professional legal document template]"
}
```

### 5. Chat with Assistant
```bash
POST /api/ai/chat
Authorization: Bearer {token}
Content-Type: application/json

{
  "messages": [
    {
      "role": "user",
      "content": "What should I do after a car accident?"
    }
  ]
}

Response:
{
  "success": true,
  "response": "After a car accident, you should..."
}
```

---

## 🚀 How to Use

### 1. Access the AI Assistant
- Go to http://localhost:3000
- Click "🤖 AI Assistant" button
- Login if not already authenticated

### 2. Describe Your Problem
- Enter detailed description of your legal issue
- Click one of the action buttons

### 3. Get Results
- View summary, advice, or relevant laws
- Results appear in real-time
- Copy or download results as needed

---

## 🔐 Security

- ✅ All endpoints require authentication (JWT token)
- ✅ API key stored securely in environment variables
- ✅ Input validation on all endpoints
- ✅ Error handling without exposing sensitive info

---

## 💡 Usage Tips

1. **Be Specific**: Provide detailed problem descriptions for better results
2. **Use Multiple Features**: Get summary, advice, and laws for comprehensive understanding
3. **Chat for Follow-ups**: Use chat feature for follow-up questions
4. **Document Templates**: Generate templates for common legal documents

---

## 🧪 Testing

### Test the API with cURL

```bash
# Get token first
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Use token in AI requests
curl -X POST http://localhost:5000/api/ai/legal-summary \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"problemDescription":"I was injured in a car accident"}'
```

---

## 📊 Model Information

- **Model**: GPT-4o-mini
- **Max Tokens**: 1024-2048 (varies by endpoint)
- **Temperature**: Default (0.7)
- **Cost**: Optimized for cost-efficiency

---

## 🐛 Troubleshooting

### Issue: "Not authenticated"
- Ensure you're logged in
- Check token is valid
- Token may have expired

### Issue: "API key not found"
- Verify OPENAI_API_KEY in .env
- Restart backend after adding key
- Check key is valid

### Issue: "Rate limit exceeded"
- Wait a few minutes before retrying
- Reduce request frequency
- Contact OpenAI for higher limits

---

## 📝 Next Steps

1. **Enhance Prompts**: Customize AI prompts for better results
2. **Add Caching**: Cache common queries for faster responses
3. **User Feedback**: Collect feedback to improve AI responses
4. **Analytics**: Track which features are most used
5. **Multi-language**: Add support for regional languages

---

## 🎉 You're All Set!

Your JusticeLink application now has powerful AI-powered legal assistance. Users can:
- Get instant legal summaries
- Receive personalized legal advice
- Identify applicable laws
- Generate legal documents
- Chat with AI assistant

**Start using the AI Assistant at http://localhost:3000/ai-assistant** 🚀

