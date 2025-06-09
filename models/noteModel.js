// Imports
    import mongoose from "mongoose";

    import GitHubSlugger from "github-slugger";
    const slugger = new GitHubSlugger();

// Schema
    const noteSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "note title is required"]
        },
        content: {
            type: String,
            required: false
        },

        slug: {
            type: String,
        }
    });

    // Navigate modifying note name
    noteSchema.pre("save", function (next) {
        if(!this.isModified("title")) {
            return next();
        }

        this.slug = slugger.slug(this.title);
        next();
    });

// Exports
    export default mongoose.model("Note", noteSchema);