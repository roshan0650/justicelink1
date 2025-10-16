import mongoose, { Document } from 'mongoose';
export interface ILawyer extends Document {
    userId: mongoose.Types.ObjectId;
    barCouncilId: string;
    specializations: string[];
    location: string;
    availability: 'online' | 'offline' | 'both';
    proBono: boolean;
    rating: number;
    reviews: number;
    consultationFee?: number;
    languages: string[];
    experience: number;
    isVerified: boolean;
    verificationStatus: 'pending' | 'verified' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<ILawyer, {}, {}, {}, mongoose.Document<unknown, {}, ILawyer> & ILawyer & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
//# sourceMappingURL=Lawyer.d.ts.map