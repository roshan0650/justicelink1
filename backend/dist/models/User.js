import mongoose, { Schema } from 'mongoose';
import bcryptjs from 'bcryptjs';
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        select: false,
    },
    phone: String,
    userType: {
        type: String,
        enum: ['user', 'lawyer'],
        default: 'user',
    },
    location: String,
    bio: String,
    profileImage: String,
    isVerified: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
});
// Compare password method
userSchema.methods.comparePassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
};
export default mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map