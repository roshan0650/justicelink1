import OpenAI from 'openai';
let openai = null;
const getOpenAIClient = () => {
    if (!openai) {
        openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    return openai;
};
export const openaiService = {
    /**
     * Generate legal summary from problem description
     */
    generateLegalSummary: async (problemDescription) => {
        try {
            const client = getOpenAIClient();
            const message = await client.chat.completions.create({
                model: 'gpt-4o-mini',
                max_tokens: 1024,
                messages: [
                    {
                        role: 'user',
                        content: `You are a legal expert. Analyze the following legal problem and provide a concise summary with key points and potential legal issues:\n\n${problemDescription}`,
                    },
                ],
            });
            const textContent = message.choices[0]?.message?.content;
            return textContent || 'Unable to generate summary';
        }
        catch (error) {
            console.error('Error generating legal summary:', error);
            throw new Error(`Failed to generate legal summary: ${error.message}`);
        }
    },
    /**
     * Generate legal advice based on problem description
     */
    generateLegalAdvice: async (problemDescription) => {
        try {
            const client = getOpenAIClient();
            const message = await client.chat.completions.create({
                model: 'gpt-4o-mini',
                max_tokens: 2048,
                messages: [
                    {
                        role: 'user',
                        content: `You are an experienced legal advisor. Based on the following legal problem, provide practical legal advice and recommended next steps:\n\n${problemDescription}`,
                    },
                ],
            });
            const textContent = message.choices[0]?.message?.content;
            return textContent || 'Unable to generate advice';
        }
        catch (error) {
            console.error('Error generating legal advice:', error);
            throw new Error(`Failed to generate legal advice: ${error.message}`);
        }
    },
    /**
     * Identify relevant laws and acts
     */
    identifyRelevantLaws: async (problemDescription) => {
        try {
            const client = getOpenAIClient();
            const message = await client.chat.completions.create({
                model: 'gpt-4o-mini',
                max_tokens: 1024,
                messages: [
                    {
                        role: 'user',
                        content: `You are a legal expert. Based on the following legal problem, identify the most relevant Indian laws, acts, and legal provisions that apply. Return as a JSON array of law names:\n\n${problemDescription}`,
                    },
                ],
            });
            const textContent = message.choices[0]?.message?.content;
            if (!textContent) {
                return [];
            }
            try {
                const jsonMatch = textContent.match(/\[[\s\S]*\]/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
            }
            catch {
                return textContent.split('\n').filter((line) => line.trim().length > 0);
            }
            return [];
        }
        catch (error) {
            console.error('Error identifying relevant laws:', error);
            throw new Error(`Failed to identify relevant laws: ${error.message}`);
        }
    },
    /**
     * Generate document template
     */
    generateDocumentTemplate: async (documentType, context) => {
        try {
            const client = getOpenAIClient();
            const message = await client.chat.completions.create({
                model: 'gpt-4o-mini',
                max_tokens: 2048,
                messages: [
                    {
                        role: 'user',
                        content: `You are a legal document expert. Generate a professional ${documentType} template for the following context:\n\n${context}\n\nProvide a complete, ready-to-use template.`,
                    },
                ],
            });
            const textContent = message.choices[0]?.message?.content;
            return textContent || 'Unable to generate template';
        }
        catch (error) {
            console.error('Error generating document template:', error);
            throw new Error(`Failed to generate document template: ${error.message}`);
        }
    },
    /**
     * Chat with AI legal assistant
     */
    chatWithAssistant: async (messages) => {
        try {
            const client = getOpenAIClient();
            const systemMessage = {
                role: 'system',
                content: 'You are a helpful legal assistant for JusticeLink. Provide accurate legal information and guidance based on Indian law. Always recommend consulting with a qualified lawyer for specific legal matters.',
            };
            const response = await client.chat.completions.create({
                model: 'gpt-4o-mini',
                max_tokens: 1024,
                messages: [systemMessage, ...messages.map((msg) => ({
                        role: msg.role,
                        content: msg.content,
                    }))],
            });
            const textContent = response.choices[0]?.message?.content;
            return textContent || 'Unable to process your request';
        }
        catch (error) {
            console.error('Error in chat with assistant:', error);
            throw new Error(`Failed to process chat: ${error.message}`);
        }
    },
};
//# sourceMappingURL=openaiService.js.map