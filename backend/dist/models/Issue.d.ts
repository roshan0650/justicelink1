import mongoose, { Document } from 'mongoose';
export interface IIssue extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    description: string;
    category: string;
    location?: string;
    status: 'open' | 'in-progress' | 'resolved' | 'closed';
    aiAnalysis?: {
        issueType: string;
        summary: string;
        relevantLaws: string[];
        nextSteps: string[];
        confidence: number;
    };
    assignedLawyer?: mongoose.Types.ObjectId;
    responses: Array<{
        lawyerId: mongoose.Types.ObjectId;
        message: string;
        createdAt: Date;
    }>;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IIssue, {}, {}, {}, mongoose.Document<unknown, {}, IIssue> & IIssue & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
//# sourceMappingURL=Issue.d.ts.map