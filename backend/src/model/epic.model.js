import mongoose from "mongoose";

const epicSchema = new mongoose.Schema(
    {
        title:
        {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,

        },
        date: {
            type: Date,
            default: Date.now,
        },
        history: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'History',
            required: true
        }

    }, {
    timestamps: true
}
)
export default mongoose.model('Epic', userSchema)