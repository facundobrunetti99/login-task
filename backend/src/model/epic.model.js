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
        story: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'story',
            required: true
        }

    }, {
    timestamps: true
}
)
export default mongoose.model('Epic', userSchema)