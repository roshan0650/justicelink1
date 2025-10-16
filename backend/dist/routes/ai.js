import express from 'express';
import { openaiService } from '../services/openaiService.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();
/**
 * POST /api/ai/legal-summary
 * Generate legal summary from problem description
 */
router.post('/legal-summary', protect, async (req, res) => {
    try {
        const { problemDescription } = req.body;
        if (!problemDescription || typeof problemDescription !== 'string') {
            res.status(400).json({ error: 'Problem description is required' });
            return;
        }
        const summary = await openaiService.generateLegalSummary(problemDescription);
        res.json({ success: true, summary });
    }
    catch (error) {
        console.error('Error in legal-summary route:', error);
        res.status(500).json({ error: error.message || 'Failed to generate legal summary' });
    }
});
/**
 * POST /api/ai/legal-advice
 * Generate legal advice based on problem description
 */
router.post('/legal-advice', protect, async (req, res) => {
    try {
        const { problemDescription } = req.body;
        if (!problemDescription || typeof problemDescription !== 'string') {
            res.status(400).json({ error: 'Problem description is required' });
            return;
        }
        const advice = await openaiService.generateLegalAdvice(problemDescription);
        res.json({ success: true, advice });
    }
    catch (error) {
        console.error('Error in legal-advice route:', error);
        res.status(500).json({ error: error.message || 'Failed to generate legal advice' });
    }
});
/**
 * POST /api/ai/identify-laws
 * Identify relevant laws and acts
 */
router.post('/identify-laws', protect, async (req, res) => {
    try {
        const { problemDescription } = req.body;
        if (!problemDescription || typeof problemDescription !== 'string') {
            res.status(400).json({ error: 'Problem description is required' });
            return;
        }
        const laws = await openaiService.identifyRelevantLaws(problemDescription);
        res.json({ success: true, laws });
    }
    catch (error) {
        console.error('Error in identify-laws route:', error);
        res.status(500).json({ error: error.message || 'Failed to identify relevant laws' });
    }
});
/**
 * POST /api/ai/document-template
 * Generate legal document template
 */
router.post('/document-template', protect, async (req, res) => {
    try {
        const { documentType, context } = req.body;
        if (!documentType || !context) {
            res.status(400).json({ error: 'Document type and context are required' });
            return;
        }
        const template = await openaiService.generateDocumentTemplate(documentType, context);
        res.json({ success: true, template });
    }
    catch (error) {
        console.error('Error in document-template route:', error);
        res.status(500).json({ error: error.message || 'Failed to generate document template' });
    }
});
/**
 * POST /api/ai/chat
 * Chat with AI legal assistant
 */
router.post('/chat', protect, async (req, res) => {
    try {
        const { messages } = req.body;
        if (!Array.isArray(messages) || messages.length === 0) {
            res.status(400).json({ error: 'Messages array is required' });
            return;
        }
        const response = await openaiService.chatWithAssistant(messages);
        res.json({ success: true, response });
    }
    catch (error) {
        console.error('Error in chat route:', error);
        res.status(500).json({ error: error.message || 'Failed to process chat' });
    }
});
export default router;
//# sourceMappingURL=ai.js.map