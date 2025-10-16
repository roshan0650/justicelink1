export declare const openaiService: {
    /**
     * Generate legal summary from problem description
     */
    generateLegalSummary: (problemDescription: string) => Promise<string>;
    /**
     * Generate legal advice based on problem description
     */
    generateLegalAdvice: (problemDescription: string) => Promise<string>;
    /**
     * Identify relevant laws and acts
     */
    identifyRelevantLaws: (problemDescription: string) => Promise<string[]>;
    /**
     * Generate document template
     */
    generateDocumentTemplate: (documentType: string, context: string) => Promise<string>;
    /**
     * Chat with AI legal assistant
     */
    chatWithAssistant: (messages: Array<{
        role: "user" | "assistant";
        content: string;
    }>) => Promise<string>;
};
//# sourceMappingURL=openaiService.d.ts.map