import { tokenStorage } from './api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface AIResponse {
  success: boolean;
  error?: string;
}

interface SummaryResponse extends AIResponse {
  summary?: string;
}

interface AdviceResponse extends AIResponse {
  advice?: string;
}

interface LawsResponse extends AIResponse {
  laws?: string[];
}

interface TemplateResponse extends AIResponse {
  template?: string;
}

interface ChatResponse extends AIResponse {
  response?: string;
}

export const aiAPI = {
  /**
   * Generate legal summary from problem description
   */
  generateLegalSummary: async (problemDescription: string): Promise<SummaryResponse> => {
    try {
      const token = tokenStorage.getToken();
      if (!token) {
        throw new Error('Not authenticated');
      }

      const response = await fetch(`${API_URL}/api/ai/legal-summary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ problemDescription }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate legal summary');
      }

      return response.json();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to generate legal summary',
      };
    }
  },

  /**
   * Generate legal advice based on problem description
   */
  generateLegalAdvice: async (problemDescription: string): Promise<AdviceResponse> => {
    try {
      const token = tokenStorage.getToken();
      if (!token) {
        throw new Error('Not authenticated');
      }

      const response = await fetch(`${API_URL}/api/ai/legal-advice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ problemDescription }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate legal advice');
      }

      return response.json();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to generate legal advice',
      };
    }
  },

  /**
   * Identify relevant laws and acts
   */
  identifyRelevantLaws: async (problemDescription: string): Promise<LawsResponse> => {
    try {
      const token = tokenStorage.getToken();
      if (!token) {
        throw new Error('Not authenticated');
      }

      const response = await fetch(`${API_URL}/api/ai/identify-laws`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ problemDescription }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to identify relevant laws');
      }

      return response.json();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to identify relevant laws',
      };
    }
  },

  /**
   * Generate legal document template
   */
  generateDocumentTemplate: async (documentType: string, context: string): Promise<TemplateResponse> => {
    try {
      const token = tokenStorage.getToken();
      if (!token) {
        throw new Error('Not authenticated');
      }

      const response = await fetch(`${API_URL}/api/ai/document-template`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ documentType, context }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate document template');
      }

      return response.json();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to generate document template',
      };
    }
  },

  /**
   * Chat with AI legal assistant
   */
  chatWithAssistant: async (
    messages: Array<{ role: 'user' | 'assistant'; content: string }>
  ): Promise<ChatResponse> => {
    try {
      const token = tokenStorage.getToken();
      if (!token) {
        throw new Error('Not authenticated');
      }

      const response = await fetch(`${API_URL}/api/ai/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to process chat');
      }

      return response.json();
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to process chat',
      };
    }
  },
};

