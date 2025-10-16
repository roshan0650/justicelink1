import mongoose, { Schema, Document } from 'mongoose';

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

const issueSchema = new Schema<IIssue>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: [
        'employment',
        'family',
        'property',
        'cyber',
        'consumer',
        'criminal',
        'civil',
        'tax',
        'other',
      ],
    },
    location: String,
    status: {
      type: String,
      enum: ['open', 'in-progress', 'resolved', 'closed'],
      default: 'open',
    },
    aiAnalysis: {
      issueType: String,
      summary: String,
      relevantLaws: [String],
      nextSteps: [String],
      confidence: {
        type: Number,
        min: 0,
        max: 100,
      },
    },
    assignedLawyer: {
      type: Schema.Types.ObjectId,
      ref: 'Lawyer',
    },
    responses: [
      {
        lawyerId: {
          type: Schema.Types.ObjectId,
          ref: 'Lawyer',
        },
        message: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IIssue>('Issue', issueSchema);

