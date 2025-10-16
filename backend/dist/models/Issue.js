import mongoose, { Schema } from 'mongoose';
const issueSchema = new Schema({
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
}, { timestamps: true });
export default mongoose.model('Issue', issueSchema);
//# sourceMappingURL=Issue.js.map