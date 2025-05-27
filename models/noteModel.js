import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "note name is required"]
    },
    content: {
        type: [],
        required: false
    }
})

export default mongoose.model("Note", noteSchema);