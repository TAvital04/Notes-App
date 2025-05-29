// Imports
    import noteHandler from "../handlers/noteHandler.js";

// CRUD: Create
    const addNote = async (req, res) => {
        res.send("Add note");
    }
    const createNote = async (req, res) => {
        const noteData = req.body;
        const note = await noteHandler.createNote(noteData);
        //req.flash("success", `/${note.slug} added successfully :D`);
        res.redirect("/");
    }

// CRUD: Read
    const getNotes = async (req, res) => {
        const notes = await noteHandler.getAllNotes();
        res.json({title: "All Notes", notes});
    }

// Exports
    export default {
        addNote,
        createNote,
        getNotes
    }