import mongoose, { Schema } from 'mongoose';
const lawyerSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    barCouncilId: {
        type: String,
        required: [true, 'Bar Council ID is required'],
        unique: true,
    },
    specializations: {
        type: [String],
        required: [true, 'At least one specialization is required'],
        enum: [
            'Labor Law',
            'Family Law',
            'Property Law',
            'Cyber Law',
            'Consumer Rights',
            'Criminal Law',
            'Civil Law',
            'Tax Law',
        ],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    availability: {
        type: String,
        enum: ['online', 'offline', 'both'],
        default: 'both',
    },
    proBono: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    consultationFee: Number,
    languages: {
        type: [String],
        default: ['English'],
    },
    experience: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationStatus: {
        type: String,
        enum: ['pending', 'verified', 'rejected'],
        default: 'pending',
    },
}, { timestamps: true });
export default mongoose.model('Lawyer', lawyerSchema);
//# sourceMappingURL=Lawyer.js.map