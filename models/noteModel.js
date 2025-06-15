// Imports
    import mongoose from "mongoose";

    import GitHubSlugger from "github-slugger";
    const slugger = new GitHubSlugger();

// Schema
    const noteSchema = new mongoose.Schema({
        title: {
            type: String        },
        content: {
            type: String,
            required: false
        },

        slug: {
            type: String,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    });

    // Navigate modifying note name
    noteSchema.pre("save", function (next) {
        if (!this.title || this.title.trim() === "") {
            this.title = "Untitled Note";
        }

        if(!this.isModified("title")) {
            return next();
        }

        this.slug = slugger.slug(this.title);
        next();
    });

// Exports
    export default mongoose.model("Note", noteSchema);